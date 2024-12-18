function findAllJavascriptFiles(folder, callback : () => void, result : string[] = []) {
  let countFolder = 0
  folder.size((limit) => {
    for(let i = 0; i < limit; i++){
      folder.read(i, (file) => {
        if(typeof file === 'object'){
          countFolder++
          findAllJavascriptFiles(file, callback, result)
        }
        if(typeof file === 'string' && file.endsWith('.js')){
          result.push(file)
        }
        if(i === limit - 1 && countFolder === 0 ){
          callback(result)
        }
      })
    }   
  })
}

function Folder(files) {
  const rand = () => Math.random() * 500;

  return {
    read: (index, cb) => void setTimeout(cb, rand(), files[index]),
    size: (cb) => void setTimeout(cb, rand(), files.length),
  };
}

const root = Folder([
  "1.js",
  "2.js",
  Folder([
    Folder([
      "3.txt",
    ]),
    "4.js",
  ]),
  Folder([
    "5.png",
    "6.js",
    Folder([
      "7.txt",
    ]),
  ]),
  "8.html",
]);

findAllJavascriptFiles(root, arr => {
  console.log(arr); // arr === ["1.js", "2.js", "4.js", "6.js"]
})
