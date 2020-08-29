a();

function a() {
	const a = 2000000000; //time
	const infinitycd = 167; //171 169 167
	const memorizecd = 6.84; //8.55 7.695 6.84
	var remaininginfinitycd = 0;
	var remainingmemorizecd = 0;
	const buffduration = 1 + 1.61;
	const infinityduration = (40 + 1) * buffduration;
	var infinitytime = 0;
	const infinitychance = 25 / 246; //FP 226 IL186 BS 246
	const refreshrate = 5;
	var finaldamage = [];
	const basefinaldamage = 171;
	const finaldamagegrowth = 3;
	var currentfinaldamage = 100;
	var averagefinaldamage = 0;
	var i;

	for(i = 100; i < 400; i++){
		finaldamage[i] = 0;
	}

	for(i = 0; i < a; i++){
		if(infinitytime >= infinityduration){
			currentfinaldamage = 100;
		}

		if(currentfinaldamage == 100){
			if(remainingmemorizecd <= 0 && infinitytime > memorizecd / infinitychance){
				remainingmemorizecd = memorizecd;
				if(Math.random() <= infinitychance){
					currentfinaldamage = basefinaldamage;
					infinitytime = 0;
				}
			}
		}
		if(currentfinaldamage == 100){
			if(remaininginfinitycd <= 0){
				remaininginfinitycd = infinitycd;
				currentfinaldamage = basefinaldamage;
				infinitytime = 0;
			}
		}

		if(i % refreshrate == 0){
			if(currentfinaldamage > 100){
				currentfinaldamage = currentfinaldamage + finaldamagegrowth;
			}
		}

		finaldamage[currentfinaldamage]++;
		infinitytime++;
		remaininginfinitycd--;
		remainingmemorizecd--;
	}
	for(i = 100; i < 400; i++){
		averagefinaldamage = averagefinaldamage + i / 100 * finaldamage[i];
	}
	averagefinaldamage = averagefinaldamage / a;
	document.write(averagefinaldamage);
}