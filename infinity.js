a();

function a() {
	const a = 2000000000; //time
	const infinitycd = 171000; //171000 169000 167000
	const memorizecd = 8550; //8550 7695 6840
	var remaininginfinitycd = 0;
	var remainingmemorizecd = 0;
	const buffduration = 1 + 1.75;
	const infinityduration = (40 + 1) * 1000 * buffduration;
	var infinitytime = 0;
	const infinitychance = 25 / 246; //FP226 IL186 BS 246
	const refreshrate = 5000;
	var finaldamage = [];
	const basefinaldamage = 171;
	const finaldamagegrowth = 3;
	var currentfinaldamage = 100;
	var averagefinaldamage = 0;

	const infinityDelay = 600*0; //*0 for sheet calculation
	const unstableDelay = 870*0; //*0 for sheet calculation
	const unstableDelay2 = 890*0; //*0 for sheet calculation
	var characterDelay = 0;
	var characterIsUsingInfinity = 0;

	const useUnstable = 0;

	var i;

	var infinitycount = 0;
	var unstablecount = 0;

	for(i = 100; i < 400; i++){
		finaldamage[i] = 0;
	}

	for(i = 0; i < a; i++){
		if(infinitytime >= infinityduration){
			currentfinaldamage = 100;
		}

		if(characterDelay <= 0) {
			if(currentfinaldamage == 100){
				if(remaininginfinitycd <= 0){
					remaininginfinitycd = infinitycd;
					characterDelay = infinityDelay;
					characterIsUsingInfinity = 1;
					infinitytime = 0;
					infinitycount++;
				}
			}

			if(useUnstable == 1){
				if(characterIsUsingInfinity == 0){
					if(currentfinaldamage == 100){ //only while no infinity
					//if(currentfinaldamage == 100 || infinityduration - infinitytime <= memorizecd / infinitychance){ //try to roll infinity before infinity ends
					//if((currentfinaldamage == 100 || infinityduration - infinitytime <= memorizecd / infinitychance) && remaininginfinitycd > memorizecd / infinitychance){ //try to roll infinity before infinity ends, but only while infinity is on cd
					//if((currentfinaldamage == 100 && remaininginfinitycd > 0) || (infinityduration - infinitytime <= memorizecd / infinitychance && remaininginfinitycd > memorizecd / infinitychance)){ //try to roll infinity before infinity ends, but only while infinity is on cd
					//if(1){ //always use
					//if(remaininginfinitycd > 0){ //always use, but only while infinity is on cd
					//if(remaininginfinitycd <= memorizecd / infinitychance){ //always use, but only while infinity is on cd, including chance to roll infinity
						if(remainingmemorizecd <= 0){
							remainingmemorizecd = memorizecd;
							characterDelay = unstableDelay;
							unstablecount++;
							if(Math.random() <= infinitychance){
								characterDelay += infinityDelay;
								characterIsUsingInfinity = 1;
								infinitytime = 0;
							}else{
								characterDelay += unstableDelay2;
							}
						}
					}
				}
			}
		}

		if(i % refreshrate == 0){
			if(currentfinaldamage > 100){
				currentfinaldamage = currentfinaldamage + finaldamagegrowth;
			}
		}

		if(characterDelay == 0 && characterIsUsingInfinity == 1) {
			currentfinaldamage = basefinaldamage;
			characterIsUsingInfinity = 0;
		}else if(characterDelay <= 0) {
			finaldamage[currentfinaldamage]++;
		}
		characterDelay--;
		infinitytime++;
		remaininginfinitycd--;
		remainingmemorizecd--;
	}
	for(i = 100; i < 400; i++){
		averagefinaldamage = averagefinaldamage + i / 100 * finaldamage[i];
		if(finaldamage[i] > 0) {
			document.write((finaldamage[i] / a) + ",");
		}
	}
	averagefinaldamage = averagefinaldamage / a;
	document.write("<br>" + averagefinaldamage + ", " + a / infinitycount / 1000 + "," + a / unstablecount / 1000 + ", " + (1 - finaldamage[100] / a));
}