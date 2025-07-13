var lang = 0;	// 1: Urdu, 0: English 
var tName;
var myTemp;
// Urdu keyboard map based on Phonetic Keyboard Layout
// Copyright: Pakistan Data Management Seervices (www.pakdata.com)

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
      if (lang == 0) {
         lang = 1;
         window.defaultStatus = "Urdu Mode";
      }
      else {
         lang = 0;
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


function LangFar (myobj)
{
       myobj.EditorWindow.dir = "rtl";	  
       myobj.Focus();
       lang = 1;
}


function LangEng (myobj)
{       
       myobj.EditorWindow.dir = "ltr";	  
       myobj.Focus();
       lang = 0;
}

function setName(temp) {
	tName=temp;
}

function hurf(alpha)
{
if (alpha=="alifmada")
	{
		tName.InsertHtml('آ');		
		//tName.value = tName.value + 'آ';
		
	}
if (alpha=="alif")
	{
		tName.InsertHtml('ا');
		//tName.value=tName.value + "ا";
	}
if (alpha=="bay")
	{
		tName.InsertHtml('ب');
		//tName.value=tName.value + "ب";
	}
if (alpha=="pay")
	{
		tName.InsertHtml('پ');
		//tName.value=tName.value + "پ";
	}
if (alpha=="tay")
	{
		tName.InsertHtml('ت');
		//tName.value=tName.value + "ت";
	}
if (alpha=="thay")
	{
		tName.InsertHtml('ٹ');
		//tName.value=tName.value + "ٹ";
	}
if (alpha=="say")
	{
		tName.InsertHtml('ث');
		//tName.value=tName.value + "ث";
	}
if (alpha=="jim")
	{
		tName.InsertHtml('ج');
		//tName.value=tName.value + "ج";
	}
if (alpha=="hay1")
	{
		tName.InsertHtml('ح');
		//tName.value=tName.value + "ح";
	}	
if (alpha=="khay")
	{
		tName.InsertHtml('خ');
		//tName.value=tName.value + "خ";
	}	
if (alpha=="chay")
	{
		tName.InsertHtml('چ');
		//tName.value=tName.value + "چ";
	}
if (alpha=="dal")
	{
		tName.InsertHtml('د');
		//tName.value=tName.value + "د";
	}
if (alpha=="dhal")
	{
		tName.InsertHtml('ڈ');
		//tName.value=tName.value + "ڈ";
	}
	
if (alpha=="zal")
	{
		tName.InsertHtml('ذ');
		//tName.value=tName.value + "ذ";
	}
if (alpha=="ray")
	{
		tName.InsertHtml('ر');
		//tName.value=tName.value + "ر";
	}
if (alpha=="zay")
	{
		tName.InsertHtml('ز');
		//tName.value=tName.value + "ز";
	}
if (alpha=="kaf")
	{
		tName.InsertHtml('ک');
		//tName.value=tName.value + "ک";
	}
if (alpha=="gaf")
	{
		tName.InsertHtml('گ');
		//tName.value=tName.value + "گ";
	}
if (alpha=="qaf")
	{
		tName.InsertHtml('ق');
		//tName.value=tName.value + "ق";
	}
if (alpha=="fay")
	{
		tName.InsertHtml('ف');
		//tName.value=tName.value + "ف";
	}
if (alpha=="gain")
	{
		tName.InsertHtml('غ');
		//tName.value=tName.value + "غ";
	}
if (alpha=="ain")
	{
		tName.InsertHtml('ع');
		//tName.value=tName.value + "ع";
	}
if (alpha=="zhoy")
	{
		tName.InsertHtml('ظ');
		//tName.value=tName.value + "ظ";
	}
if (alpha=="thoy")
	{
		tName.InsertHtml('ط');
		//tName.value=tName.value + "ط";
	}
if (alpha=="duad")
	{
		tName.InsertHtml('ض');
		//tName.value=tName.value + "ض";
	}
if (alpha=="suad")
	{
		tName.InsertHtml('ص');
		//tName.value=tName.value + "ص";
	}
if (alpha=="sheen")
	{
		tName.InsertHtml('ش');
		//tName.value=tName.value + "ش";
	}
if (alpha=="seen")
	{
		tName.InsertHtml('س');
		//tName.value=tName.value + "س";
	}
if (alpha=="zhay")
	{
		tName.InsertHtml('ژ');
		//tName.value=tName.value + "ژ";
	}
if (alpha=="rahy")
	{
		tName.InsertHtml('ڑ');
		//tName.value=//tName.value + "ڑ";
	}
if (alpha=="salam")
	{
		tName.InsertHtml('');
		//tName.value=//tName.value + "";
	}
if (alpha=="bariya")
	{
		tName.InsertHtml('ے');
		//tName.value=tName.value + "ے";
	}
if (alpha=="yamada")
	{
		tName.InsertHtml('ئ');
		//tName.value=//tName.value + "ئ";
	}
if (alpha=="ya")
	{
		tName.InsertHtml('ی');
		//tName.value=//tName.value + "ی";
	}
if (alpha=="dochachmihay")
	{
		tName.InsertHtml('ھ');
		//tName.value=//tName.value + "ھ";
	}
if (alpha=="hay")
	{
		tName.InsertHtml('ہ');
		//tName.value=//tName.value + "ہ";
	}
if (alpha=="hamza")
	{
		tName.InsertHtml('ء');
		//tName.value=//tName.value + "ء";
	}
if (alpha=="wowmada")
	{
		tName.InsertHtml('ؤ');
		//tName.value=//tName.value + "ؤ";
	}
if (alpha=="wow")
	{
		tName.InsertHtml('و');
		//tName.value=//tName.value + "و";
	}
if (alpha=="gunah")
	{
		tName.InsertHtml('ں');
		//tName.value=//tName.value + "ں";
	}
if (alpha=="noon")
	{
		tName.InsertHtml('ن');
		//tName.value=//tName.value + "ن";
	}
if (alpha=="mim")
	{
		tName.InsertHtml('م');
		//tName.value=//tName.value + "م";
	}
if (alpha=="lam")
	{
		tName.InsertHtml('ل');
		//tName.value=//tName.value + "ل";
	}
}