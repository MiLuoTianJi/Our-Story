export function randomNum(max: any = 100, min: any = 0) {
	return ~~(Math.random() * (max - min) + min);
}
