
var lang = 1;	// 1: Urdu, 0: English

// Urdu keyboard map based on Phonetic Keyboard Layout

var urdukey_phonetic = [
  0x0020,0x0021,0x002D,0x0023,0x064A,0x066A,0x0653,0x2024,0x0029,0x0028,0x064C,0x0653,0x060C,0x0674,0x06D4,0x002F,
0x06F0,0x06F1,0x06F2,0x06F3,0x06F4,0x06F5,0x06F6,0x06F7,0x06F8,0x06F9,0x003A,0x061B,0x0650,0x0624,0x064E,0x061F,
0x0655,0x0622,0xE000,0x062B,0x0688,0xE001,0xE003,0x063A,0x062D,0x0670,0x0636,0x062E,0xE002,0x0655,0x06BA,0x0629,
0x064F,0x0652,0x0691,0x0635,0x0679,0x0621,0x0638,0xFDFA,0x0698,0x064A,0x0630,0x0647,0xFDF2,0xE004,0x0652,0x0651,
0x064B,0x0627,0x0628,0x0686,0x062F,0x0639,0x0641,0x06AF,0x06BE,0x06CC,0x062C,0x06A9,0x0644,0x0645,0x0646,0x06C1,
0x067E,0x0642,0x0631,0x0633,0x062A,0x0626,0x0637,0x0648,0x0634,0x06D2,0x0632,0x2018,0x0674,0x2019,0x064D
];
var urdukey_urdu98 = [
0x0020,0x0021,0x0022,0x0023,0x06E4,0x066A,0x0653,0x0027,
0x0029,0x0028,0x002A,0x002B,0x060C,0x002D,0x06D4,0x002F,
0x06F0,0x06F1,0x06F2,0x06F3,0x06F4,0x06F5,0x06F6,0x06F7,
0x06F8,0x06F9,0x003A,0x061B,0xFD3E,0x003D,0xFD3F,0x061F,
0x0655,0x0650,0x0688,0xE001,0x0630,0x063A,0x064B,0x064D,
0x0622,0x0621,0x064F,0x064C,0xE004,0xFDFA,0x0691,0x0647,
0xE000,0x0624,0x0632,0x0651,0x0679,0x062E,0x0626,0x064E,
0x0636,0x064A,0x0698,0x06BE,0x0670,0x0637,0x0652,0xE003,
0x0629,0x0633,0x0628,0x062B,0x062F,0x0639,0x0641,0x06AF,
0x0627,0x06D2,0x062C,0x06A9,0x0644,0x0645,0x0646,0x06C1,
0x067E,0x0642,0x0631,0x0634,0x062A,0x062D,0x0648,0x0686,
0x0635,0x06CC,0x06BA,0xE002,0x0674,0x0638,0xFDF2
];

// on Alt+Shift, switch language
function FKeyDown()
{
   if (window.event.shiftKey && window.event.altKey) { 
      if (lang == 1) {
         lang = 0;
         window.defaultStatus = "Urdu Mode";
      }
      else {
         lang = 1;
         window.defaultStatus = "English Mode";
      }
      return false;
   }
   return true;
}

// change the Urdu
function FKeyPress()
{
   var key = window.event.keyCode;
   // Avoid processing if control or higher than ASCII (i.e., in Arabic Windows)
   if (key < 0x0020 || key >= 0x00FF)
      return;
   if (lang == 1) { //If Urdu
      if (key == 0x0020 && window.event.shiftKey) // Shift-space -> ZWNJ
         window.event.keyCode = 0x200C;
      else
         window.event.keyCode = urdukey_urdu98[key - 0x0020];
   }
   return true;
}


function LangUrd (myobj)
{
       myobj.EditorDocument.dir = "rtl";	  
       myobj.Focus();
       lang = 1;
}

function LangEng (myobj)
{
       myobj.EditorDocument.dir = "ltr";	  
       myobj.Focus();
       lang = 0;
}