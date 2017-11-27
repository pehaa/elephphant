'use strict';

const config = {
	levelTimeout: 700,
	prefix: 'elephphant',
	winnerMessage : `<strong class="bounceIn">You did it!</strong>`,
	code: true,
	preformate: true,
	language: 'php',
	defaultPlaceholder: '?',
	guessesWithoutTip: 3
};

let currentLevel = parseInt( localStorage.currentLevel, 10 ) || 0;
let levels = generateLevels();
let currentLevelGuesses = parseInt( localStorage.currentLevelGuesses, 10 ) || 0;

/* Does pageSelecors.input = document.getElementById( "elephphant-input" ); */
const pageSelectors = ['bg', 'input', 'editor', 'go', 'content', 'markup', 'progress', 'reset', 'winner' ].reduce( ( result, item ) => {
	result[item] = document.getElementById( `${config.prefix}-${item}` ); 
	return result;
}, {});


pageSelectors.reset.addEventListener( 'click', () => {
	resetProgress();
});

pageSelectors.input.addEventListener( 'keypress', ( event ) => {
	event.stopPropagation();
	if (event.keyCode ==  13) {
		enterHit();
		return false;
	}
});

pageSelectors.editor.addEventListener( 'click', () => {
	pageSelectors.input.focus();
});

pageSelectors.go.addEventListener( 'click', () => {
	enterHit();
});

const resetProgress = () => {
	currentLevel = 0;
	levels = generateLevels();
	pageSelectors.content.classList.remove( 'solid-hidden' );
	pageSelectors.winner.classList.add('solid-hidden');
	setTimeout( function() {
		pageSelectors.winner.innerHTML = '';
	}, 2000);
	loadLevel(); 
}

const addAnimation = (el, className) => {
	el.classList.add(className);
	el.addEventListener( 'animationend', function( event ) {
		event.currentTarget.classList.remove( className );
	});
}

const enterHit = () => {
	checkAnswer( pageSelectors.input.value );
}


const checkAnswer = ( answer ) => {

	if ( answer.length == 0 || !checkResults( answer, levels[currentLevel].correctAnswer ) ) {
		
		addAnimation( pageSelectors.editor, 'shake');
		addAnimation( pageSelectors.input, 'wrong');
		pageSelectors.input.value = '';
		++currentLevelGuesses;
		localStorage.setItem( 'currentLevelGuesses', currentLevelGuesses );
		displayTip();
	} else {   
		addAnimation( pageSelectors.input, 'ok');  
		addAnimation( pageSelectors.content, 'hidden');
		currentLevel = Math.min( currentLevel + 1, levels.length );
		currentLevelGuesses = 0;
		localStorage.setItem( 'currentLevelGuesses', currentLevelGuesses );
		setTimeout( function() {
			if ( currentLevel === levels.length ) {
				winGame();
			} else {
				loadLevel();
			} 
		}, config.levelTimeout); 
	}
}

const winGame = () => {
	localStorage.setItem( 'currentLevel', currentLevel );
	pageSelectors.winner.classList.remove( 'solid-hidden' );
	pageSelectors.winner.innerHTML = config.winnerMessage;
	visualProgress( 100 );
	pageSelectors.content.classList.add( 'solid-hidden' ); 

}

const checkResults = ( ruleSelected,levelSelected ) => {

	if ( levels[currentLevel].isBoolean ) {
		if ( levelSelected ) {
			return ruleSelected === 'true' || ruleSelected == 1;
		} 
		return ruleSelected === 'false' || ruleSelected == 0;    
	}
	if ( levels[currentLevel].isString ) {
		ruleSelected = ruleSelected.replace(/^([\"\'])(.*)(\1)$/g, "$2");
	}
	return ruleSelected  == levelSelected;

}

const preformate = ( text, outerClass = '' ) => {
	if ( outerClass ) {
		outerClass = `class="${outerClass}"`;
	}
	if ( config.code && config.preformate ) {
		return `<pre ${outerClass}><code>${Prism.highlight( text, Prism.languages[config.language])}</pre></code>`;
	}
	return `<div ${outerClass}>${text}</div>`;
	

}

const loadBoard = () => {

	pageSelectors.markup.innerHTML = '';

	if ( levels[currentLevel].boardMarkup ) {
		pageSelectors.markup.innerHTML = preformate( levels[currentLevel].boardMarkup );
	}

	if ( levels[currentLevel].comment ) {
		pageSelectors.markup.innerHTML += `<pre style="color:#ccc; font-size: 16px; margin-bottom: 12px"><code>/*${levels[currentLevel].comment}*/</code></pre>`;
	}
	pageSelectors.markup.innerHTML += preformate( levels[currentLevel].question, 'question' );
	displayTip();
}

const displayTip = () => {

	if ( levels[currentLevel].tip && currentLevelGuesses >= config.guessesWithoutTip ) {
		pageSelectors.input.placeholder = levels[currentLevel].tip;
	} else {
		pageSelectors.input.placeholder = config.defaultPlaceholder;
	}

}

const visualProgress = ( percent ) => {
	
	pageSelectors.progress.value = percent;
	pageSelectors.bg.style.backgroundPosition = `${percent}% 100%`;

}

function loadLevel(){
	
	if ( currentLevel === levels.length ) {
		winGame();
		return;
	}
	if( currentLevel < 0 || currentLevel >= levels.length) {
		currentLevel = 0;
	}
	visualProgress( ( currentLevel )/levels.length * 100 );  
	localStorage.setItem( 'currentLevel', currentLevel );

	loadBoard();

	pageSelectors.input.value = '';
	pageSelectors.input.focus();
}

loadLevel();