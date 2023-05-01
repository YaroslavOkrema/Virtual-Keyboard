function createKeyboard() {
    let container = document.querySelector(".container"); //нахожу элемент на странице с классом "container" и присваивает его переменной container
  
    let keyboardTitleDiv = document.createElement("div"); //создаю новые элементы div с помощью метода document.createElement(), для создания элементов клавы
    let keyboardInputDiv = document.createElement("div");
    let keyboardDiv = document.createElement("div");
  
    keyboardInputDiv.className = "keyboard-input"; // утанавливаю классы 
    keyboardDiv.className = "keyboard";
  
    keyboardTitleDiv.innerHTML = "<h1 class='title'>Virtual Keyboard</h1>"; // утанавливаю содержимое 
    keyboardInputDiv.innerHTML = "<textarea id='input-button' class='input-pole' type='text'></textarea>";
    keyboardDiv.innerHTML = `
        <div class="row">
            <div class="key" data-key="192" data-value="\`">\`</div>
            <div class="key" data-key="49" data-value="1">1</div>
            <div class="key" data-key="50" data-value="2">2</div>
            <div class="key" data-key="51" data-value="3">3</div>
            <div class="key" data-key="52" data-value="4">4</div>
            <div class="key" data-key="53" data-value="5">5</div>
            <div class="key" data-key="54" data-value="6">6</div>
            <div class="key" data-key="55" data-value="7">7</div>
            <div class="key" data-key="56" data-value="8">8</div>
            <div class="key" data-key="57" data-value="9">9</div>
            <div class="key" data-key="48" data-value="0">0</div>
            <div class="key" data-key="189" data-value="-">-</div>
            <div class="key" data-key="187" data-value="=">=</div>
            <div class="key backspace" data-key="8" data-value="Backspace">Backspace</div>
        </div>
        <div class="row">
            <div class="key tab" data-key="9" data-value="Tab">Tab</div>
            <div class="key" data-key="81" data-value="q">q</div>
            <div class="key" data-key="87" data-value="w">w</div>
            <div class="key" data-key="69" data-value="e">e</div>
            <div class="key" data-key="82" data-value="r">r</div>
            <div class="key" data-key="84" data-value="t">t</div>
            <div class="key" data-key="89" data-value="y">y</div>
            <div class="key" data-key="85" data-value="u">u</div>
            <div class="key" data-key="73" data-value="i">i</div>
            <div class="key" data-key="79" data-value="o">o</div>
            <div class="key" data-key="80" data-value="p">p</div>
            <div class="key" data-key="219" data-value="[">[</div>
            <div class="key" data-key="221" data-value="]">]</div>
            <div class="key" data-key="220" data-value="\\">\\</div>
            <div class="key del" data-key="46" data-value="Del">Del</div>
        </div>
        <div class="row">
            <div class="key capslock" data-key="20" data-value="CapsLock">CapsLock</div>
            <div class="key" data-key="65" data-value="a">a</div>
            <div class="key" data-key="83" data-value="s">s</div>
            <div class="key" data-key="68" data-value="d">d</div>
            <div class="key" data-key="70" data-value="f">f</div>
            <div class="key" data-key="71" data-value="g">g</div>
            <div class="key" data-key="72" data-value="h">h</div>
            <div class="key" data-key="74" data-value="j">j</div>
            <div class="key" data-key="75" data-value="k">k</div>
            <div class="key" data-key="76" data-value="l">l</div>
            <div class="key" data-key="186" data-value=";">;</div>
            <div class="key" data-key="222" data-value="'">'</div>
            <div class="key enter" data-key="13" data-value="Enter">Enter</div>
        </div>
        <div class="row">
            <div class="key lshift shift" data-key="16" data-value="Shift">Shift</div>
            <div class="key" data-key="90" data-value="z">z</div>
            <div class="key" data-key="88" data-value="x">x</div>
            <div class="key" data-key="67" data-value="c">c</div>
            <div class="key" data-key="86" data-value="v">v</div>
            <div class="key" data-key="66" data-value="b">b</div>
            <div class="key" data-key="78" data-value="n">n</div>
            <div class="key" data-key="77" data-value="m">m</div>
            <div class="key" data-key="188" data-value=",">,</div>
            <div class="key" data-key="190" data-value=".">.</div>
            <div class="key" data-key="191" data-value="/">/</div>
            <div class="key up" data-key="38" data-value="▲">▲</div>
            <div class="key rshift shift" data-key="16" data-value="Shift">Shift</div>
        </div>
        <div class="row">
            <div class="key lctrl" data-key="17" data-value="Ctrl">Ctrl</div>
            <div class="key win" data-key="91" data-value="Win">Win</div>
            <div class="key lalt" data-key="18" data-value="Alt">Alt</div>
            <div class="key space" data-key="32" data-value="Space">Space</div>
            <div class="key ralt" data-key="18" data-value="Alt">Alt</div>
            <div class="key left" data-key="37" data-value="◀">◀</div>
            <div class="key down" data-key="40" data-value="▼">▼</div>
            <div class="key right" data-key="39" data-value="▶">▶</div>
            <div class="key rctrl" data-key="17" data-value="Ctrl">Ctrl</div>
        </div>`;

    container.appendChild(keyboardTitleDiv); //добавляем созданные элементы в контейнер
    container.appendChild(keyboardInputDiv);
    container.appendChild(keyboardDiv);
}
createKeyboard();
            
//ЭФФЕКТЫ ПРИ НАЖАТИИ НА КЛАВИШИ 

const virtualKeyboard = document.querySelector('.keyboard');
const keys = virtualKeyboard.querySelectorAll('.key');

// обработчик события нажатия на кнопку
document.addEventListener('keydown', function(event) {
  // получаю код клавиши на которую нажимаю
  const keyCode = event.which;
  
  // тут я ищу клавишу на клаве 
  keys.forEach(function(key) {
    if (key.getAttribute('data-key') == keyCode) {
      key.classList.add('selected');
    }
  });
});

document.addEventListener('keyup', function(event) {
    const keyCode = event.which;
  
    keys.forEach(function(key) {
      if (key.getAttribute('data-key') == keyCode) {
        key.classList.remove('selected');
      }
    });
});

//ВВОД ПРИ НАЖАТИИ НА КЛАВИШИ МЫШКОЙ 

const key = document.querySelectorAll('.key');
const inputField = document.getElementById('input-button');

let isShiftPressed = false;
let isCapsLockOn = false;

// Обрабатываем событие click для каждой клавиши
key.forEach(key => {
  key.addEventListener('click', () => {
    // Получаем значение клавиши
    const value = key.getAttribute('data-value');
    if (value === "Backspace") {
      inputField.value = inputField.value.slice(0, -1);
    } else if (value === "Del") {
      const cursorPosition = inputField.selectionStart;
      inputField.value = inputField.value.substring(0, cursorPosition) + inputField.value.substring(cursorPosition + 1);
    } else if (value === "Space") {
      inputField.value += " ";
    } else if (value === "Tab") {
      inputField.value += "\t";
    } else if (value === "Enter") {
      inputField.value += "\n";
    } else if (value === "Shift") {
      
    } else if (value === "CapsLock") {
      isCapsLockOn = !isCapsLockOn;
    } else {
      const letter = isCapsLockOn ? value.toUpperCase() : value.toLowerCase();
      inputField.value += isShiftPressed ? letter.toUpperCase() : letter.toLowerCase();
    }
  });
});

document.addEventListener('keydown', event => {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!key) return;

  event.preventDefault();

  const value = key.getAttribute('data-value');
  if (value === "Backspace") {
    inputField.value = inputField.value.slice(0, -1);
  } else if (value === "Del") {
    const cursorPosition = inputField.selectionStart;
    inputField.value = inputField.value.substring(0, cursorPosition) + inputField.value.substring(cursorPosition + 1);
  } else if (value === "Space") {
    inputField.value += " ";
  } else if (value === "Tab") {
    inputField.value += "\t";
  } else if (value === "Enter") {
    inputField.value += "\n";
  } else if (value === "Shift") {
    if (event.key === "Shift") {
      isShiftPressed = true;
    } else if (event.key === "CapsLock") {
      
    }
    if (event.key === 'Shift') {
      // Изменяем текст каждой кнопки на соответствующий символ в верхнем регистре
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let char = key.innerHTML.trim();
        let index = lowerCaseChars.indexOf(char);
        if (index !== -1) {
          key.innerHTML = upperCaseChars[index];
        }
      }
    }
  } else if (value === "CapsLock") {
    isCapsLockOn = !isCapsLockOn;
  } else if (value === "key left") {
    inputField.value += "◀";
  }
  else {
    const letter = isCapsLockOn ? value.toUpperCase() : value.toLowerCase();
    inputField.value += isShiftPressed ? letter.toUpperCase() : letter.toLowerCase();
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === "Shift") {
    isShiftPressed = false;
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let char = key.innerHTML.trim();
      let index = upperCaseChars.indexOf(char);
      if (index !== -1) {
        key.innerHTML = lowerCaseChars[index];
      }
    }
  }
});

document.addEventListener('mousedown', function(event) {
  if (event.target.classList.contains("shift")) {
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let char = key.innerHTML.trim();
      let index = lowerCaseChars.indexOf(char);
      if (index !== -1) {
        key.innerHTML = upperCaseChars[index];
      }
    }
  }
});

document.addEventListener('mouseup', function(event) {
  if (event.target.classList.contains("shift")) {
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let char = key.innerHTML.trim();
      let index = upperCaseChars.indexOf(char);
      if (index !== -1) {
        key.innerHTML = lowerCaseChars[index];
      }
    }
  }
});






// Создаем массив символов в верхнем регистре
let upperCaseChars = ['~','!','@','#','$','%','^',"&amp;",'*','(',')','_','+','Q','W','E','R','T','Y','U','I','O','P','{','}','|','A','S','D','F','G','H','J','K','L',':','"','Z','X','C','V','B','N','M','&lt;','&gt;','?'];

// Создаем массив символов в нижнем регистре
let lowerCaseChars = ['`','1','2','3','4','5','6','7','8','9','0','-','=','q','w','e','r','t','y','u','i','o','p','[',']','\\','a','s','d','f','g','h','j','k','l',';','\'','z','x','c','v','b','n','m',',','.','/'];

