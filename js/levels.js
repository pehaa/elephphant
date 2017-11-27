const generateLevels = () => {
	
	let rIntegers = Array();
	
	for ( let i = 0; i<10; i++ ) {
		rIntegers.push( 1 + Math.floor((Math.random() * 10)));
	}

	let levels = Array();

	levels.push({ 
		correctAnswer: rIntegers[0]+rIntegers[1],
		question : `${rIntegers[0]} + ${rIntegers[1]};`
	});

	levels.push({
		correctAnswer: rIntegers[2]*rIntegers[3],
		question: `${rIntegers[2]} * ${rIntegers[3]};`,
	});

	levels.push({
		correctAnswer: rIntegers[4] + rIntegers[5],
		boardMarkup : `$a = ${rIntegers[4]};`,
		question : `$a + ${rIntegers[5]};`,
		tip: `${rIntegers[4]} + ${rIntegers[5]}`
	});

	levels.push({
		correctAnswer: rIntegers[6] + rIntegers[7],
		boardMarkup : `$a = ${rIntegers[6]};
		$b = ${rIntegers[7]};`,
		question : `$a + $b;`,
		tip: `${rIntegers[6]} + ${rIntegers[7]}`
	});

	levels.push({
		correctAnswer: "WordPress",
		isString : true,
		boardMarkup : `$a = 'Word';
		$b = 'Press';`,
		question : `$a . $b;`,
		tip: 'Your fav CMS'
	});

	levels.push({
		correctAnswer: "Happy Birthday",
		isString : true,
		boardMarkup : `$a = 'Happy';`,
		question : `$a . ' Birthday';`
	});

	levels.push({
		correctAnswer: rIntegers[1] + rIntegers[2] + 2,
		boardMarkup : `$a = ${rIntegers[1]};
		$a = $a + ${rIntegers[2]};`,
		question : `$a + 2;`,
		tip: `${rIntegers[1]} + ${rIntegers[2]} + 2`
	});

	levels.push({
		correctAnswer: rIntegers[3] + 1,
		boardMarkup : `$a = ${rIntegers[3]};
		$a += 1;`,
		question : `$a;`,
		tip: `${rIntegers[3]} + 1; (same as $a = $a + 1;)`
	});

	levels.push({
		correctAnswer: rIntegers[4] - 1,
		boardMarkup : `$a = ${rIntegers[4]};
		$a -= 1;`,
		question : `$a;`,
		tip: `${rIntegers[4]} - 1; (same as $a = $a - 1;)`
	});

	levels.push({
		correctAnswer: rIntegers[2] + 2,
		boardMarkup : `$a = ${rIntegers[2]};
		$a += 2;`,
		question : `$a;`,
		tip: `${rIntegers[2]} + 2; (same as $a = $a + 2;)`
	});

	levels.push({
		correctAnswer: rIntegers[4]+rIntegers[5],
		boardMarkup : `function hello($a, $b){
			return $a + $b;  
		}`,
		question : `hello(${rIntegers[4]}, ${rIntegers[5]});`,
		tip: `hello's mission is to add the numbers: ${rIntegers[4]} + ${rIntegers[5]}`
	});

	levels.push({
		correctAnswer: rIntegers[1]*rIntegers[3],
		boardMarkup : `function hello($a, $b){
			return $a * $b;  
		}`,
		question : `hello(${rIntegers[1]}, ${rIntegers[3]});`,
		tip: `hello's mission is to multiply the numbers: ${rIntegers[1]} * ${rIntegers[3]}`
	});

	levels.push({
		correctAnswer: rIntegers[1],
		boardMarkup : `$a = array(${rIntegers[1]}, ${rIntegers[2]}, ${rIntegers[3]});`,
		question : `a[0];`,
		tip: `1st`
	});

	levels.push({
		correctAnswer: rIntegers[3],
		boardMarkup : `$a = array(${rIntegers[4]}, ${rIntegers[3]}, ${rIntegers[2]}, ${rIntegers[1]}, ${rIntegers[0]});`,
		question : `a[1];`,
		tip: `2nd`
	});

	levels.push({
		correctAnswer: rIntegers[2]+rIntegers[3],
		boardMarkup : `$a = array(${rIntegers[0]}, ${rIntegers[1]}, ${rIntegers[2]}, ${rIntegers[3]});`,
		question : `a[2] + a[3];`,
		tip: `add 3rd and 4th`
	});

	levels.push({
		correctAnswer: rIntegers[0]+rIntegers[3],
		boardMarkup : `$a = array(${rIntegers[0]}, ${rIntegers[1]}, ${rIntegers[2]}, ${rIntegers[3]});`,
		question : `a[0] + a[3];`,
		tip: `add 1st and 4th`
	});
	let booleanTip = ` true or false? `;
	levels.push({
		correctAnswer: 3,
		boardMarkup : `$a = array( 'pomme', 'orange', 'banane' );`,
		question : `count( $a );`,
		tip: `how many?`
	});
	levels.push({
		correctAnswer: !!(rIntegers[0] === rIntegers[1]),
		isBoolean : true,
		question : `${rIntegers[0]} === ${rIntegers[1]};`,
		tip: booleanTip
	});
	levels.push({
		correctAnswer: !!(rIntegers[1] === rIntegers[2]),
		isBoolean : true,
		question : `${rIntegers[1]} === ${rIntegers[2]};`,
		tip: ` true? false? `
	});
	levels.push({
		correctAnswer: !!(rIntegers[1] !== rIntegers[2]),
		isBoolean : true,
		question : `${rIntegers[1]} !== ${rIntegers[2]};`,
		tip: booleanTip
	});
	levels.push({
		correctAnswer: !!(rIntegers[1] > rIntegers[3]),
		isBoolean : true,
		question : `${rIntegers[1]} > ${rIntegers[3]};`,
		tip: booleanTip
	});
	levels.push({
		correctAnswer: !!(rIntegers[3] !== rIntegers[3]),
		isBoolean : true,
		question : `${rIntegers[3]} !== ${rIntegers[3]};`,
		tip: booleanTip
	});

	levels.push({
		correctAnswer: !!(rIntegers[7] === rIntegers[8]),
		isBoolean : true,
		boardMarkup : `$a = ${rIntegers[7]};`,
		question : `$a === ${rIntegers[8]};`,
		tip: `${rIntegers[7]} === ${rIntegers[8]}`
	});
	levels.push({
		correctAnswer: !!(rIntegers[7] !== rIntegers[8]),
		isBoolean : true,
		boardMarkup : `$a = ${rIntegers[7]};`,
		question : `$a !== ${rIntegers[8]};`,
		tip: `${rIntegers[7]} !== ${rIntegers[8]}`
	});
	levels.push({
		correctAnswer: rIntegers[7] > 3 ? 'win' : 'lose',
		isString : true,
		boardMarkup : `$random = ${rIntegers[7]};
		if ( $random > 3 ) {,
			$a = 'win';
		} else {
			$a = 'lose';
		}`,
		question : `$a;`,
		tip: `win or lose?`
	});
	levels.push({
		correctAnswer: rIntegers[1] === rIntegers[2] ? 10000 : 10,
		boardMarkup : `$random = ${rIntegers[1]};
		$price = 10;
		if ( $random === ${rIntegers[2]} ) {
			$price = 10000;
		}`,
		question : `$price;`
	});
	levels.push({
		correctAnswer: rIntegers[1] === 7 ? 10000 : (rIntegers[1] > 5 ? 100 : 10),
		boardMarkup : `$random = ${rIntegers[1]};
		if ( $random === 7 ) {
			$price = 10000;
		} elseif ( $random > 5 ) {
			$price = 100;
		} else {
			$price = 10;
		}`,
		question : `$price;`
	});

	levels.push({
		correctAnswer: 2*rIntegers[1] + rIntegers[2],
		boardMarkup : `function hi( $a, $b ) {
			if ( $a < $b ) {
				return $a + $b;
			} else {
				return $a * $b;
			}
		}`,
		question : `hi(${rIntegers[1]}, ${rIntegers[1] + rIntegers[2]});`,
		tip: `${rIntegers[1]} + ${rIntegers[1] + rIntegers[2]}`
	});

	levels.push({
		correctAnswer: (1+rIntegers[3]) * rIntegers[3],
		boardMarkup : `function hi( $a, $b ) {
			if ( $a < $b ) {
				return $a + $b;
			} else {
				return $a * $b;
			}
		}`,
		question : `hi(${rIntegers[3]+1}, ${rIntegers[3]});`,
		tip: `${rIntegers[3]+1} * ${rIntegers[3]}`
	});

	levels.push({
		correctAnswer: rIntegers[4] * rIntegers[4],
		boardMarkup : `function hi( $a, $b ) {
			if ( $a < $b ) {
				return $a + $b;
			} else {
				return $a * $b;
			}
		}`,
		question : `hi(${rIntegers[4]}, ${rIntegers[4]});`,
		tip: `${rIntegers[4]} * ${rIntegers[4]}`
	});

	levels.push({
		correctAnswer: rIntegers[1] * rIntegers[2] + rIntegers[2]+ rIntegers[3],
		boardMarkup : `function hi( $a, $b ) {
			return $a * $b;
		}
		function hello( $a, $b ){
			return $a + $b;
		}`,
		question : `hi(${rIntegers[1]}, ${rIntegers[2]}) + hello(${rIntegers[2]}, ${rIntegers[3]});`,
		tip: `(${rIntegers[1]} * ${rIntegers[2]}) + (${rIntegers[2]} + ${rIntegers[3]})`
	});

	levels.push({
		correctAnswer: (rIntegers[1] + 1) * rIntegers[2],
		boardMarkup : `function salut( $a ) {
			return $a + 1;
		}
		function hi( $a, $b ){
			return $a * $b;
		}
		$c = salut( ${rIntegers[1]} );`,
		question : `hi( $c, ${rIntegers[2]} );`,
		tip: `hi( ${rIntegers[1]+1}, ${rIntegers[2]} );`
	});
	levels.push({
		correctAnswer: rIntegers[1] === 1 ? 12 : ( rIntegers[1] === 2 ? 18 : rIntegers[1]*7),
		boardMarkup : `function dog_age( $a ) {
			if ( $a === 1 ){
				return 12;
			} elseif ( $a === 2 ) {
				return 18;
			} else {
				return 7*$a;
			}
		}`,
		question : `dog_age( ${rIntegers[1]} );`
	});

	levels.push({
		isString: true,
		correctAnswer: 'PHP is the best!',
		boardMarkup : `function message( $name ) {
			return $name . ' is the best!';
		}`,
		question : `message( 'PHP' );`
	});

	const strings = ['weekends', 'mondays', 'summer', 'winter', 'food']

	levels.push({
		isString: true,
		correctAnswer: `I love ${strings[rIntegers[1]%5]}!`,
		boardMarkup : `function love( $thing ) {
			$text = 'I love ';
			$text .= $thing;
			$text .= '!';
			return $text;
		}`,
		question : `message( '${strings[rIntegers[1]%5]}' );`,
		tip: 'I love ...!'
	});

	return levels;

}