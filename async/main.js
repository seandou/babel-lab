class Log {

  timeout(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });    
  }

  async delayPrint(value, ms) {
    await this.timeout(ms);
    console.log(value);
  }

}

async function doPrint() {
  let log = new Log();
  const start = new Date;
  await log.delayPrint('hello', 200);
  const ms = new Date - start;
  console.log(`${ms}ms is taken`);  
}

doPrint();