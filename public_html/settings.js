
function storevalue(valuename,value) {
      var storeval = localStorage.setItem(valuename, value);
  }
  function getvalue(valuename) {
      var value = localStorage.getItem(valuename);
      return value
  } 
function validateFormrgb(form,name1,name2,name3) {
    var r = document.forms[form][name1].value;
    var g = document.forms[form][name2].value;
    var b = document.forms[form][name3].value;
    if (r == null || r == "" || g == null || g == "" || b == null || b == "") {
        //alert("R,G,B must be filled out");
        return false;
    }
    storevalue(name1,r);
    storevalue(name2,g);
    storevalue(name3,b);
}
function validateFormlatlon(form,name1,name2) {
    var lat = document.forms[form][name1].value;
    var lon = document.forms[form][name2].value;
    if (lat == null || lat == "" || lon == null || lon == "") {
        //alert("Lat and Lon must be filled out");
        return false;
    }
    storevalue(name1,lat);
    storevalue(name2,lon);
}
 $('input').ColorPicker(options);

function getTextElementByColor(color) {
                var element = $("<div style='text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;'>#" + getvalue('color1') + "</div>");
                var nThreshold = 105;
                var bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
                var foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
                element.css('color', foreColor);
                element.css('background', "#" + getvalue('color1'));
		storevalue('1r',color.r);
		storevalue('1g',color.g);
		storevalue('1b',color.b);
		storevalue('color1',color.hex);
                return element;
            }
            $(document).ready(function () {
                $("#colorPicker").on('colorchange', function (event) {
                    $("#dropDownButton").jqxDropDownButton('setContent', getTextElementByColor(event.args.color));
                });
                $("#colorPicker").jqxColorPicker({ color: getvalue('color1'), colorMode: 'hue', width: 220, height: 220});
                $("#dropDownButton").jqxDropDownButton({ width: 150, height: 22});
                $("#dropDownButton").jqxDropDownButton('setContent', getTextElementByColor(new $.jqx.color({ hex: getvalue('color1') })));
            });
	    
function getTextElementByColor2(color) {
                var element = $("<div style='text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;'>#" + getvalue('color2') + "</div>");
                var nThreshold = 105;
                var bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
                var foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
                element.css('color', foreColor);
                element.css('background', "#" + getvalue('color2'));
		storevalue('2r',color.r);
		storevalue('2g',color.g);
		storevalue('2b',color.b);
		storevalue('color2',color.hex);
                return element;
            }
            $(document).ready(function () {
                $("#colorPicker2").on('colorchange', function (event) {
                    $("#dropDownButton2").jqxDropDownButton('setContent', getTextElementByColor2(event.args.color));
                });
                $("#colorPicker2").jqxColorPicker({ color: getvalue('color2'), colorMode: 'hue', width: 220, height: 220});
                $("#dropDownButton2").jqxDropDownButton({ width: 150, height: 22});
                $("#dropDownButton2").jqxDropDownButton('setContent', getTextElementByColor2(new $.jqx.color({ hex: getvalue('color2') })));
            });
	    

function getTextElementByColor5(color) {
                var element = $("<div style='text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;'>#" + getvalue('color5') + "</div>");
                var nThreshold = 105;
                var bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
                var foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
                element.css('color', foreColor);
                element.css('background', "#" + getvalue('color5'));
		storevalue('3r',color.r);
		storevalue('3g',color.g);
		storevalue('3b',color.b);
		storevalue('color5',color.hex);
                return element;
            }
            $(document).ready(function () {
                $("#colorPicker3").on('colorchange', function (event) {
                    $("#dropDownButton3").jqxDropDownButton('setContent', getTextElementByColor5(event.args.color));
                });
                $("#colorPicker3").jqxColorPicker({ color: getvalue('color1'), colorMode: 'hue', width: 220, height: 220});
                $("#dropDownButton3").jqxDropDownButton({ width: 150, height: 22});
                $("#dropDownButton3").jqxDropDownButton('setContent', getTextElementByColor5(new $.jqx.color({ hex: getvalue('color5') })));
            });
