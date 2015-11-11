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

function doPrint() {
  let log = new Log();
  const start = new Date;
  log.delayPrint('hello', 200).then(function() {
    const ms = new Date - start;
    console.log(`${ms}ms is taken`);  
  });
}

doPrint();