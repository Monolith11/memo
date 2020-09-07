a();

function a() {
	const a = 2000000000; //time
//	const infinitycd = 167; //171 169 167
//	const memorizecd = 6.84; //8.55 7.695 6.84
	const infinitycd = 171; //171 169 167
	const memorizecd = 8.55; //8.55 7.695 6.84
	var remaininginfinitycd = 0;
	var remainingmemorizecd = 0;
//	const buffduration = 1 + 1.74;
	const buffduration = 1 + 1.5;
	const infinityduration = (40 + 1) * buffduration;
	var infinitytime = 0;
//	const infinitychance = 25 / 226; //FP226 IL186 BS 246
	const infinitychance = 25 / 186; //FP226 IL186 BS 246
//	const refreshrate = 5;
	const refreshrate = 3;
	var finaldamage = [];
	const basefinaldamage = 171;
	const finaldamagegrowth = 3;
	var currentfinaldamage = 100;
	var averagefinaldamage = 0;
	var i;

	var unstablecount = 0;

	for(i = 100; i < 400; i++){
		finaldamage[i] = 0;
	}

	for(i = 0; i < a; i++){
		if(infinitytime >= infinityduration){
			currentfinaldamage = 100;
		}

		if(currentfinaldamage == 100){
			if(remaininginfinitycd <= 0){
				remaininginfinitycd = infinitycd;
				currentfinaldamage = basefinaldamage;
				infinitytime = 0;
			}
		}

		//if(currentfinaldamage == 100){ //only while no infinity
		//if(currentfinaldamage == 100 || infinityduration - infinitytime <= memorizecd / infinitychance){ //try to roll infinity before infinity ends
		if((currentfinaldamage == 100 || infinityduration - infinitytime <= memorizecd / infinitychance) && remaininginfinitycd > 0){ //try to roll infinity before infinity ends, but only while infinity is on cd
		//if((currentfinaldamage == 100 || infinityduration - infinitytime <= memorizecd / infinitychance) && remaininginfinitycd <= memorizecd / infinitychance){ //try to roll infinity before infinity ends, but only while infinity is on cd, including chance to roll infinity
		//if(1){ //always use
		//if(remaininginfinitycd > 0){ //always use, but only while infinity is on cd
		//if(remaininginfinitycd <= memorizecd / infinitychance){ //always use, but only while infinity is on cd, including chance to roll infinity
			if(remainingmemorizecd <= 0){
				remainingmemorizecd = memorizecd;
				unstablecount++;
				if(Math.random() <= infinitychance){
					currentfinaldamage = basefinaldamage;
					infinitytime = 0;
				}
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
	document.write(averagefinaldamage + ", " + unstablecount + ", " + (1 - finaldamage[100] / a));
}