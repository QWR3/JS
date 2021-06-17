function getUp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(`проснувся`);
      resolve('проснувся');
    }, Math.round(Math.random() * 100));
  });
}

function brushTeeth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(`почистив зуби`);
      resolve(`почистив зуби`);
    }, Math.round(Math.random() * 100));
  });
}

function drink(whotDrink) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(`попив`);
      resolve(`попив ${whotDrink}`);
    }, Math.round(Math.random() * 100));
  });
}

function breakfast(whotEat) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(`поїв`);
      resolve(`поїв ${whotEat}`);
    }, Math.round(Math.random() * 100));
  });
}

function learning() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.round(Math.random() * 100) % 5) {
        // console.log(`пішов дивитись лекцію =)`);
        resolve(`пішов дивитись лекцію =)`);
      } else {
        // console.log(`розбирався з linux, до програмування не дійшов`);
        reject(`розбирався з linux, до програмування не дійшов`);
      }
    }, Math.round(Math.random() * 100));
  });
}

function lunch(whotEat) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.round(Math.random() * 100) % 5) {
        // console.log(`пообідав тим , що зїв`);
        resolve(`пообідав тим , що зїв ${whotEat}`);
      } else {
        // console.log(`за комп'ютером забув про їжу`);
        reject(`за комп'ютером забув про їжу `);
      }
    }, Math.round(Math.random() * 100));
  });
}

function writeCode() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.round(Math.random() * 100) % 5) {
        // console.log(`написав хороший код =)`);
        resolve(`написав хороший код =)`);
      } else {
        // console.log(`написав говнокод`);
        reject(`написав говнокод`);
      }
    }, Math.round(Math.random() * 100));
  });
}

function dinner(whotEat) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(`повечеряв`);
      resolve(`повечеряв тим , що зїв ${whotEat}`);
    }, Math.round(Math.random() * 100));
  });
}

function shower() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log(`помився`);
      resolve(`помився`);
    }, Math.round(Math.random() * 100));
  });
}

function goSleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log('ліг спати');
      resolve(`ліг спати`);
    }, Math.round(Math.random() * 100));
  });
}

// getUp()
//   .then(result => {
//     console.log(result);
//     return brushTeeth();
//   })
//   .then(result => {
//     console.log(result);
//     return drink('чаю');
//   })
//   .then(result => {
//     console.log(result);
//     return breakfast(`пюрешки`);
//   })
//   .then(result => {
//     console.log(result);
//     return learning();
//   })
//   .then(result => {
//     console.log(result);
//     return lunch(`пюрешки`);
//   })
//   .then(result => {
//     console.log(result);
//     return writeCode();
//   })
//   .then(result => {
//     console.log(result);
//     return dinner(`пюрешки`);
//   })
//   .then(result => {
//     console.log(result);
//     return shower();
//   })
//   .then(result => {
//     console.log(result);
//     return goSleep();
//   })
//   .catch(resolve => {
// console.log('************ERROR*****************');
//     console.log(resolve);
// console.log('************ERROR*****************');
async function myDay() {
  try {
    let getUpResult = await getUp();
    console.log(getUpResult);
    let brushTeethResult = await brushTeeth();
    console.log(brushTeethResult);
    let drinkResult = await drink('чаю');
    console.log(drinkResult);
    let breakfastResult = await breakfast(`пюрешки`);
    console.log(breakfastResult);
    let learningResult = await learning();
    console.log(learningResult);
    let lunchResult = await lunch(`пюрешки`);
    console.log(lunchResult);
    let writeCodeResult = await writeCode();
    console.log(writeCodeResult);
    let dinnerResult = await dinner(`пюрешки`);
    console.log(dinnerResult);
    let showerResult = await shower();
    console.log(showerResult);
    let goSleepResult = await goSleep();
    console.log(goSleepResult);

  } catch (e) {
    console.log('************ERROR*****************');
    console.log(e);
    console.log('************ERROR*****************');
  }
}

myDay();
