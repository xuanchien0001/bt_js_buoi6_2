const output = document.querySelector(".btn");
const ketqua = document.querySelector(".ketqua");
output.onclick = function (event) {
  event.preventDefault();
  const input = document.querySelector(".form-control").value * 1;
  let arr_so_nguyen_to = [];
  let arr_not_songuyento = [];
  let arrInput = [2];

  for (let i = 3; i <= input; i += 2) {
    arrInput.push(i);
    for (let a = 3; a < i; a++) {
      if (i % a === 0) {
        //   console.log(i, a);
        arr_not_songuyento.push(i);
        break;
      }
    }
  }

  if (input < 9) {
    arr_so_nguyen_to = arrInput;
    console.log(arr_so_nguyen_to);
    ketqua.innerHTML = arr_so_nguyen_to;
    return;
  }

  for (let i = 0; i < arrInput.length; i++) {
    for (a = 0; a < arr_not_songuyento.length; a++) {
      if (arrInput[i] === arr_not_songuyento[a]) {
        arrInput.splice(i, 1);
        arr_so_nguyen_to = arrInput;
      }
    }
  }
  //   console.log("k nt", arr_not_songuyento);
  //   console.log(arrInput);
  //   console.log(arr_so_nguyen_to);

  ketqua.innerHTML = arr_so_nguyen_to.join("-");
};
