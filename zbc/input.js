var moment = require("moment");

process.stdin.setEncoding("utf8");
// ------------------------------------------------------
// 体重以kg为单位
const questions = ["体重", "早点", "中饭", "晚餐", "零食", "步数"];

// ------------------------------------------------------
//日期
let date = moment(new Date()).format("YYYY-MM-DD");
//[对应于questions]
let data = {};
let i = 0;

console.log(questions[i]);
process.stdin.on("readable", () => {
	data[questions[i]] = process.stdin
		.read()
		.replace(/\n/g, ``)
		.replace(/\r/g, ``);
	if (data[questions[i]] !== null) {
		process.stdout.write(`${questions[i]}: ${data[questions[i]]}`);
		i++;

		if (i < questions.length) {
			process.stdin.resume();
			console.log(questions[i]);
		}
	}
});

//输入结束阶段
process.on("beforeExit", () => {
	console.log(`\n` + date + `的输入数据\n`);
	console.log(data);
	console.log(`------------------结束输入------------------`);		//开始写入文件






	
});
