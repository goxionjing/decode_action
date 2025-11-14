//Fri Nov 14 2025 14:16:47 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let data = null,
  currentMapID = null,
  zoomFactor = 1.315,
  offsetX = -60.3,
  offsetY = -148.5,
  angleOffset = -180,
  direction = 0;
const correctionValues = [[-1, 0, 0, -1], [-1, 0, 0, 1], [1, 0, 0, -1], [1, 0, 0, 1], [0, -1, -1, 0], [0, -1, 1, 0], [0, 1, -1, 0], [0, 1, 1, 0]];
let a = correctionValues[0][0],
  b = correctionValues[0][1],
  c = correctionValues[0][2],
  d = correctionValues[0][3];
function updateOptions() {
  if (data) {
    const _0x1e2a37 = document.getElementById("playerSelector"),
      _0x4c22c8 = _0x1e2a37.value;
    var _0x71bd26;
    _0x1e2a37.innerHTML = "";
    data.data.forEach(_0x22663e => {
      {
        var _0x38708c = document.createElement("option");
        "0" !== _0x22663e.mingzi && 0 !== _0x22663e.Xueliang && (_0x38708c.text = _0x22663e.mingzi, _0x1e2a37.add(_0x38708c));
      }
    });
    Array.from(_0x1e2a37.options).some(_0x4b239a => _0x4b239a.text === _0x4c22c8) || ((_0x71bd26 = document.createElement("option")).text = _0x4c22c8, _0x1e2a37.add(_0x71bd26));
    _0x1e2a37.value = _0x4c22c8;
  }
}
function moveDiv(_0x2739e3, _0x2b6759, _0x1557fc) {
  var _0x2b965b = document.getElementById("canvas-container");
  _0x2b965b.style.left = 256 - _0x2739e3 + "px";
  _0x2b965b.style.top = 256 - _0x2b6759 + "px";
  _0x2b965b.style.transformOrigin = _0x2739e3 + "px " + _0x2b6759 + "px";
  _0x2b965b.style.transform = "rotate(" + _0x1557fc + "deg)";
}
let reverseAngle = 0;
function drawCanvas() {
  if (data) {
    {
      const _0x4ae958 = document.getElementById("drawLines").checked,
        _0x50d1af = document.getElementById("drawNames").checked,
        _0x3d470f = document.getElementById("drawHPs").checked,
        _0x209ccc = document.getElementById("drawFriends").checked,
        _0x198724 = document.getElementById("drawFollow").checked,
        _0x36000c = document.getElementById("playerSize").value,
        _0x18c49c = document.getElementById("playerSelector").selectedOptions[0].textContent,
        _0x180517 = document.getElementById("drawQQs").checked;
      var _0x5e347e = document.getElementById("canvas");
      const _0x5d761f = _0x5e347e.getContext("2d");
      _0x5e347e.width = 2 * _0x5e347e.clientWidth;
      _0x5e347e.height = 2 * _0x5e347e.clientHeight;
      _0x5d761f.scale(2, 2);
      _0x5d761f.imageSmoothingEnabled = true;
      _0x5d761f.clearRect(0, 0, _0x5e347e.clientWidth, _0x5e347e.clientHeight);
      data.data.forEach(_0x611870 => {
        var _0x29497f,
          _0x5b38db = _0x611870.camp,
          _0x11b18e = _0x611870.Xueliang,
          _0x4e1611 = _0x611870.xaxis,
          _0x32ba24 = _0x611870.yaxis,
          _0x5546fa = _0x611870.Angle + angleOffset,
          _0x19eb2f = _0x611870.mingzi,
          _0x33d181 = _0x611870.qq,
          _0x1fb69e = _0x4e1611;
        if ("0" !== _0x19eb2f && 0 !== _0x611870.Xueliang) {
          var _0x4e1611 = a * _0x32ba24 + b * _0x4e1611,
            _0x32ba24 = c * _0x32ba24 + d * _0x1fb69e,
            _0x411790 = 512 * (20000 + _0x4e1611) / 40000 * zoomFactor + offsetX,
            _0x48acb1 = 512 * (20000 + _0x32ba24) / 40000 * zoomFactor + offsetY;
          if ("请选择队友" === _0x18c49c ? 6 === _0x5b38db && (_0x5b38db = 2) : (6 === _0x5b38db && (_0x5b38db = 0), _0x19eb2f === _0x18c49c && (_0x5b38db = 2)), 0 !== _0x5b38db || false !== _0x209ccc) {
            switch (_0x5b38db) {
              case 0:
                _0x29497f = document.getElementById("type0").value;
                break;
              case 1:
                _0x29497f = document.getElementById("type1").value;
                break;
              case 2:
                _0x29497f = document.getElementById("type2").value;
                _0x198724 && moveDiv(_0x411790, _0x48acb1, 270 - _0x5546fa);
                reverseAngle = _0x5546fa + 90;
                break;
              case 3:
                _0x29497f = document.getElementById("type3").value;
                break;
              default:
                _0x29497f = "black";
            }
            if (_0x198724 || (moveDiv(256, 256, 0), reverseAngle = 0), _0x5d761f.beginPath(), _0x5d761f.fillStyle = _0x29497f, _0x5d761f.arc(_0x411790, _0x48acb1, _0x36000c - 0.6, 0, 2 * Math.PI), _0x5d761f.fill(), _0x5d761f.strokeStyle = "white", _0x5d761f.lineWidth = 0.6, _0x5d761f.beginPath(), _0x5d761f.arc(_0x411790, _0x48acb1, _0x36000c, 0, 2 * Math.PI), _0x5d761f.stroke(), _0x4ae958) {
              _0x5d761f.beginPath();
              let _0x593fd6, _0x350236, _0x4fae88;
              switch (_0x5b38db) {
                case 2:
                  _0x593fd6 = (_0x5546fa - 8) * Math.PI / 180;
                  _0x350236 = (_0x5546fa + 8) * Math.PI / 180;
                  _0x4fae88 = 30;
                  break;
                case 0:
                  _0x593fd6 = (_0x5546fa - 16.5) * Math.PI / 180;
                  _0x350236 = (_0x5546fa + 16.5) * Math.PI / 180;
                  _0x4fae88 = 13;
                  break;
                default:
                  _0x593fd6 = (_0x5546fa - 16.5) * Math.PI / 180;
                  _0x350236 = (_0x5546fa + 16.5) * Math.PI / 180;
                  _0x4fae88 = 26;
              }
              _0x5d761f.moveTo(_0x411790, _0x48acb1);
              _0x5d761f.arc(_0x411790, _0x48acb1, _0x4fae88, _0x593fd6, _0x350236, false);
              let _0x3430b0 = _0x5d761f.createRadialGradient(_0x411790, _0x48acb1, 0, _0x411790, _0x48acb1, _0x4fae88);
              _0x3430b0.addColorStop(0, "rgba(255, 255, 255, 1)");
              _0x3430b0.addColorStop(1, "rgba(255, 255, 255, 0.3)");
              _0x5d761f.fillStyle = _0x3430b0;
              _0x5d761f.globalAlpha = 0.9;
              _0x5d761f.fill();
              _0x5d761f.globalAlpha = 1;
            }
            (_0x50d1af || _0x3d470f || _0x180517) && (_0x5d761f.save(), _0x5d761f.translate(_0x411790, _0x48acb1), _0x5d761f.rotate(reverseAngle * Math.PI / 180), _0x5d761f.translate(-_0x411790, -_0x48acb1), _0x180517 && _0x33d181 && (_0x5d761f.font = "8px Arial, 黑体", _0x5d761f.strokeStyle = "white", _0x5d761f.lineWidth = 1, _0x5d761f.strokeText(_0x33d181, _0x411790 - 11, _0x48acb1 - 15), _0x5d761f.fillStyle = "#FF69B4", _0x5d761f.fillText(_0x33d181, _0x411790 - 11, _0x48acb1 - 15)), _0x50d1af && (_0x5d761f.font = "8px Arial, 黑体", _0x5d761f.strokeStyle = "white", _0x5d761f.lineWidth = 1, _0x5d761f.strokeText(_0x19eb2f, _0x411790 - 11, _0x48acb1 + (_0x180517 && _0x33d181 ? 1 : 11)), _0x5d761f.fillStyle = "#007BA7", _0x5d761f.fillText(_0x19eb2f, _0x411790 - 11, _0x48acb1 + (_0x180517 && _0x33d181 ? 1 : 11))), _0x3d470f && (_0x5d761f.fillStyle = "LightCyan", _0x5d761f.font = "10px Arial, 宋体", _0x5d761f.fillText(_0x11b18e, _0x411790 - 6, _0x48acb1 - 5)), _0x5d761f.restore());
          }
        }
      });
    }
  }
}
function analysis(_0x3ed960) {
  try {
    {
      var _0x1b6221 = JSON.parse(_0x3ed960),
        _0xf1926a = parseInt(_0x1b6221.map, 10);
      if (_0xf1926a !== currentMapID) {
        let _0x20685c = "";
        switch (currentMapID = _0xf1926a) {
          case 0:
            _0x20685c = "港口-竞技荣耀-保卫者专用.png";
            zoomFactor = 1.518;
            offsetX = -130.4;
            offsetY = -237.5;
            direction = 5;
            angleOffset = 90;
            break;
          case 1:
            _0x20685c = "港口-竞技荣耀-潜伏者专用.png";
            zoomFactor = 1.518;
            offsetX = -153.8;
            offsetY = -73.4;
            direction = 6;
            angleOffset = -90;
            break;
          case 2:
            _0x20685c = "港口-世界冠军AG-保卫者专用.png";
            zoomFactor = 1.379;
            offsetX = -122.1;
            offsetY = -59.7;
            direction = 5;
            angleOffset = 90;
            break;
          case 3:
            _0x20685c = "港口-世界冠军AG-潜伏者专用.png";
            zoomFactor = 1.342;
            offsetX = -115.1;
            offsetY = -123.7;
            direction = 6;
            angleOffset = -90;
            break;
          case 4:
            _0x20685c = "供电所-保卫者专用.png";
            zoomFactor = 1.2;
            offsetX = -76.8;
            offsetY = -23.8;
            direction = 3;
            angleOffset = 0;
            break;
          case 5:
            _0x20685c = "供电所-潜伏者专用.png";
            zoomFactor = 1.2;
            offsetX = -61.8;
            offsetY = -92.1;
            direction = 0;
            angleOffset = 180;
            break;
          case 6:
            _0x20685c = "黑色城镇-保卫者专用.png";
            zoomFactor = 1.315;
            offsetX = -73.8;
            offsetY = -100.8;
            direction = 0;
            angleOffset = -180;
            break;
          case 7:
            _0x20685c = "黑色城镇-潜伏者专用.png";
            zoomFactor = 1.315;
            offsetX = -105.1;
            offsetY = -75.4;
            direction = 3;
            angleOffset = 0;
            break;
          case 8:
            _0x20685c = "潜艇-保卫者专用.png";
            zoomFactor = 1.635;
            offsetX = -85.1;
            offsetY = -210.3;
            direction = 3;
            angleOffset = 0;
            break;
          case 9:
            _0x20685c = "潜艇-潜伏者专用.png";
            zoomFactor = 1.635;
            offsetX = -263;
            offsetY = -123.5;
            direction = 0;
            angleOffset = 180;
            break;
          case 10:
            _0x20685c = "卫星基地-竞技荣耀-保卫者专用.png";
            zoomFactor = 1.355;
            offsetX = -93.5;
            offsetY = -87.9;
            direction = 5;
            angleOffset = 90;
            break;
          case 11:
            _0x20685c = "卫星基地-竞技荣耀-潜伏者专用.png";
            zoomFactor = 1.355;
            offsetX = -108;
            offsetY = -71.3;
            direction = 6;
            angleOffset = -90;
            break;
          case 12:
            _0x20685c = "新黑色城镇-保卫者专用.png";
            zoomFactor = 1.315;
            offsetX = -60.3;
            offsetY = -148.5;
            direction = 0;
            angleOffset = -180;
            break;
          case 13:
            _0x20685c = "新黑色城镇-潜伏者专用.png";
            zoomFactor = 1.315;
            offsetX = -87;
            offsetY = -62.9;
            direction = 3;
            angleOffset = 0;
            break;
          case 14:
            _0x20685c = "新年广场-保卫者专用.png";
            zoomFactor = 1.749;
            offsetX = -189.2;
            offsetY = -189.7;
            direction = 5;
            angleOffset = 90;
            break;
          case 15:
            _0x20685c = "新年广场-潜伏者专用.png";
            zoomFactor = 1.749;
            offsetX = -174.1;
            offsetY = -216.2;
            direction = 3;
            angleOffset = 0;
            break;
          case 16:
            _0x20685c = "新潜艇-保卫者专用.png";
            zoomFactor = 1.625;
            offsetX = -167.9;
            offsetY = -162.3;
            direction = 3;
            angleOffset = 0;
            break;
          case 17:
            _0x20685c = "新潜艇-潜伏者专用.png";
            zoomFactor = 1.625;
            offsetX = -187.3;
            offsetY = -176.2;
            direction = 0;
            angleOffset = 180;
            break;
          case 18:
            _0x20685c = "新沙漠-灰-保卫者专用.png";
            zoomFactor = 1.285;
            offsetX = -98.4;
            offsetY = -128.7;
            direction = 0;
            angleOffset = 180;
            break;
          case 19:
            _0x20685c = "新沙漠-灰-潜伏者专用.png";
            zoomFactor = 1.285;
            offsetX = -54.9;
            offsetY = -72.4;
            direction = 3;
            angleOffset = 0;
            break;
          case 20:
            _0x20685c = "新沙丘-保卫者专用.png";
            zoomFactor = 1.668;
            offsetX = -191.1;
            offsetY = -203;
            direction = 5;
            angleOffset = 90;
            break;
          case 21:
            _0x20685c = "新沙丘-潜伏者专用.png";
            zoomFactor = 1.668;
            offsetX = -211.1;
            offsetY = -101.8;
            direction = 6;
            angleOffset = -90;
            break;
          case 22:
            _0x20685c = "新卫星基地-保卫者专用.png";
            zoomFactor = 1.288;
            offsetX = -66.2;
            offsetY = -83.8;
            direction = 5;
            angleOffset = 90;
            break;
          case 23:
            _0x20685c = "新卫星基地-潜伏者专用.png";
            zoomFactor = 1.288;
            offsetX = -104.1;
            offsetY = -68.6;
            direction = 6;
            angleOffset = -90;
            break;
          case 24:
            _0x20685c = "新鹰眼-CFPL十周年纪念版-保卫者专用.png";
            zoomFactor = 1.62;
            offsetX = -195.4;
            offsetY = -198.2;
            direction = 5;
            angleOffset = 90;
            break;
          case 25:
            _0x20685c = "新鹰眼-CFPL十周年纪念版-潜伏者专用.png";
            zoomFactor = 1.62;
            offsetX = -143.4;
            offsetY = -179.5;
            direction = 6;
            angleOffset = -90;
            break;
          case 26:
            _0x20685c = "异域小城-世界冠军Q9-保卫者专用.png";
            zoomFactor = 1.315;
            offsetX = -83.1;
            offsetY = -127.4;
            direction = 5;
            angleOffset = 90;
            break;
          case 27:
            _0x20685c = "异域小城-世界冠军Q9-潜伏者专用.png";
            zoomFactor = 1.315;
            offsetX = -99.7;
            offsetY = -90;
            direction = 6;
            angleOffset = -90;
            break;
          case 28:
            _0x20685c = "鹰眼-保卫者专用.png";
            zoomFactor = 1.54;
            offsetX = -147.6;
            offsetY = -119.2;
            direction = 5;
            angleOffset = 90;
            break;
          case 29:
            _0x20685c = "鹰眼-潜伏者专用.png";
            zoomFactor = 1.54;
            offsetX = -153.8;
            offsetY = -179.5;
            direction = 6;
            angleOffset = -90;
            break;
          case 30:
            _0x20685c = "新运输船-保卫者专用.png";
            zoomFactor = 3.093;
            offsetX = -536.8;
            offsetY = -458.4;
            direction = 3;
            angleOffset = 0;
            break;
          case 31:
            _0x20685c = "新运输船-潜伏者专用.png";
            zoomFactor = 3.142;
            offsetX = -551.3;
            offsetY = -645.7;
            direction = 0;
            angleOffset = -180;
            break;
          case 32:
            _0x20685c = "新姑苏-保卫者专用.png";
            zoomFactor = 1.648;
            offsetX = -191.3;
            offsetY = -194.1;
            direction = 5;
            angleOffset = 90;
            break;
          case 33:
            _0x20685c = "新姑苏-潜伏者专用.png";
            zoomFactor = 1.648;
            offsetX = -168.4;
            offsetY = -165.1;
            direction = 6;
            angleOffset = -90;
            break;
          case 34:
            _0x20685c = "供电所-竞技荣耀-保卫者专用.png";
            zoomFactor = 1.588;
            offsetX = -143;
            offsetY = -102.5;
            direction = 3;
            angleOffset = 0;
            break;
          case 35:
            _0x20685c = "供电所-竞技荣耀-潜伏者专用.png";
            zoomFactor = 1.588;
            offsetX = -168.4;
            offsetY = -189;
            direction = 0;
            angleOffset = -180;
            break;
          case 36:
            _0x20685c = "新沙漠-灰-保卫者专用.png";
            zoomFactor = 1.285;
            offsetX = -78.9;
            offsetY = -137.9;
            direction = 0;
            angleOffset = 180;
            break;
          case 37:
            _0x20685c = "新沙漠-灰-潜伏者专用.png";
            zoomFactor = 1.285;
            offsetX = -70.6;
            offsetY = -65;
            direction = 3;
            angleOffset = 0;
            break;
          case 38:
            _0x20685c = "巷战-保卫者专用.png";
            zoomFactor = 2.525;
            offsetX = -406.8;
            offsetY = -405.4;
            direction = 6;
            angleOffset = -90;
            break;
          case 39:
            _0x20685c = "巷战-潜伏者专用.png";
            zoomFactor = 2.525;
            offsetX = -397.3;
            offsetY = -401.1;
            direction = 5;
            angleOffset = 90;
            break;
          case 40:
            _0x20685c = "新沙漠TD-保卫者专用.png";
            zoomFactor = 2.525;
            offsetX = -406.8;
            offsetY = -405.4;
            direction = 6;
            offsetY = -90;
            break;
          case 41:
            _0x20685c = "新沙漠TD-潜伏者专用.png";
            zoomFactor = 2.525;
            offsetX = -397.3;
            offsetY = -401.1;
            direction = 5;
            angleOffset = 90;
            break;
          case 42:
            _0x20685c = "新金字塔-保卫者专用.png";
            zoomFactor = 2.525;
            offsetX = -406.8;
            offsetY = -405.4;
            direction = 6;
            angleOffset = -90;
            break;
          case 43:
            _0x20685c = "新金字塔-潜伏者专用.png";
            zoomFactor = 2.525;
            offsetX = -397.3;
            offsetY = -401.1;
            direction = 5;
            angleOffset = 90;
            break;
          case 44:
            _0x20685c = "异域小城-竞技荣耀-保卫者专用.png";
            zoomFactor = 1.336;
            offsetX = -80.2;
            offsetY = -80.4;
            direction = 5;
            angleOffset = 90;
            break;
          case 45:
            _0x20685c = "异域小城-竞技荣耀-潜伏者专用.png";
            zoomFactor = 1.336;
            offsetX = -90.1;
            offsetY = -98.8;
            direction = 6;
            angleOffset = -90;
            break;
          case 46:
            _0x20685c = "锦官城-保卫者专用.png";
            zoomFactor = 2.08;
            offsetX = -260.6;
            offsetY = -284.2;
            direction = 5;
            angleOffset = 90;
            break;
          case 47:
            _0x20685c = "锦官城-潜伏者专用.png";
            zoomFactor = 2.08;
            offsetX = -308.5;
            offsetY = -284.2;
            direction = 6;
            angleOffset = -90;
            break;
          case 100:
            _0x20685c = "守望之城.png";
            zoomFactor = 2.03;
            offsetX = -255.9;
            offsetY = -243.8;
            direction = 6;
            angleOffset = -90;
            break;
          case 200:
            _0x20685c = "屋顶机场.png";
            zoomFactor = 1.78;
            offsetX = -227;
            offsetY = -204.8;
            direction = 5;
            angleOffset = 90;
            break;
          case 300:
            _0x20685c = "地下研究所.png";
            zoomFactor = 2.19;
            offsetX = -308.4;
            offsetY = -318.4;
            direction = 0;
            angleOffset = 180;
            break;
          case 400:
            _0x20685c = "胜利广场.png";
            zoomFactor = 1.749;
            offsetX = -193;
            offsetY = -189.7;
            direction = 5;
            angleOffset = 90;
            break;
          case 500:
            _0x20685c = "失落的遗迹.png";
            zoomFactor = 1.78;
            offsetX = -208.4;
            offsetY = -183.7;
            direction = 0;
            angleOffset = 180;
            break;
          case 600:
            _0x20685c = "狼穴.png";
            zoomFactor = 1.86;
            offsetX = -237.1;
            offsetY = -310.6;
            direction = 6;
            angleOffset = -90;
            break;
          default:
            _0x20685c = "黑.png";
        }
        [a, b, c, d] = correctionValues[direction];
        document.getElementById("canvas-container").style.backgroundImage = "url(maps/" + _0x20685c + ")";
      }
      data = _0x1b6221;
      return true;
    }
  } catch (_0x5daf4a) {}
}
function test() {
  analysis("{\"map\": 2,\"info\":[[0,100,237.2,200.3,270.0,\"佳鹏哥哥\",\"123456\"],[0,100,250.1,305.9,271.0,\"队友A\",\"234567\"],[0,100,220.1,365.9,269.0,\"队友B\",\"345678\"],[1,100,234.4,79.1,434.9,\"敌人\",\"456789\"],[1,100,234.4,90.1,435.9,\"敌人\",\"567890\"],[1,100,234.4,110.1,433.9,\"敌人\",\"678901\"]]}");
  updateOptions();
  document.getElementById("playerSelector").value = "佳鹏哥哥";
  drawCanvas();
}
function verification() {
  var _0x5a05e2 = new Date().getTime();
  return !(2553506483 < Math.floor(_0x5a05e2 / 1000));
}
function display() {
  var _0x546f9e = document.getElementById("toggleButton"),
    _0x2abd12 = document.getElementById("menuContent"),
    _0x5c402b = document.getElementById("input-container"),
    _0x452c79 = document.getElementById("tips");
  "none" === _0x2abd12.style.display ? (_0x2abd12.style.display = "block", _0x5c402b.style.height = "auto", _0x5c402b.style.width = "250px", _0x452c79.style.display = "block", _0x546f9e.innerHTML = ">>>>菜单<<<<", _0x5c402b.style.background = "#2b2b2b") : (_0x2abd12.style.display = "none", _0x5c402b.style.height = _0x546f9e.style.height, _0x5c402b.style.width = "auto", _0x5c402b.style.background = "rgba(255,255,255,0)", _0x452c79.style.display = "none", _0x546f9e.innerHTML = "<>");
}
const url = new URL(window.location),
  params = new URLSearchParams(url.search),
  key = params.get("key");
console.log("Key:", key);
var hostname = url.hostname;
function createWebSocket(_0x522ee6) {
  var _0x34233c = new WebSocket("ws://" + _0x522ee6 + ":" + port);
  _0x34233c.onopen = () => {
    console.log("已连接到 WebSocket 服务器");
    _0x34233c.send(key);
  };
  _0x34233c.onmessage = _0x277d17 => {
    verification() && (console.log("收到消息:", _0x277d17.data), analysis(_0x277d17.data)) && drawCanvas();
  };
  _0x34233c.onclose = () => {
    _0x34233c.close();
    _0x34233c = null;
    console.log("WebSocket 连接已关闭");
    setTimeout(() => createWebSocket(_0x522ee6), 1000);
  };
  _0x34233c.onerror = _0x31d193 => {
    _0x34233c.close();
    _0x34233c = null;
    console.log("WebSocket 错误:", _0x31d193);
    setTimeout(() => createWebSocket(_0x522ee6), 1000);
  };
  return _0x34233c;
}
port = 9503;
console.log("Hostname:", hostname);
key && createWebSocket(hostname);
!function () {
  'use strict';

  (function (_0x4bb468, _0x338ed3) {
    const _0x337c6d = _0x4bb468();
    function _0x4bf368(_0x5223be, _0x3d8305) {
      return _0x39e9(_0x5223be - 77, _0x3d8305);
    }
    while (true) {
      try {
        const _0x2a2302 = parseInt(_0x4bf368(901, "q(oB")) / 1 * (parseInt(_0x4bf368(2780, "rEA3")) / 2) + parseInt(_0x4bf368(882, "#f!g")) / 3 * (parseInt(_0x4bf368(1275, "X#K!")) / 4) + parseInt(_0x4bf368(2454, "Z@bN")) / 5 * (parseInt(_0x4bf368(3272, "&t&m")) / 6) + -parseInt(_0x4bf368(921, "2PQv")) / 7 + parseInt(_0x4bf368(615, "Z@bN")) / 8 * (-parseInt(_0x4bf368(2589, "h0ri")) / 9) + parseInt(_0x4bf368(1787, "z$^9")) / 10 * (parseInt(_0x4bf368(2185, "#f!g")) / 11) + parseInt(_0x4bf368(1145, "A$(g")) / 12 * (parseInt(_0x4bf368(1557, "ZyH)")) / 13);
        if (_0x2a2302 === _0x338ed3) break;else _0x337c6d.push(_0x337c6d.shift());
      } catch (_0x1d7fa9) {
        _0x337c6d.push(_0x337c6d.shift());
      }
    }
  })(_0x1ec9, 501753);
  const K = b;
  function b(_0x2a6a5a, _0x3617bb) {
    function _0x186cc0(_0x4e9529, _0x449f2a) {
      return _0x39e9(_0x4e9529 - -865, _0x449f2a);
    }
    const _0x2e7a7f = {
        "sfPfw": "charAt",
        "dUWOX": "fromCh" + _0x186cc0(1207, "z$^9"),
        "xbxaf": function (_0x10efb1, _0x454f79) {
          return _0x10efb1 & _0x454f79;
        },
        "cthzk": function (_0x30f57b, _0x238475) {
          return _0x30f57b >> _0x238475;
        },
        "KzyVa": function (_0x2515f8, _0x1613e6) {
          return _0x2515f8 & _0x1613e6;
        },
        "CLRqe": function (_0x6b7236, _0x361e6b) {
          return _0x6b7236 * _0x361e6b;
        },
        "JRiiD": _0x186cc0(7, "$]wl"),
        "IZMkz": function (_0x5c5fcb, _0x3cc99b) {
          return _0x5c5fcb < _0x3cc99b;
        },
        "RdbsD": function (_0x41c5ad, _0x51a756) {
          return _0x41c5ad + _0x51a756;
        },
        "STxRr": _0x186cc0(121, "&t&m") + "ng",
        "vVZfi": function (_0x3b4507, _0x2645d8) {
          return _0x3b4507(_0x2645d8);
        },
        "Rbywv": function (_0x64c148, _0x210222) {
          return _0x64c148 - _0x210222;
        },
        "mXsUz": function (_0x572a42, _0x719a9a) {
          return _0x572a42 === _0x719a9a;
        },
        "xzXFZ": "lKtRtq",
        "PxZYj": function (_0x14cce0, _0x39bb79) {
          return _0x14cce0 + _0x39bb79;
        }
      },
      _0x185abe = a();
    b = function (_0x10e3ab, _0x1ea233) {
      _0x10e3ab = _0x2e7a7f[_0x58ced7(2588, "$]wl")](_0x10e3ab, 322);
      function _0x58ced7(_0xa2df01, _0x26d6fe) {
        return _0x186cc0(_0xa2df01 - 998, _0x26d6fe);
      }
      let _0x59958f = _0x185abe[_0x10e3ab];
      if (_0x2e7a7f[_0x58ced7(1303, "xb56")](b.lKtRtq, undefined)) {
        var _0xe65046 = function (_0x4542ef) {
          const _0x218577 = _0x3f9808("#f!g", 3726) + _0x3f9808("z$^9", 2497) + "mnopqr" + _0x3f9808("68zl", 3113) + _0x3f9808("yuIP", 1784) + "EFGHIJ" + _0x3f9808("yuIP", 2314) + _0x3f9808("FweH", 3148) + "WXYZ01" + "234567" + _0x3f9808("PvqJ", 1540);
          let _0x155607 = "",
            _0x462ab7 = "";
          for (let _0x39cffb = 0, _0x9e5b9b, _0x230de1, _0xb9999f = 0; _0x230de1 = _0x4542ef[_0x2e7a7f[_0x3f9808("3ipA", 2460)]](_0xb9999f++); ~_0x230de1 && (_0x9e5b9b = _0x39cffb % 4 ? _0x9e5b9b * 64 + _0x230de1 : _0x230de1, _0x39cffb++ % 4) ? _0x155607 += String[_0x2e7a7f.dUWOX](_0x2e7a7f[_0x3f9808("hM!U", 1720)](255, _0x2e7a7f[_0x3f9808("G![J", 3482)](_0x9e5b9b, _0x2e7a7f.KzyVa(_0x2e7a7f[_0x3f9808("A$(g", 1882)](-2, _0x39cffb), 6)))) : 0) {
            _0x230de1 = _0x218577[_0x3f9808("Bugr", 2687) + "f"](_0x230de1);
          }
          for (let _0x2a1367 = 0, _0x165b2b = _0x155607[_0x2e7a7f[_0x3f9808("d420", 3145)]]; _0x2e7a7f.IZMkz(_0x2a1367, _0x165b2b); _0x2a1367++) {
            _0x462ab7 += "%" + _0x2e7a7f.RdbsD("00", _0x155607[_0x3f9808("q(oB", 1505) + "deAt"](_0x2a1367)[_0x2e7a7f[_0x3f9808("qZz4", 3239)]](16))[_0x3f9808("X#K!", 3612)](-2);
          }
          function _0x3f9808(_0x39579e, _0x35d9fc) {
            return _0x58ced7(_0x35d9fc - 258, _0x39579e);
          }
          return _0x2e7a7f[_0x3f9808("g1XK", 3178)](decodeURIComponent, _0x462ab7);
        };
        b.rGLKds = _0xe65046;
        _0x2a6a5a = arguments;
        b[_0x2e7a7f[_0x58ced7(1661, "&t&m")]] = true;
      }
      const _0x4e335c = _0x185abe[0],
        _0xbc004c = _0x2e7a7f[_0x58ced7(1092, "aiqQ")](_0x10e3ab, _0x4e335c),
        _0x9ebe44 = _0x2a6a5a[_0xbc004c];
      !_0x9ebe44 ? (_0x59958f = b[_0x58ced7(1224, "AeJl")](_0x59958f), _0x2a6a5a[_0xbc004c] = _0x59958f) : _0x59958f = _0x9ebe44;
      return _0x59958f;
    };
    return b(_0x2a6a5a, _0x3617bb);
  }
  function a() {
    const _0x2997f4 = {
      "ryGZG": _0x43cb2c("0qEw", 2337) + "dMNidM" + _0x43cb2c("^s2q", 5) + "JMNkW6" + _0x43cb2c("KgIb", -510),
      "kpOTz": _0x43cb2c("68zl", -152) + _0x43cb2c("68zl", 2048) + _0x43cb2c("cV6N", 381) + "I/H+s9" + "JU+8Jo" + "AGH+IU" + "Sa",
      "PtgkV": _0x43cb2c("rEA3", 435) + _0x43cb2c("ZyH)", 485) + "jG",
      "qvozi": "yMLSzs" + _0x43cb2c("d420", 899) + "na",
      "oPEbD": _0x43cb2c("^R3S", 2272) + "LTCev4" + "Da",
      "mMNAG": _0x43cb2c("FweH", 1720) + _0x43cb2c("^R3S", 1061) + _0x43cb2c("&t&m", 1427) + _0x43cb2c("$]wl", 258),
      "hpiuW": _0x43cb2c("Bugr", 1384) + _0x43cb2c("h0ri", 1808) + "Ra",
      "xSczW": "DgfZA0nVBMzPzW",
      "gAnqk": "y3HAr1" + _0x43cb2c("#f!g", -140) + "AG",
      "aBtVQ": "6l2U5l" + _0x43cb2c("#uGO", 1306),
      "TfUNW": _0x43cb2c("G![J", 1331) + "pPLk7O" + _0x43cb2c("l[QS", 2248),
      "STufW": "77YA5y" + _0x43cb2c("l[QS", 1119) + _0x43cb2c("#f!g", -159) + "M6",
      "dyRWE": "vejrEvK",
      "WMksr": "A2LLsw5MBW",
      "umjWg": _0x43cb2c("G![J", 649) + "y",
      "caeKB": _0x43cb2c("68zl", 383) + _0x43cb2c("KgIb", 1287) + "sq",
      "OVQoN": "tKnvtgG",
      "zGWZu": _0x43cb2c("5ZNg", -453) + "u",
      "YwKGK": _0x43cb2c("qZz4", 632) + _0x43cb2c("aiqQ", -368) + "AG",
      "QHGMZ": "uY8XmJ" + _0x43cb2c("^s2q", 103) + "BW",
      "EGkJi": "4P2mioIoT+wpLUIfVU" + _0x43cb2c("3ipA", 2407) + _0x43cb2c("#uGO", -241) + "AiS+wK" + "Sq",
      "psjjI": _0x43cb2c("KgIb", 2381) + _0x43cb2c("h0ri", 618),
      "fLlzH": "77Ym6lAf6l+h6zIi5yc8ia",
      "pXmvz": _0x43cb2c("r#&P", -497) + "vUlMnU" + "lW",
      "yXfrz": _0x43cb2c("3ipA", 586) + "CZ",
      "ntKFs": _0x43cb2c("hM!U", 1438) + "Ym5ygC" + "5Q2I6i" + "sA5PYS" + _0x43cb2c("5ZNg", 719) + "gm",
      "ihbxd": _0x43cb2c("i]Oi", 1383) + "K",
      "UTJKV": _0x43cb2c("d420", 799) + "w4GEMy" + "IowaVo" + _0x43cb2c("Caa8", -222) + _0x43cb2c("t&mx", 1682) + "wbNoAT" + "OG",
      "xLpJg": _0x43cb2c("l[QS", 461) + "i",
      "iMezZ": _0x43cb2c("ZVXe", 1447) + _0x43cb2c("68zl", 1660) + "ta",
      "dePMN": "ioMhKEw4GEwL" + _0x43cb2c("cV6N", 2120) + "G",
      "nrgIV": _0x43cb2c("r#&P", 2220) + "u",
      "hWImA": _0x43cb2c("0qEw", 26) + "u",
      "NcKER": _0x43cb2c("z$^9", 238) + "Lu",
      "wvUvD": _0x43cb2c("A$(g", 1907) + "i",
      "uXOrU": _0x43cb2c("FbMW", 1182) + "W",
      "jVusO": "s1PWz0m",
      "lRfZk": _0x43cb2c("0qEw", 2412) + "O",
      "yUuEU": _0x43cb2c("8OI@", -437) + "S",
      "ogGyO": "Au9wvMG",
      "vDfDA": "v0vdveu",
      "QZbqM": _0x43cb2c("5ZNg", 351) + "rPwxPs" + "Aq",
      "saXaN": _0x43cb2c("hM!U", 316) + "m",
      "fwmpj": _0x43cb2c("wsz*", 1769) + _0x43cb2c("xkwi", 155) + "CW",
      "TjISq": _0x43cb2c("r#&P", 2165) + "rxvxnj" + "BG",
      "lXzQG": "Ahr0Chm6lY9Uzq",
      "pibfx": "y3v0zq",
      "ismFs": "twr2DfC",
      "vIDAn": "s0DYAuG",
      "XhdrU": "otKJzw" + _0x43cb2c("q(oB", 1908) + "oq",
      "YSReS": _0x43cb2c("5ZNg", 1213) + "y",
      "xcCmd": "As5LlM" + _0x43cb2c("wsz*", 2045) + "Aa",
      "SdmnB": _0x43cb2c("Z@bN", 129) + "a",
      "bweBi": "y29VA2LL",
      "kqtBa": _0x43cb2c("z$^9", 990) + "C",
      "pKfVt": "thPODfm",
      "DTVxX": _0x43cb2c("KgIb", 400) + _0x43cb2c("A$(g", 2134) + "uW",
      "DMklm": _0x43cb2c("^R3S", 790) + "K",
      "kUPck": "ioIoT+wpLUETVUwqJEw8GUw4UdOG",
      "joRZM": _0x43cb2c("Z@bN", 32) + _0x43cb2c("8OI@", 919) + "uW",
      "eQPeh": "uvrzELa",
      "fcfFw": "rhndwMi",
      "rHRUD": _0x43cb2c("rEA3", 885) + "AiKoAk" + "PEwrIU" + _0x43cb2c("68zl", 447) + _0x43cb2c("A$(g", 2) + _0x43cb2c("t&mx", 1864),
      "fYLLY": _0x43cb2c("d420", 406) + "XVD1jL" + "DW",
      "SqHUi": _0x43cb2c("0qEw", 1143) + "G",
      "hFNPz": _0x43cb2c("2PQv", 365) + _0x43cb2c("h0ri", -89) + "5zgk",
      "tdLZM": "BMHSrLq",
      "hGVPk": _0x43cb2c("&t&m", 1328) + "i",
      "oEVpg": _0x43cb2c("Kd26", 762) + "HLy2T0" + "Aq",
      "Rvrkm": _0x43cb2c("FweH", -507) + "O",
      "owhEk": "BM9Uzq",
      "rRGOH": _0x43cb2c("FbMW", 1096) + "i",
      "aSnvx": _0x43cb2c("A$(g", 1982),
      "UPqyy": _0x43cb2c("A$(g", 28) + _0x43cb2c("g1XK", 689) + "BG",
      "LbTPW": _0x43cb2c("#f!g", 1919),
      "ufEAw": "y1n5uwm",
      "VUJna": "qK9JrMq",
      "GArnB": _0x43cb2c("Bugr", 2274) + "O",
      "idejL": _0x43cb2c("yuIP", 673) + _0x43cb2c("KgIb", -326) + "lG",
      "KdMln": "ios4QUACIEAvIoI0PU" + _0x43cb2c("Iw8c", -485),
      "TooRO": "wNruA1" + _0x43cb2c("X#K!", 1396) + "rq",
      "rohzx": _0x43cb2c("PvqJ", 1565) + "nOyw5N" + "zq",
      "KqkIJ": _0x43cb2c("Z@bN", -469) + _0x43cb2c("rEA3", 1634) + "Da",
      "wNkfa": "4PYfio" + _0x43cb2c("d420", 2284) + _0x43cb2c("Z@bN", 940) + "wKJEwU" + _0x43cb2c("$]wl", 1990),
      "LmiaA": _0x43cb2c("KgIb", 1222) + "LHBenV" + "Aq",
      "xRaWd": _0x43cb2c("#f!g", -300) + _0x43cb2c("$r&&", 2312) + "ia",
      "dasXn": "tMPzmu5TvMLnrW",
      "uAPkb": "AuTJv0e",
      "aOYGX": "ueT4qu8",
      "SCYFj": _0x43cb2c("Caa8", 1600) + "e",
      "qufGm": _0x43cb2c("OjOj", 356),
      "VbusJ": _0x43cb2c("rEA3", 2068) + "cg5Q2J" + "5BI477" + "Ym5yE6" + "5y+Jsv" + "a6",
      "UAZOb": "8j+tIY" + _0x43cb2c("yuIP", 614) + _0x43cb2c("2PQv", 494) + _0x43cb2c("Iw8c", 2049) + _0x43cb2c("68zl", -188),
      "DeFJu": _0x43cb2c("#uGO", 597) + _0x43cb2c("A$(g", 227) + "lG",
      "hHWMI": "CezcywS",
      "Nckpe": _0x43cb2c("#f!g", -161) + "u",
      "FBvta": _0x43cb2c("yuIP", -12) + "X0",
      "cKJWT": _0x43cb2c("l[QS", 1112) + _0x43cb2c("aiqQ", -230) + "BW",
      "oCcPM": "wNDmAhC",
      "pPsQW": _0x43cb2c("$r&&", 653) + "bOB25L" + "oW",
      "WiwTg": _0x43cb2c("Kd26", 2358) + "MuMEIV" + "RZOG5Q" + "oa5Rwl" + "5yIWia",
      "iNePE": "zMfSC2u",
      "cdeIw": "wM1zv0" + _0x43cb2c("Kd26", 1448) + "ma",
      "TOlsY": "CNzqENq",
      "ePWDO": _0x43cb2c("3ipA", 857) + _0x43cb2c("ZyH)", 2018) + "BW",
      "IZsCF": _0x43cb2c("Caa8", 832) + "C",
      "DdVBz": _0x43cb2c("Kd26", -321) + "5Qutbz" + "Bq",
      "zWmiG": "BKPqENG",
      "zHOpb": _0x43cb2c("KgIb", 174) + "nhvwLp" + "AG",
      "jXUhY": _0x43cb2c("wsz*", -501) + "XHEu5H" + "Bq",
      "AnOct": _0x43cb2c("qZz4", -42) + _0x43cb2c("ZyH)", 1623) + "yW",
      "hckKF": "Be56vLG",
      "wkODa": _0x43cb2c("ZVXe", 2033) + "W",
      "tFXtg": _0x43cb2c("ZVXe", 183) + "m",
      "CqIdU": "BM8Ty2" + _0x43cb2c("0qEw", 79),
      "DoxZL": _0x43cb2c("Bugr", 1361) + _0x43cb2c("G![J", 1242) + "AG",
      "NCkeX": _0x43cb2c("i]Oi", 544) + "M/5zgk" + _0x43cb2c("^R3S", 265) + "Yr5OgV",
      "BrWNX": _0x43cb2c("#uGO", -29),
      "igDyB": _0x43cb2c("ZyH)", 894) + "a",
      "QFVHM": _0x43cb2c("$r&&", 2080) + "K",
      "AHUwx": _0x43cb2c("68zl", 917) + "LK",
      "tGBnh": _0x43cb2c("yuIP", 97) + _0x43cb2c("t&mx", 1679) + "mG",
      "DRNbK": _0x43cb2c("l[QS", 1650) + _0x43cb2c("l[QS", 879) + "Da",
      "acCHb": "A0LUzgv4",
      "fvjnk": "q0L4CeK",
      "blWXw": _0x43cb2c("0qEw", 1893) + "0",
      "cLyqp": _0x43cb2c("q(oB", 446) + "u",
      "iXQbM": "BgLRzsbnywmGtW",
      "jlEbM": _0x43cb2c("%Dq0", 1636) + "O",
      "pzXab": _0x43cb2c("FweH", 1280) + _0x43cb2c("3ipA", 1498) + "N5Qaio" + "w8GowN" + _0x43cb2c("r#&P", 1663) + _0x43cb2c("Caa8", 457),
      "HZaPV": "ohH3Cx" + _0x43cb2c("wsz*", -342),
      "qpcou": _0x43cb2c("ZVXe", 934) + "5ex0vo" + "qq",
      "HYSee": _0x43cb2c("r#&P", -49) + _0x43cb2c("rEA3", 102),
      "bAOOV": "sJfAu3DPwvHwma",
      "stCpN": _0x43cb2c("Iw8c", 2038) + "9K",
      "zBXwY": "uenqyKq",
      "DWEuI": _0x43cb2c("aiqQ", 1716) + "q",
      "ZsfsE": _0x43cb2c("#uGO", 954) + _0x43cb2c("&t&m", 760) + "wa",
      "AlgKW": _0x43cb2c("Kd26", 2197) + "q",
      "BzcOj": _0x43cb2c("ZVXe", 1049) + "4",
      "fpzxZ": _0x43cb2c("3ipA", 1372) + _0x43cb2c("AeJl", -391) + "DW",
      "KLDSC": _0x43cb2c("OjOj", -475) + "i",
      "Pidln": _0x43cb2c("0qEw", -319) + "Lxttjz" + "mG",
      "wuJsW": "l3rHC2" + _0x43cb2c("yuIP", 1882) + "BW",
      "TDPYS": _0x43cb2c("3ipA", -128) + _0x43cb2c("FbMW", -470),
      "QmCSk": "vf9nqvG",
      "HdsFW": _0x43cb2c("8OI@", 2075),
      "EHcqm": _0x43cb2c("rEA3", 1800) + "EGzwDP" + _0x43cb2c("Caa8", 974) + _0x43cb2c("$r&&", 2007),
      "yNdVW": "C2HVDs" + _0x43cb2c("aiqQ", -171),
      "mhNav": "EgD4BfO",
      "cvEYd": "DxjSCg" + _0x43cb2c("KgIb", 1379),
      "NXfBm": _0x43cb2c("wsz*", 1586) + _0x43cb2c("0qEw", -33) + "ra",
      "cPiOt": "s1ndt0" + _0x43cb2c("r#&P", 161) + "tq",
      "JPUoU": "BvHRtNq",
      "JdbFt": "B2HmywS",
      "eJIZC": _0x43cb2c("FweH", 1809),
      "AXQEy": "ioI/LowBNUEP" + _0x43cb2c("t&mx", 1978) + _0x43cb2c("B)gy", 520),
      "ufPGB": _0x43cb2c("68zl", 2016) + "q",
      "hfbTW": _0x43cb2c("z$^9", 2237) + "4",
      "VrfZR": "DxbKyxrLlMPZ",
      "bigpg": _0x43cb2c("FweH", 178) + "O",
      "CkOoo": "BwfW",
      "CLOpS": "AgfZtw" + _0x43cb2c("PvqJ", 984),
      "IJOJW": _0x43cb2c("Z@bN", 386) + "ABToAw" + "SoMQJo" + "IVGEAi" + "KowkNW",
      "cmrwY": _0x43cb2c("FbMW", 2267) + "y",
      "bvmQE": _0x43cb2c("OjOj", -494) + "q",
      "fFMSC": "A3DHAs1HBMrYBW",
      "kJiVt": _0x43cb2c("g1XK", 1580) + _0x43cb2c("FweH", -328),
      "IvQxt": _0x43cb2c("0qEw", 2250) + "a",
      "MrSOC": _0x43cb2c("^s2q", 1789) + _0x43cb2c("d420", 1995) + _0x43cb2c("AeJl", 1341),
      "nqzoM": "y29Ups" + _0x43cb2c("A$(g", 1067) + "Da",
      "hkhJQ": "ChjVEhLvCMW",
      "JwWgr": _0x43cb2c("ZyH)", -337) + _0x43cb2c("PvqJ", 1582) + "VilLUl" + "JVVjO",
      "bhDoq": "ignVB2TPzEAGVow8J+" + _0x43cb2c("ZyH)", 2400),
      "HgQFj": "ioINO+" + _0x43cb2c("$]wl", 2164) + "B2TPzE" + _0x43cb2c("ZVXe", -290),
      "zgcoE": "Cejtquu",
      "cIvAO": _0x43cb2c("PvqJ", 1250) + "rV",
      "BTxxO": "ywXSq2fZAa",
      "FqxAU": "t05f",
      "yvNuz": "CxvLC3q",
      "jDxmN": "CxvLCN" + _0x43cb2c("0qEw", 22) + "Bq",
      "YpVDC": "zw50CM" + _0x43cb2c("68zl", 71),
      "JTyEQ": _0x43cb2c("2PQv", 1675) + "vK",
      "OzgUY": "yZncC1LyBfvLwa",
      "pYlbV": "Dgv4Da",
      "CNiFk": "uKvtvf" + _0x43cb2c("r#&P", 1668) + "uG",
      "gromc": _0x43cb2c("z$^9", 2260) + "0",
      "RISCe": _0x43cb2c("Bugr", 2268),
      "YxLdj": "BwvZC2fNzq",
      "xcHqc": "q09vtLq",
      "UdoSL": _0x43cb2c("8OI@", 2293) + "q",
      "eEqbq": "AMXRs1q",
      "dKfLU": "BNnSoI0W",
      "OOLrx": "ios7U+" + _0x43cb2c("Bugr", 1559) + _0x43cb2c("OjOj", 1463) + "G",
      "WhvoT": _0x43cb2c("3ipA", 2078) + "C",
      "TcgHS": _0x43cb2c("KgIb", 775) + _0x43cb2c("PvqJ", -206) + _0x43cb2c("X#K!", 170) + "+3",
      "YFzwL": "tuLo",
      "hubjn": _0x43cb2c("B)gy", 1166) + _0x43cb2c("qZz4", 361),
      "GOTAI": _0x43cb2c("Bugr", 1875) + "1PkdiZ" + "mq",
      "oyIbb": "ios7U+wkOEE7N+IUOtO",
      "RVQbG": _0x43cb2c("OjOj", 514) + _0x43cb2c("A$(g", 912) + "za",
      "GUtds": _0x43cb2c("yuIP", 1596),
      "bNxBt": "y2TovMK",
      "McbOO": _0x43cb2c("xb56", 1666) + "1LlZG3" + "lG",
      "xOaiO": _0x43cb2c("i]Oi", 1472) + "4WyJiX" + "rq",
      "lxSlY": "AgvHzgvYCW",
      "wYVJq": _0x43cb2c("d420", 1195) + "vY",
      "vynEF": _0x43cb2c("OjOj", 2329) + "q",
      "LPeDA": "qLrMq3q",
      "oOrrx": "CMvWzwf0",
      "zmCFL": _0x43cb2c("PvqJ", 1980),
      "Fruqd": _0x43cb2c("8OI@", 69) + "K",
      "asTdh": _0x43cb2c("Iw8c", 1890) + _0x43cb2c("rEA3", 594) + "Ka",
      "Xrlyo": _0x43cb2c("A$(g", 1885) + "O",
      "IOCeT": _0x43cb2c("%Dq0", -221) + "m",
      "FipIy": "ioETVU" + _0x43cb2c("rEA3", 2058) + _0x43cb2c("OjOj", 1952) + "OG",
      "wfAZF": _0x43cb2c("Z@bN", 2340) + _0x43cb2c("d420", 1103) + "EG",
      "euffm": "r1jqCeW",
      "VokoF": "tKnyELm",
      "RNhan": _0x43cb2c("g1XK", 78) + "4",
      "gZeHu": "y0Hkwxm",
      "ZHSDl": _0x43cb2c("AeJl", 904) + "rL",
      "wLTZU": _0x43cb2c("68zl", -385) + _0x43cb2c("i]Oi", 1348) + "teTwuq",
      "hFjLi": _0x43cb2c("t&mx", 515) + "wpLUET" + _0x43cb2c("KgIb", 613) + "AxOowt" + _0x43cb2c("lMAw", 1729),
      "YPhUA": "teLuDMq",
      "JBWtr": _0x43cb2c("q(oB", 2269) + "O",
      "uqTvp": _0x43cb2c("#f!g", 2234) + _0x43cb2c("h0ri", -164),
      "HlhYE": "vuD4ruq",
      "opoQI": "ue9tva",
      "LWXKG": _0x43cb2c("h0ri", 398) + "O",
      "xkNTg": "6lsLoIa",
      "DpBUi": _0x43cb2c("q(oB", 606) + _0x43cb2c("qZz4", 93) + "va",
      "vrUks": _0x43cb2c("$r&&", 432) + _0x43cb2c("z$^9", 52) + "zW",
      "IZado": _0x43cb2c("Z@bN", -117),
      "kGSOm": _0x43cb2c("X#K!", 2365) + "95tenk" + "EG",
      "ldaHZ": "8j+uJsdMRApL" + _0x43cb2c("B)gy", 64) + _0x43cb2c("rEA3", 1724) + "HjRMNk" + _0x43cb2c("Z@bN", 2258) + "LRa",
      "uZoKQ": _0x43cb2c("3ipA", 980) + "G",
      "SXCSc": _0x43cb2c("68zl", 1556) + "w4GEAJ" + _0x43cb2c("ZyH)", 467) + _0x43cb2c("Caa8", 674) + _0x43cb2c("#f!g", 285),
      "wttLY": "A3mUCgHW",
      "aFOJv": "ioAiKo" + _0x43cb2c("2PQv", 1853) + "T+wpLU" + _0x43cb2c("OjOj", 1910) + "IU+8MG",
      "aOJqf": "zeL6s3a",
      "nRFcD": "vxjZAeO",
      "goymh": _0x43cb2c("ZVXe", 574) + "q",
      "nNNsH": "AwqGyw" + _0x43cb2c("q(oB", 1236) + "mW",
      "MIIEp": _0x43cb2c("i]Oi", -125),
      "MpwfX": _0x43cb2c("^s2q", 521) + _0x43cb2c("aiqQ", 2406) + _0x43cb2c("q(oB", 439) + _0x43cb2c("$]wl", 374) + "R4BPKQ" + "u",
      "iOdBz": _0x43cb2c("OjOj", 2310) + "C",
      "QSyKc": _0x43cb2c("5ZNg", 858) + "y",
      "NWQEA": _0x43cb2c("0qEw", -458) + _0x43cb2c("ZVXe", 996) + "BW",
      "mVSiA": "whvxDMq",
      "GWxYN": _0x43cb2c("^s2q", 2133),
      "oDCMG": "zgLK",
      "CrgNE": "DvHzDxK",
      "KFVbQ": _0x43cb2c("PvqJ", 1169),
      "pcaZx": "sNrJvNq",
      "yKXkk": "v2XiEhy",
      "OoPQm": _0x43cb2c("2PQv", 1455) + "jex1Db" + "sq",
      "bQCLu": "8j+tUIdLUB/L" + _0x43cb2c("&t&m", 2116) + "3LIQa6" + "ia",
      "KKHHX": _0x43cb2c("FweH", 1563) + _0x43cb2c("lMAw", 2414),
      "KYMum": "CKLRCgG",
      "VAnjz": _0x43cb2c("G![J", 160) + "PuqM1o" + "AG",
      "qsfmG": _0x43cb2c("B)gy", 450) + "G",
      "GgRJA": "qurFqvbqru5exW",
      "nCSmD": "C2vHCMnO",
      "AytxD": _0x43cb2c("&t&m", 1659),
      "yRsoJ": "oYbnss" + _0x43cb2c("$]wl", -322) + "Da",
      "vfmqb": _0x43cb2c("A$(g", 619),
      "EqoKu": "CMv3yxjK",
      "XVtNA": _0x43cb2c("Z@bN", 2324) + "+h5Q2K" + "5QYH5l" + _0x43cb2c("X#K!", 92),
      "bLpKZ": "yZbSA0" + _0x43cb2c("OjOj", 13) + "ra",
      "SwzoH": _0x43cb2c("5ZNg", -505) + _0x43cb2c("ZVXe", 1356) + "BG",
      "bCOTo": _0x43cb2c("xb56", 1883) + "L0lZyW" + "nq",
      "uWMLA": _0x43cb2c("q(oB", 165) + "W"
    };
    function _0x43cb2c(_0x4702c2, _0x2aadb7) {
      return _0x39e9(_0x2aadb7 - -918, _0x4702c2);
    }
    const _0x2b5f3f = [_0x43cb2c("r#&P", -205) + "+3wW", _0x43cb2c("i]Oi", 958) + "LK", "yxPdyuW", _0x2997f4.ryGZG, _0x2997f4[_0x43cb2c("A$(g", 2196)], "vuvRCfe", _0x2997f4.PtgkV, _0x2997f4[_0x43cb2c("OjOj", -31)], _0x43cb2c("^R3S", 1787), _0x2997f4[_0x43cb2c("#f!g", 872)], _0x43cb2c("$r&&", 933) + "vY", _0x43cb2c("^s2q", 777) + "zkyM1A" + "DG", "BgvUz3rO", _0x43cb2c("&t&m", 1141) + "DLyKTP" + "Da", _0x2997f4[_0x43cb2c("&t&m", 525)], _0x2997f4[_0x43cb2c("Iw8c", 1288)], _0x2997f4[_0x43cb2c("xb56", 1693)], _0x2997f4[_0x43cb2c("3ipA", 1238)], _0x2997f4[_0x43cb2c("Bugr", 968)], _0x43cb2c("2PQv", -334) + _0x43cb2c("5ZNg", 1352) + "yq", "BMf2AwDHDgu", _0x43cb2c("yuIP", 1104) + "KXoezY" + "D3ruva", _0x2997f4.TfUNW, "ioAJGoA1I+wiSoI/VE" + _0x43cb2c("t&mx", -422) + _0x43cb2c("B)gy", 1655) + _0x43cb2c("Kd26", 752) + "HG", _0x2997f4.STufW, _0x2997f4.dyRWE, "4PYfiokCHsbtt0nluZu", _0x2997f4[_0x43cb2c("FweH", 589)], _0x2997f4[_0x43cb2c("aiqQ", 193)], _0x2997f4.caeKB, _0x2997f4.OVQoN, _0x2997f4[_0x43cb2c("r#&P", 307)], _0x2997f4[_0x43cb2c("rEA3", -504)], _0x2997f4.QHGMZ, _0x2997f4[_0x43cb2c("^s2q", -381)], _0x2997f4.psjjI, _0x2997f4.fLlzH, _0x43cb2c("Iw8c", -436) + _0x43cb2c("aiqQ", 1225) + _0x43cb2c("xb56", 609) + _0x43cb2c("Kd26", 91) + "LBa9", _0x2997f4[_0x43cb2c("ZyH)", -52)], _0x43cb2c("hM!U", 997) + _0x43cb2c("h0ri", 1477) + _0x43cb2c("cV6N", 1648) + "IVLsa", _0x2997f4[_0x43cb2c("aiqQ", 1677)], "swjAsw4", _0x2997f4[_0x43cb2c("KgIb", 2167)], _0x43cb2c("KgIb", 1093) + "8", _0x43cb2c("%Dq0", -495) + "4", _0x43cb2c("OjOj", -137) + "wkOoES" + "Ra", "ioI+VUwiSoACGowKP+" + _0x43cb2c("qZz4", 1834) + "OoASOE" + "AvSa", _0x2997f4.ihbxd, _0x43cb2c("$]wl", -288) + "4", _0x2997f4[_0x43cb2c("wsz*", -329)], _0x2997f4[_0x43cb2c("AeJl", 395)], _0x43cb2c("%Dq0", 1694) + _0x43cb2c("B)gy", 23) + "CW", _0x43cb2c("3ipA", 1400) + _0x43cb2c("i]Oi", 769), _0x2997f4[_0x43cb2c("ZyH)", -77)], _0x43cb2c("$]wl", 1886) + _0x43cb2c("FbMW", -133) + "tW", _0x2997f4.dePMN, _0x43cb2c("r#&P", 1964) + "O", "8j+AGc" + _0x43cb2c("Caa8", 413) + _0x43cb2c("d420", 1392) + _0x43cb2c("yuIP", -411) + "ioABTo" + _0x43cb2c("&t&m", 1860), "v1rctL" + _0x43cb2c("Caa8", 1520) + "rG", "4P2mioAYOEAC" + _0x43cb2c("OjOj", 1744) + _0x43cb2c("xkwi", 262) + _0x43cb2c("^s2q", 1135) + "I0PUwp" + "TW", _0x2997f4[_0x43cb2c("^R3S", 1516)], _0x43cb2c("aiqQ", 391) + "i", _0x43cb2c("#f!g", 716) + "G", _0x2997f4[_0x43cb2c("B)gy", 1750)], _0x2997f4[_0x43cb2c("#uGO", 587)], _0x2997f4.wvUvD, _0x2997f4.uXOrU, _0x2997f4[_0x43cb2c("wsz*", 1833)], _0x2997f4[_0x43cb2c("d420", 2236)], _0x2997f4.yUuEU, "sNLvv2C", "yxjKrM" + _0x43cb2c("t&mx", 2347), "zgvJu1q", _0x2997f4.ogGyO, _0x2997f4.vDfDA, _0x2997f4.QZbqM, _0x43cb2c("G![J", 565) + _0x43cb2c("8OI@", 2259), _0x2997f4.saXaN, _0x43cb2c("cV6N", 675) + "O", "BKDurum", "BM93", _0x2997f4[_0x43cb2c("2PQv", -327)], _0x43cb2c("KgIb", 1531) + _0x43cb2c("r#&P", 390) + _0x43cb2c("8OI@", 1245) + _0x43cb2c("68zl", 2221) + _0x43cb2c("Iw8c", 1210), "lcdPH5hLUihK" + _0x43cb2c("wsz*", -299) + "a9", _0x2997f4.TjISq, "BxnN", _0x43cb2c("&t&m", 2194) + _0x43cb2c("FbMW", 1292) + "Da", "5yc85B" + _0x43cb2c("l[QS", -47) + _0x43cb2c("d420", 48) + _0x43cb2c("^R3S", 1917) + "5yQH5z" + _0x43cb2c("FweH", 1686), _0x43cb2c("ZVXe", 1482) + "O", _0x43cb2c("OjOj", 2301) + "a", "u1rpuf" + _0x43cb2c("G![J", 715) + "uW", _0x43cb2c("KgIb", 2148) + _0x43cb2c("cV6N", 892), _0x2997f4[_0x43cb2c("z$^9", 1778)], _0x43cb2c("^R3S", -186) + _0x43cb2c("l[QS", -306) + "uG", _0x2997f4[_0x43cb2c("B)gy", 801)], _0x2997f4.ismFs, "Dg9vCh" + _0x43cb2c("cV6N", 1177) + "CW", _0x2997f4[_0x43cb2c("X#K!", 412)], _0x43cb2c("r#&P", 1963) + "y", "z1ftD00", _0x2997f4[_0x43cb2c("aiqQ", 1453)], _0x2997f4[_0x43cb2c("Bugr", 989)], _0x2997f4[_0x43cb2c("g1XK", -21)], "uhbuuue", _0x2997f4[_0x43cb2c("5ZNg", 1411)], _0x2997f4.bweBi, _0x2997f4[_0x43cb2c("xkwi", 1956)], _0x2997f4.pKfVt, _0x2997f4[_0x43cb2c("Kd26", 1072)], _0x2997f4.DMklm, _0x2997f4.kUPck, _0x2997f4[_0x43cb2c("FweH", -178)], "r01OCKG", "A3nJAW", _0x2997f4[_0x43cb2c("0qEw", 1339)], _0x43cb2c("l[QS", 200) + _0x43cb2c("FbMW", 508), _0x2997f4.fcfFw, _0x2997f4[_0x43cb2c("$r&&", 754)], _0x43cb2c("xb56", 2026) + _0x43cb2c("wsz*", 1638) + "zq", _0x2997f4.fYLLY, _0x2997f4[_0x43cb2c("qZz4", 683)], _0x2997f4[_0x43cb2c("OjOj", -280)], _0x2997f4[_0x43cb2c("KgIb", 353)], "Ew5J", "ntiZnd" + _0x43cb2c("lMAw", 1419) + _0x43cb2c("h0ri", -9), "x01bwa", _0x2997f4[_0x43cb2c("Iw8c", 973)], _0x2997f4[_0x43cb2c("l[QS", 1324)], _0x43cb2c("qZz4", -343) + "q9", _0x43cb2c("ZyH)", -65) + _0x43cb2c("cV6N", -66), _0x43cb2c("ZVXe", 1403) + "y", _0x2997f4[_0x43cb2c("yuIP", 705)], _0x43cb2c("OjOj", 821) + "q", _0x43cb2c("A$(g", 848) + "DU", _0x2997f4[_0x43cb2c("qZz4", 107)], _0x2997f4.rRGOH, "y2fJAgu", _0x43cb2c("FbMW", 2254) + _0x43cb2c("hM!U", -379) + "DW", "BI94lx" + _0x43cb2c("5ZNg", -54) + "BW", _0x43cb2c("$r&&", 2304) + "PxntnK" + "vG", _0x2997f4[_0x43cb2c("q(oB", 495)], _0x2997f4[_0x43cb2c("$]wl", -156)], _0x43cb2c("Bugr", 50) + _0x43cb2c("X#K!", 816) + _0x43cb2c("yuIP", 779) + _0x43cb2c("2PQv", 1036) + _0x43cb2c("A$(g", 1373) + _0x43cb2c("t&mx", 1670) + "Pq", _0x2997f4[_0x43cb2c("t&mx", 49)], "AMXLBum", _0x2997f4.ufEAw, _0x2997f4[_0x43cb2c("&t&m", 2249)], "AfP5EuG", _0x2997f4[_0x43cb2c("$]wl", 2296)], _0x2997f4.idejL, _0x43cb2c("Caa8", 794) + _0x43cb2c("r#&P", 581) + "nG", "y2fWDgLVBG", _0x43cb2c("Caa8", 633) + "O", _0x2997f4[_0x43cb2c("qZz4", 349)], _0x2997f4[_0x43cb2c("G![J", 408)], _0x2997f4.rohzx, "CvDwz1y", _0x43cb2c("3ipA", 2392) + "91Da", _0x2997f4[_0x43cb2c("xkwi", 905)], "5PYQ5O" + _0x43cb2c("lMAw", 2071), _0x2997f4[_0x43cb2c("cV6N", 598)], _0x43cb2c("^s2q", 670) + _0x43cb2c("Kd26", 2171) + _0x43cb2c("qZz4", 84) + _0x43cb2c("3ipA", 1658) + _0x43cb2c("Z@bN", 1107) + "+8Jow3" + "SG", _0x2997f4.LmiaA, _0x2997f4[_0x43cb2c("8OI@", 2032)], _0x2997f4[_0x43cb2c("^R3S", -323)], _0x43cb2c("A$(g", 2391) + "n0", _0x2997f4[_0x43cb2c("ZyH)", 1846)], _0x2997f4[_0x43cb2c("Iw8c", 424)], _0x43cb2c("aiqQ", 530) + "9T", "8j+uJsa", _0x43cb2c("q(oB", 1858) + _0x43cb2c("$r&&", 1393) + "na", "A3vHAx" + _0x43cb2c("wsz*", 545) + "Ca", _0x2997f4[_0x43cb2c("h0ri", -217)], _0x43cb2c("%Dq0", 914) + _0x43cb2c("ZyH)", 1029), _0x2997f4[_0x43cb2c("A$(g", -243)], _0x43cb2c("KgIb", 2283) + "v0zufS" + "Ba", _0x2997f4.VbusJ, _0x2997f4[_0x43cb2c("hM!U", 2183)], _0x43cb2c("cV6N", 2212) + "O", _0x43cb2c("^R3S", 963) + "DLCKnH" + "CW", _0x43cb2c("AeJl", 1199) + _0x43cb2c("PvqJ", -455), _0x2997f4[_0x43cb2c("#f!g", 2424)], _0x43cb2c("ZyH)", -384) + "1vntzu" + "va", _0x2997f4[_0x43cb2c("$r&&", 930)], _0x2997f4.Nckpe, _0x2997f4[_0x43cb2c("$r&&", 623)], "sMPAu0" + _0x43cb2c("3ipA", 194) + "ra", _0x43cb2c("cV6N", 2204) + "i", _0x2997f4[_0x43cb2c("0qEw", 2396)], _0x43cb2c("G![J", 749) + _0x43cb2c("Kd26", 1425) + "pq", _0x43cb2c("#f!g", 1249) + "G", "tw96Aw" + _0x43cb2c("xkwi", -292) + "lG", _0x43cb2c("Caa8", 1630) + "q", _0x2997f4[_0x43cb2c("OjOj", -154)], _0x43cb2c("3ipA", -276) + "m", _0x43cb2c("z$^9", 135) + "dMNkRM" + _0x43cb2c("Iw8c", -428) + _0x43cb2c("^s2q", 1983) + "R6/ORQ" + _0x43cb2c("0qEw", 1829), _0x2997f4[_0x43cb2c("r#&P", -363)], "8j+pHIdMGlVP" + _0x43cb2c("$r&&", 500) + _0x43cb2c("hM!U", -138) + _0x43cb2c("PvqJ", -339), _0x2997f4.WiwTg, "Dg90ywXszxDHCG", _0x43cb2c("Iw8c", 1699) + "m", _0x2997f4.iNePE, "ANHsAM0", "C2fSDa", _0x43cb2c("qZz4", 873) + "a", _0x43cb2c("8OI@", -320), _0x43cb2c("#uGO", 54) + "v0zvrH" + "CW", _0x2997f4[_0x43cb2c("^R3S", 1753)], "u0vbuK" + _0x43cb2c("3ipA", 1239) + "xW", _0x2997f4[_0x43cb2c("3ipA", 1816)], _0x43cb2c("yuIP", 553), _0x43cb2c("FbMW", 118) + _0x43cb2c("FweH", -484) + "CW", _0x43cb2c("Kd26", 1610) + "i", _0x2997f4[_0x43cb2c("5ZNg", 2297)], "Bg93uM" + _0x43cb2c("Z@bN", 42) + "va", _0x2997f4[_0x43cb2c("X#K!", 2137)], "5QIH5B" + _0x43cb2c("#f!g", 1822), _0x43cb2c("Bugr", 373) + "q", _0x2997f4.DdVBz, _0x2997f4[_0x43cb2c("t&mx", -271)], _0x2997f4[_0x43cb2c("g1XK", 1054)], _0x43cb2c("l[QS", -451) + "4Xnq", _0x2997f4.jXUhY, _0x2997f4[_0x43cb2c("AeJl", 734)], _0x43cb2c("z$^9", 177) + _0x43cb2c("PvqJ", -100) + "wq", _0x43cb2c("r#&P", -421) + _0x43cb2c("G![J", 1468) + _0x43cb2c("AeJl", 2159) + _0x43cb2c("Bugr", -397), _0x2997f4.hckKF, _0x2997f4.wkODa, _0x2997f4[_0x43cb2c("Kd26", 483)], "vKfm", _0x2997f4.CqIdU, "uYbyksbbChbSzq", _0x2997f4.DoxZL, _0x2997f4.NCkeX, _0x2997f4.BrWNX, "y29PBKv4y2vLza", _0x43cb2c("%Dq0", 1172) + "O", _0x2997f4[_0x43cb2c("KgIb", 1491)], _0x2997f4[_0x43cb2c("^s2q", 2390)], _0x43cb2c("2PQv", 90) + "i", _0x2997f4[_0x43cb2c("xb56", 735)], "twHQsgO", "AxnYrLe", _0x2997f4.tGBnh, _0x43cb2c("Kd26", 2247) + "S", "mcaOtg" + _0x43cb2c("q(oB", -365) + "ia", _0x2997f4.DRNbK, _0x2997f4[_0x43cb2c("h0ri", 2291)], _0x2997f4[_0x43cb2c("%Dq0", 796)], _0x2997f4[_0x43cb2c("PvqJ", 1310)], _0x2997f4.cLyqp, "tufyx0nptKnvuG", _0x43cb2c("wsz*", -367) + _0x43cb2c("&t&m", 1570), "mc40mJ" + _0x43cb2c("wsz*", 1346) + "mq", "zwHqr0y", _0x43cb2c("l[QS", 1749) + "q", "5yIh5O2I5yIW5lIl5lIa5lIQ" + _0x43cb2c("yuIP", -296) + "QH", _0x43cb2c("g1XK", 1564) + "c86Aoo" + _0x43cb2c("t&mx", 1203) + _0x43cb2c("OjOj", 314) + _0x43cb2c("Z@bN", 328) + _0x43cb2c("d420", 1114) + "6yEp", _0x2997f4[_0x43cb2c("KgIb", 1639)], _0x43cb2c("^s2q", 1185) + "jR", "C3rVCe" + _0x43cb2c("Kd26", 2345) + "CW", _0x43cb2c("PvqJ", -330) + _0x43cb2c("xkwi", 947) + "nq", _0x2997f4[_0x43cb2c("qZz4", 2216)], _0x2997f4.pzXab, _0x2997f4.HZaPV, _0x43cb2c("qZz4", 1850) + "S", _0x2997f4[_0x43cb2c("FbMW", 742)], "tufy", _0x43cb2c("h0ri", 2246) + _0x43cb2c("q(oB", 389) + "Da", _0x2997f4[_0x43cb2c("qZz4", -446)], "AhjLC2HVBgq", _0x43cb2c("h0ri", 441) + _0x43cb2c("8OI@", -127) + "vW", _0x2997f4[_0x43cb2c("KgIb", 288)], _0x2997f4.stCpN, "iowLLU" + _0x43cb2c("h0ri", 2403) + _0x43cb2c("ZyH)", 1714) + _0x43cb2c("qZz4", 2242) + _0x43cb2c("#f!g", 929) + _0x43cb2c("Bugr", 2233) + "Qa", _0x2997f4[_0x43cb2c("xb56", 535)], _0x2997f4[_0x43cb2c("lMAw", 985)], _0x2997f4[_0x43cb2c("$]wl", 814)], "y21oB1" + _0x43cb2c("#f!g", 509) + "mG", _0x2997f4[_0x43cb2c("2PQv", 2372)], _0x2997f4.BzcOj, _0x2997f4[_0x43cb2c("lMAw", 2136)], _0x43cb2c("t&mx", 627) + "bL", "iow9K+wjJEMhKEw4GE" + _0x43cb2c("z$^9", 1555) + "VIa", "qwv2qK0", _0x2997f4.KLDSC, _0x2997f4.Pidln, "B2jPBg" + _0x43cb2c("g1XK", 773) + "mq", _0x2997f4[_0x43cb2c("^R3S", 132)], _0x2997f4[_0x43cb2c("&t&m", 1637)], _0x43cb2c("FweH", 1685) + "m", _0x2997f4[_0x43cb2c("FweH", 2389)], "4PQG77" + _0x43cb2c("FbMW", 3), "ttrmq0" + _0x43cb2c("X#K!", 798) + "uq", "z2v0", _0x43cb2c("h0ri", 850) + _0x43cb2c("0qEw", 1118) + "za", _0x43cb2c("$r&&", 268) + "9jrf9q" + "sa", _0x43cb2c("yuIP", 1818) + _0x43cb2c("$]wl", 659) + "xW", _0x43cb2c("A$(g", 1237) + "nFEgzH" + "Ba", _0x2997f4[_0x43cb2c("5ZNg", 924)], _0x2997f4.EHcqm, _0x43cb2c("yuIP", 501) + _0x43cb2c("#uGO", 470) + "zq", "C2LN", _0x2997f4[_0x43cb2c("2PQv", -430)], "zw5Jrg" + _0x43cb2c("r#&P", 750), "r2nxuu0", _0x2997f4.mhNav, "tun3Av" + _0x43cb2c("Caa8", 1163) + "BG", _0x43cb2c("ZVXe", 1861) + "a", "vgPkzuy", _0x2997f4[_0x43cb2c("wsz*", 1421)], _0x43cb2c("0qEw", 768) + _0x43cb2c("xkwi", 1633) + "rq", "re9ZwhG", _0x2997f4[_0x43cb2c("2PQv", 2156)], _0x2997f4.cPiOt, _0x43cb2c("A$(g", -175) + _0x43cb2c("qZz4", 357) + _0x43cb2c("$r&&", 421) + _0x43cb2c("%Dq0", 1297) + "UdOG", "DgTXCKe", _0x2997f4.JPUoU, _0x2997f4.JdbFt, _0x2997f4.eJIZC, _0x2997f4[_0x43cb2c("hM!U", 651)], _0x2997f4[_0x43cb2c("xkwi", 717)], _0x2997f4.hfbTW, _0x2997f4[_0x43cb2c("0qEw", 222)], _0x43cb2c("8OI@", -102) + "O", _0x2997f4[_0x43cb2c("#uGO", 1462)], _0x2997f4[_0x43cb2c("#f!g", 516)], _0x43cb2c("i]Oi", 2368) + _0x43cb2c("lMAw", 1646) + "Bq", _0x2997f4[_0x43cb2c("FweH", 1251)], _0x43cb2c("d420", 204) + _0x43cb2c("yuIP", 1790) + "tq", "C3DPDg" + _0x43cb2c("KgIb", 1972), _0x2997f4[_0x43cb2c("FweH", 1566)], _0x43cb2c("3ipA", -244) + _0x43cb2c("Caa8", 2072) + "AG", _0x2997f4.cmrwY, _0x2997f4.bvmQE, "Bg9N", "tuWSigXPA2uGrW", _0x2997f4.fFMSC, _0x43cb2c("h0ri", -486) + _0x43cb2c("0qEw", 1560) + "lG", _0x43cb2c("PvqJ", 711) + _0x43cb2c("A$(g", 2154) + "wq", _0x43cb2c("2PQv", 1059) + "DPy0Dw" + "Dq", _0x2997f4.kJiVt, _0x2997f4.IvQxt, _0x2997f4[_0x43cb2c("lMAw", -2)], "sw5oCg" + _0x43cb2c("3ipA", -511) + "vG", _0x2997f4.nqzoM, _0x2997f4[_0x43cb2c("d420", 1020)], _0x43cb2c("KgIb", 53) + "XLvgfZ" + "AW", _0x43cb2c("Caa8", 697) + "0", _0x2997f4[_0x43cb2c("yuIP", 960)], _0x2997f4.bhDoq, _0x2997f4[_0x43cb2c("OjOj", 522)], "wvHkAgjytwLpAq", _0x2997f4[_0x43cb2c("3ipA", -389)], _0x2997f4.cIvAO, _0x2997f4.BTxxO, _0x43cb2c("G![J", 2364) + "9T", _0x2997f4[_0x43cb2c("xb56", 932)], "x19ou3" + _0x43cb2c("8OI@", -116) + "CW", _0x43cb2c("aiqQ", 2416) + _0x43cb2c("KgIb", -258) + "rq", "otyZot" + _0x43cb2c("8OI@", -260) + _0x43cb2c("&t&m", 1295), _0x2997f4.yvNuz, _0x2997f4.jDxmN, _0x2997f4.YpVDC, _0x43cb2c("Iw8c", -166) + _0x43cb2c("^R3S", 503), _0x43cb2c("Z@bN", 2129) + "4SEMGT" + "sa", _0x2997f4.JTyEQ, "vezwAeC", _0x43cb2c("3ipA", 748) + "ncEvbY" + "Aq", _0x2997f4[_0x43cb2c("t&mx", 1538)], _0x2997f4.pYlbV, _0x2997f4.CNiFk, _0x2997f4[_0x43cb2c("yuIP", 1567)], _0x2997f4.RISCe, _0x2997f4[_0x43cb2c("Kd26", -515)], _0x2997f4[_0x43cb2c("h0ri", 2201)], _0x43cb2c("$]wl", -62) + "G", _0x43cb2c("qZz4", 1612) + "5NBgvu" + "yq", _0x43cb2c("PvqJ", -361) + "C", "5PEG5Ash5RoO", _0x43cb2c("l[QS", 1224), _0x2997f4[_0x43cb2c("Z@bN", 2014)], _0x43cb2c("FweH", 849) + _0x43cb2c("Kd26", 1755), _0x2997f4[_0x43cb2c("68zl", -366)], _0x2997f4.dKfLU, _0x2997f4[_0x43cb2c("2PQv", 1045)], _0x43cb2c("FweH", 1981) + "5RDwfP" + "CW", _0x2997f4.WhvoT, _0x43cb2c("&t&m", 1001), "tufyx0npvu5u", "vxnjBv" + _0x43cb2c("q(oB", -305) + "tG", _0x2997f4[_0x43cb2c("xb56", -291)], _0x2997f4.YFzwL, "BeDcy00", "AgHIBtvSyKnjnG", _0x43cb2c("cV6N", 2292) + _0x43cb2c("qZz4", 920) + _0x43cb2c("d420", 874), _0x2997f4[_0x43cb2c("qZz4", 2366)], _0x2997f4.GOTAI, "DMfSDwvZ", _0x2997f4.oyIbb, "iow3SU" + _0x43cb2c("A$(g", 1007) + "IUMzKo" + "+8Jowi" + _0x43cb2c("AeJl", 1889) + "wiSos4" + "IW", _0x2997f4[_0x43cb2c("Kd26", -39)], "5OIw6igu57o7" + _0x43cb2c("Iw8c", 2361) + _0x43cb2c("aiqQ", 1984) + "J5BMJO" + "JMNym", _0x2997f4[_0x43cb2c("$r&&", 2369)], _0x43cb2c("&t&m", 2122) + _0x43cb2c("xb56", -190) + "rq", _0x2997f4.bNxBt, _0x2997f4.McbOO, _0x2997f4[_0x43cb2c("AeJl", 1311)], _0x43cb2c("d420", 620) + _0x43cb2c("G![J", 1642), _0x2997f4.lxSlY, _0x2997f4[_0x43cb2c("hM!U", 862)], _0x43cb2c("l[QS", 1178), _0x2997f4[_0x43cb2c("xkwi", 272)], _0x2997f4.LPeDA, _0x2997f4.oOrrx, _0x43cb2c("Z@bN", 145) + _0x43cb2c("%Dq0", 590), "77Ym5y" + _0x43cb2c("^s2q", 644) + _0x43cb2c("lMAw", 1458) + "QH", _0x2997f4[_0x43cb2c("h0ri", 1211)], _0x2997f4.Fruqd, "C3rHCNruAw1L", _0x2997f4[_0x43cb2c("aiqQ", 2177)], _0x2997f4[_0x43cb2c("G![J", -466)], _0x43cb2c("^R3S", 1795) + "q9", _0x2997f4.IOCeT, _0x43cb2c("PvqJ", 911) + "fTzq", _0x2997f4[_0x43cb2c("KgIb", 1129)], _0x43cb2c("$r&&", -71) + "9U", _0x43cb2c("#f!g", 243) + _0x43cb2c("FweH", 1493) + "qW", _0x2997f4[_0x43cb2c("xb56", 1687)], _0x2997f4[_0x43cb2c("ZyH)", 2238)], _0x2997f4[_0x43cb2c("d420", 2030)], "qu5euK9jrf8", _0x43cb2c("FbMW", -246) + _0x43cb2c("A$(g", -293), _0x2997f4[_0x43cb2c("2PQv", 172)], _0x43cb2c("hM!U", 486), "zMfPBgvK", _0x2997f4[_0x43cb2c("rEA3", 6)], "wgjMwNa", _0x2997f4.ZHSDl, _0x43cb2c("ZyH)", 1751) + _0x43cb2c("OjOj", 1562) + _0x43cb2c("d420", 1916) + _0x43cb2c("B)gy", 622) + "H+s9JU" + _0x43cb2c("xkwi", 1232) + "QG", _0x43cb2c("#uGO", 1473) + "81mZCU" + "mW", _0x43cb2c("5ZNg", 2264) + "m", "q2zmuNy", _0x43cb2c("FbMW", 2117) + "q", _0x2997f4.wLTZU, _0x43cb2c("A$(g", -412) + "G", _0x43cb2c("ZyH)", 931) + "vZ", "5PYQ55" + _0x43cb2c("g1XK", 1389) + _0x43cb2c("i]Oi", 771), "rvbczgW", _0x2997f4.hFjLi, "zNjVBq", _0x2997f4[_0x43cb2c("2PQv", 232)], _0x2997f4[_0x43cb2c("&t&m", 2335)], _0x43cb2c("Z@bN", 2308) + "rjqvrf" + "xW", _0x2997f4[_0x43cb2c("#f!g", 1924)], _0x2997f4[_0x43cb2c("%Dq0", 225)], _0x2997f4.opoQI, _0x43cb2c("g1XK", 437) + _0x43cb2c("68zl", 1380) + "IoADG+" + _0x43cb2c("^R3S", 1273) + _0x43cb2c("Kd26", -19) + "wiSos4" + "IG", _0x2997f4[_0x43cb2c("^R3S", 998)], _0x43cb2c("i]Oi", 17) + "rguJvJ" + "rW", _0x43cb2c("aiqQ", 608) + "K", _0x2997f4.xkNTg, _0x43cb2c("2PQv", 2395), _0x2997f4.DpBUi, "zw5KvgLTzq", _0x43cb2c("t&mx", 1480) + _0x43cb2c("FbMW", 1958), _0x2997f4[_0x43cb2c("rEA3", 1106)], "ywXSvgfZA3niyq", _0x2997f4[_0x43cb2c("#f!g", 228)], _0x2997f4[_0x43cb2c("68zl", -454)], _0x43cb2c("h0ri", 1772) + "a", _0x2997f4[_0x43cb2c("ZVXe", 1048)], _0x43cb2c("&t&m", 294) + "m", _0x43cb2c("wsz*", 961) + _0x43cb2c("%Dq0", 1530) + "5yIW5l" + "Il5lIa" + _0x43cb2c("$r&&", 30) + "U75yQH", _0x43cb2c("AeJl", 287), "Cgf0Aa", _0x2997f4[_0x43cb2c("xkwi", 83)], "DgfZA3" + _0x43cb2c("Iw8c", 415) + "zq", _0x2997f4.SXCSc, _0x43cb2c("A$(g", 1115) + "e", _0x2997f4[_0x43cb2c("PvqJ", 1742)], _0x43cb2c("xkwi", 684) + "qZnNrX" + _0x43cb2c("h0ri", 1132), "D09juNy", _0x43cb2c("OjOj", 2222) + "O", _0x43cb2c("lMAw", 2124) + "8", "mJyYnJ" + _0x43cb2c("&t&m", -517) + "vMfuuq", "z2v0qwrjBMzV", _0x43cb2c("hM!U", 420) + _0x43cb2c("B)gy", 1322) + "va", "swDsBNe", _0x2997f4.aFOJv, "zuu1r09xCgLsEG", _0x2997f4[_0x43cb2c("lMAw", 949)], _0x43cb2c("$]wl", 1986) + "UN57UT" + _0x43cb2c("Iw8c", 1802) + _0x43cb2c("2PQv", -108), "Aw5JBhvKzxm", "C3rYAw" + _0x43cb2c("FbMW", 1500), _0x2997f4[_0x43cb2c("q(oB", 1011)], _0x2997f4[_0x43cb2c("#f!g", 880)], "tuvpvvq", _0x43cb2c("Z@bN", 2158) + "e", _0x43cb2c("FweH", 813) + _0x43cb2c("Z@bN", 301) + "mG", _0x2997f4[_0x43cb2c("^R3S", 1878)], "iokuGokuGa", _0x43cb2c("d420", 122) + _0x43cb2c("yuIP", 1857) + _0x43cb2c("AeJl", 1601) + _0x43cb2c("ZVXe", 837) + "Lq", _0x43cb2c("Iw8c", 1760) + "u", _0x2997f4[_0x43cb2c("yuIP", 1069)], _0x2997f4[_0x43cb2c("ZyH)", 2166)], "6k+v55" + _0x43cb2c("Bugr", 1284) + _0x43cb2c("A$(g", 2404) + "Yp", _0x2997f4[_0x43cb2c("xb56", 2077)], "DwrKvxG", _0x43cb2c("PvqJ", 747) + "G", _0x2997f4.QSyKc, _0x2997f4[_0x43cb2c("Kd26", 463)], _0x2997f4[_0x43cb2c("yuIP", 211)], _0x43cb2c("&t&m", 1094) + "K", _0x2997f4.GWxYN, "8j+sSca", _0x2997f4.oDCMG, _0x2997f4[_0x43cb2c("OjOj", 1977)], _0x2997f4[_0x43cb2c("xkwi", -279)], _0x2997f4.pcaZx, _0x2997f4[_0x43cb2c("r#&P", 146)], _0x2997f4.OoPQm, _0x2997f4[_0x43cb2c("Z@bN", 511)], _0x43cb2c("G![J", 1126) + _0x43cb2c("5ZNg", 1108) + "BW", _0x2997f4.KKHHX, _0x2997f4[_0x43cb2c("h0ri", 490)], _0x2997f4.VAnjz, _0x2997f4[_0x43cb2c("68zl", -464)], _0x43cb2c("q(oB", 723) + _0x43cb2c("G![J", 1043), _0x43cb2c("68zl", -254) + _0x43cb2c("AeJl", 991), _0x2997f4[_0x43cb2c("t&mx", 1671)], _0x43cb2c("lMAw", 1626) + "q", _0x2997f4.nCSmD, _0x43cb2c("$r&&", 1323) + _0x43cb2c("^R3S", 1334) + _0x43cb2c("$r&&", 440) + _0x43cb2c("lMAw", 2188) + "PE+8Jo" + "wbNoAT" + "OG", _0x43cb2c("AeJl", 1407) + "a", _0x43cb2c("z$^9", 1872) + _0x43cb2c("Bugr", -263) + "qq", _0x2997f4.AytxD, _0x2997f4[_0x43cb2c("g1XK", 1080)], _0x2997f4[_0x43cb2c("2PQv", 2323)], _0x2997f4[_0x43cb2c("PvqJ", 1539)], "yJfkBg" + _0x43cb2c("t&mx", 347) + "qW", _0x43cb2c("Bugr", 292) + "nOB3uU" + "yq", _0x2997f4.XVtNA, _0x43cb2c("8OI@", 1895) + "LpCgvY" + "yq", _0x2997f4[_0x43cb2c("g1XK", 2062)], _0x2997f4.SwzoH, _0x2997f4[_0x43cb2c("Caa8", 596)], _0x2997f4[_0x43cb2c("Iw8c", 2231)]];
    a = function () {
      return _0x2b5f3f;
    };
    return a();
  }
  (function (_0x24d5ac, _0x3686a2) {
    const _0xeec0e7 = {
        "xcYpa": _0xe9997("KgIb", 996),
        "YdOYj": function (_0x564ebc, _0x3f9775) {
          return _0x564ebc + _0x3f9775;
        },
        "eMvcw": function (_0x2b7db2, _0x2278b2) {
          return _0x2b7db2(_0x2278b2);
        },
        "PcdAH": function (_0x2e5a75, _0x1ad3bb) {
          return _0x2e5a75 + _0x1ad3bb;
        },
        "zkgun": function (_0x855f40, _0x3efcd1) {
          return _0x855f40 / _0x3efcd1;
        },
        "bqBJq": function (_0x2f3913, _0x1f67df) {
          return _0x2f3913(_0x1f67df);
        },
        "NkiPL": function (_0x307151, _0x52829f) {
          return _0x307151 / _0x52829f;
        },
        "tNuDH": function (_0x548fd1, _0x22caeb) {
          return _0x548fd1(_0x22caeb);
        },
        "DFZwN": function (_0x490dc9, _0x4683e4) {
          return _0x490dc9 * _0x4683e4;
        },
        "oIvqX": function (_0x40c9aa, _0x5bcd46) {
          return _0x40c9aa(_0x5bcd46);
        },
        "cbGMy": function (_0x121b53, _0x5ed302) {
          return _0x121b53(_0x5ed302);
        },
        "nxkqL": function (_0x98c303, _0x3fdddf) {
          return _0x98c303 / _0x3fdddf;
        },
        "DXOrk": function (_0x18e4be, _0x26f190) {
          return _0x18e4be(_0x26f190);
        },
        "iFXCd": function (_0x6b993, _0x4225d7) {
          return _0x6b993 * _0x4225d7;
        },
        "jKSqf": "shift",
        "KhAJj": function (_0x2147ef, _0x3544bc) {
          return _0x2147ef !== _0x3544bc;
        },
        "CnQrj": "gjDEp",
        "JOTdK": "MUQws",
        "EnSoO": _0xe9997("FweH", 677)
      },
      _0x2604e5 = b,
      _0x186704 = _0x24d5ac();
    function _0xe9997(_0xe32a3c, _0x4956db) {
      return _0x39e9(_0x4956db - -668, _0xe32a3c);
    }
    while (true) {
      try {
        const _0x16e537 = _0xeec0e7[_0xe9997("0qEw", 2184)](_0xeec0e7[_0xe9997("G![J", 1075)](_0xeec0e7.YdOYj(_0xeec0e7[_0xe9997("lMAw", -34)](_0xeec0e7[_0xe9997("5ZNg", 1864)](-parseInt(_0x2604e5(509)), 1) + _0xeec0e7[_0xe9997("Bugr", 2303)](-_0xeec0e7.bqBJq(parseInt, _0x2604e5(735)), 2) + _0xeec0e7[_0xe9997("8OI@", 681)](parseInt(_0x2604e5(610)), 3), -_0xeec0e7[_0xe9997("AeJl", 2380)](parseInt, _0xeec0e7[_0xe9997("Bugr", 2088)](_0x2604e5, 647)) / 4), _0xeec0e7[_0xe9997("KgIb", 266)](_0xeec0e7[_0xe9997("8OI@", 681)](-_0xeec0e7[_0xe9997("h0ri", 2306)](parseInt, _0xeec0e7.cbGMy(_0x2604e5, 526)), 5), _0xeec0e7[_0xe9997("yuIP", 1662)](-_0xeec0e7[_0xe9997("FbMW", 616)](parseInt, _0xeec0e7.cbGMy(_0x2604e5, 790)), 6))), _0xeec0e7.iFXCd(-_0xeec0e7.eMvcw(parseInt, _0x2604e5(651)) / 7, -parseInt(_0xeec0e7[_0xe9997("5ZNg", 2502)](_0x2604e5, 430)) / 8)), _0xeec0e7.NkiPL(parseInt(_0x2604e5(838)), 9));
        if (_0x16e537 === _0x3686a2) break;else _0x186704.push(_0x186704[_0xeec0e7[_0xe9997("wsz*", 1721)]]());
      } catch (_0x442ec9) {
        if (_0xeec0e7[_0xe9997("3ipA", 1779)](_0xeec0e7[_0xe9997("&t&m", 523)], _0xeec0e7[_0xe9997("^s2q", 431)])) _0x186704[_0xeec0e7[_0xe9997("Kd26", 2523)]](_0x186704[_0xe9997("OjOj", 2586)]());else {
          const _0x4bb3e8 = _0x34c850;
          _0xeec0e7[_0xe9997("cV6N", -62)] !== _0x42b530[_0xe9997("&t&m", 1484)] ? _0x2f37a2 = _0x505ff5 : this[_0xeec0e7.YdOYj(_0xeec0e7[_0xe9997("cV6N", 1858)](_0x4bb3e8, 730), "s")][_0x2029ce] && (this[_0x4bb3e8(829)][_0x4b1665] = {
            "success": 0,
            "failed": 0,
            "totalReward": 0
          });
        }
      }
    }
  })(a, 348012);
  const SIGN_API_URL = K(863) + (_0x1c8f12("8OI@", 538) + _0x1c8f12("^R3S", 2649)) + K(646),
    TIMESTAMP_API_URL = "http:/" + _0x1c8f12("KgIb", 686) + K(389) + K(841) + (_0x1c8f12("Iw8c", 1849) + _0x1c8f12("cV6N", 1946)) + _0x1c8f12("&t&m", 2833),
    DEFAULT_TASKS = process[K(704)][K(701) + "SKS"] ? process[K(704)][_0x1c8f12("Bugr", 699) + "T_TA" + "SKS"].split(",")[K(492)](_0x27b65f => _0x27b65f[K(854)]()) : [K(376), K(539), "look", _0x1c8f12("h0ri", 809)],
    KS_EXECUTION_TIMES = process.env[K(743) + (_0x1c8f12("^s2q", 393) + "ES")] ? parseInt(process.env[K(743) + "ON_TIMES"]) : 30,
    REWARD_WAIT_MIN = process[K(704)][K(687) + _0x1c8f12("qZz4", 1306)] ? parseInt(process[K(704)][_0x1c8f12("KgIb", 2728) + "_WAI" + _0x1c8f12("rEA3", 2214)]) : 3000,
    REWARD_WAIT_MAX = process[_0x1c8f12("t&mx", 1108)][_0x1c8f12("r#&P", 2334) + _0x1c8f12("d420", 1738) + K(457)] ? parseInt(process[_0x1c8f12("cV6N", 588)][K(687) + K(457)]) : 5000,
    REST_INTERVAL = process[K(704)][K(537) + "VAL"] ? parseInt(process.env[K(537) + K(395)]) : 10,
    REST_TIME_MIN = process[K(704)][K(463) + _0x1c8f12("Bugr", 2248)] ? parseInt(process.env["REST_T" + _0x1c8f12("68zl", 2506) + K(558)]) : 60000,
    REST_TIME_MAX = process[_0x1c8f12("%Dq0", 1874)]["REST_TIME_" + K(433)] ? parseInt(process[K(704)]["REST_T" + _0x1c8f12("q(oB", 2088) + _0x1c8f12("wsz*", 2729)]) : 120000,
    KSCOIN_LIMIT = process.env["KSCOIN" + _0x1c8f12("OjOj", 974) + "IT"] ? parseInt(process[_0x1c8f12("OjOj", 684)][K(480) + "IT"]) : 50000,
    IMMEDIATE_STOP_THRESHOLD = process[_0x1c8f12("Kd26", 1987)][K(619) + (_0x1c8f12("8OI@", 1104) + "HRES") + _0x1c8f12("ZyH)", 2864)] ? parseInt(process.env[_0x1c8f12("$]wl", 1694) + _0x1c8f12("PvqJ", 2169) + (_0x1c8f12("$r&&", 834) + "HRES") + "HOLD"]) : 0,
    LOW_REWARD_THRESHOLD = process[_0x1c8f12("2PQv", 1613)][K(479) + (_0x1c8f12("B)gy", 2651) + _0x1c8f12("Z@bN", 2146))] ? parseInt(process[K(704)][_0x1c8f12("0qEw", 2837) + "WARD" + ("_THRES" + _0x1c8f12("ZyH)", 2864))]) : 10,
    LOW_REWARD_LIMIT = process[_0x1c8f12("g1XK", 1390)][_0x1c8f12("^R3S", 2834) + _0x1c8f12("$]wl", 2627) + K(778)] ? parseInt(process[K(704)]["LOW_REWARD" + K(778)]) : 1,
    REQUEST_TIMEOUT = process.env[_0x1c8f12("cV6N", 3107) + "T_TI" + K(663)] ? parseInt(process[_0x1c8f12("#f!g", 2120)][_0x1c8f12("l[QS", 2881) + "T_TI" + K(663)]) : 30000,
    MAX_CONCURRENCY = process[K(704)]["MAX_CO" + _0x1c8f12("t&mx", 2262) + _0x1c8f12("B)gy", 2512)] ? parseInt(process[_0x1c8f12("OjOj", 684)][K(417) + _0x1c8f12("#f!g", 1177)]) : 888,
    UPDATE_CHECK_URL = K(863) + K(752) + K(379) + "n",
    UPDATE_SCRIPT_URL = K(863) + (_0x1c8f12("68zl", 2546) + _0x1c8f12("5ZNg", 982)) + K(489),
    CURRENT_VERSION = 2,
    AD_APPEND_ENABLED = process[K(704)][K(696) + K(631)] !== "0",
    SEARCH_AD_ENABLED = process[K(704)][K(374) + (_0x1c8f12("A$(g", 3082) + "D")] !== "0",
    SEARCH_AD_APPEND_ENABLED = process[_0x1c8f12("aiqQ", 606)][_0x1c8f12("qZz4", 1517) + "_AD_" + K(432) + K(857)] !== "0",
    AD_APPEND_MAX_COUNT = process[K(704)][K(696) + (_0x1c8f12("#uGO", 3075) + _0x1c8f12("z$^9", 2669))] ? parseInt(process.env["AD_APP" + _0x1c8f12("wsz*", 2280) + K(555)]) : 10,
    AD_APPEND_REST_INTERVAL = process[_0x1c8f12("cV6N", 588)]["AD_APP" + _0x1c8f12("rEA3", 2921) + ("REST_I" + _0x1c8f12("#f!g", 1126)) + K(395)] ? parseInt(process[K(704)][K(696) + (_0x1c8f12("l[QS", 2451) + _0x1c8f12("3ipA", 2264)) + K(395)]) : 2,
    AD_APPEND_REST_MIN = process[_0x1c8f12("%Dq0", 1874)][_0x1c8f12("FweH", 1890) + "END_" + "REST_MIN"] ? parseInt(process.env[K(696) + "REST_MIN"]) : 10000,
    AD_APPEND_REST_MAX = process[K(704)]["AD_APP" + _0x1c8f12("OjOj", 1366) + (_0x1c8f12("yuIP", 1248) + "AX")] ? parseInt(process.env[_0x1c8f12("Caa8", 792) + _0x1c8f12("3ipA", 497) + (_0x1c8f12("wsz*", 2023) + "AX")]) : 20000,
    SEARCH_AD_COUNT = process[K(704)][K(374) + "COUNT"] ? parseInt(process[K(704)][_0x1c8f12("^s2q", 928) + "_AD_" + K(541)]) : 10,
    SEARCH_KEYWORD = process[K(704)][K(390) + K(465)] || "短剧小说",
    WATCH_TIME_MIN = process[K(704)].WATCH_TIME_MIN ? parseInt(process.env[K(570) + K(400)]) : 30,
    WATCH_TIME_MAX = process[_0x1c8f12("#f!g", 2120)][_0x1c8f12("r#&P", 2022) + _0x1c8f12("xkwi", 521) + K(839)] ? parseInt(process[K(704)][K(570) + "_MAX"]) : 35,
    crypto = require(K(520)),
    fs = require("fs"),
    path = require(K(641));
  async function checkAndUpdate() {
    const _0xc59cee = {
        "KGRxe": function (_0x2d421e, _0x336c79) {
          return _0x2d421e + _0x336c79;
        },
        "kSJtd": function (_0x1640f2, _0x195a22) {
          return _0x1640f2 + _0x195a22;
        },
        "LdaJS": function (_0x5bd8a1, _0x1d8d3d) {
          return _0x5bd8a1 + _0x1d8d3d;
        },
        "EtfiX": function (_0x3f1b4a, _0x30a83b) {
          return _0x3f1b4a(_0x30a83b);
        },
        "lvSqL": function (_0xc6ebf7, _0x4b0be9) {
          return _0xc6ebf7 + _0x4b0be9;
        },
        "EhwdV": function (_0x22176f, _0x6624e7) {
          return _0x22176f + _0x6624e7;
        },
        "xhZtj": function (_0x57c537, _0x1d2955) {
          return _0x57c537 + _0x1d2955;
        },
        "LCUlx": function (_0x3de0a4, _0x3613da) {
          return _0x3de0a4 + _0x3613da;
        },
        "TxYtt": function (_0x898120, _0x2cd543) {
          return _0x898120(_0x2cd543);
        },
        "AjJoh": function (_0x3ac868, _0x5bf61f) {
          return _0x3ac868(_0x5bf61f);
        },
        "ljyXt": _0xa71448(3149, "68zl") + "/605",
        "yfOWe": "ecko) " + _0xa71448(3710, "g1XK"),
        "zJWIt": _0xa71448(1452, "OjOj") + _0xa71448(3481, "8OI@"),
        "LWHJR": _0xa71448(1795, "FweH"),
        "TyXCc": _0xa71448(2827, "r#&P"),
        "lZoEf": function (_0x425342, _0x3d09ba) {
          return _0x425342(_0x3d09ba);
        },
        "LlcRT": "get",
        "RGZsy": function (_0x5f5693, _0x2e87a5) {
          return _0x5f5693(_0x2e87a5);
        },
        "lVrTr": _0xa71448(2785, "ZVXe"),
        "WcsDO": "🔄 发现新版" + _0xa71448(1025, "0qEw"),
        "QDIwC": _0xa71448(1597, "68zl") + ".",
        "fCljd": _0xa71448(2966, "wsz*"),
        "qqTza": "data",
        "ZjVKa": _0xa71448(2136, "h0ri"),
        "XRSKu": "copyFileSy",
        "ecrPi": function (_0x85b1b1, _0x25bb39) {
          return _0x85b1b1 + _0x25bb39;
        },
        "Rsqfs": "✅ 脚本更新" + _0xa71448(3532, "Z@bN"),
        "cyRKu": "resolve",
        "iZWHZ": function (_0x5e574a, _0x2eae4b) {
          return _0x5e574a + _0x2eae4b;
        },
        "ZQUBI": "❌ 更新验证失败，恢",
        "xqdCv": function (_0xe8c658, _0x182070) {
          return _0xe8c658(_0x182070);
        },
        "SnSbp": function (_0xd57976, _0x2275a8) {
          return _0xd57976(_0x2275a8);
        },
        "Oroga": _0xa71448(2415, "PvqJ") + "完成!",
        "txeTo": "hZyyH",
        "pUdlM": function (_0x51839b, _0x1178cd) {
          return _0x51839b + _0x1178cd;
        },
        "cAsFD": _0xa71448(3751, "g1XK"),
        "PCODB": _0xa71448(3484, "FbMW"),
        "hNbJl": function (_0x12362f, _0x360e05) {
          return _0x12362f + _0x360e05;
        },
        "NYFEy": _0xa71448(1272, "PvqJ") + _0xa71448(1427, "ZVXe"),
        "YtOnM": _0xa71448(2249, "^s2q"),
        "FSoiW": function (_0x26c37d, _0xa0a108) {
          return _0x26c37d !== _0xa0a108;
        },
        "Ghrvl": _0xa71448(2915, "KgIb"),
        "ARdAA": function (_0x58fd6d, _0x395155) {
          return _0x58fd6d + _0x395155;
        },
        "GgsiS": _0xa71448(1259, "r#&P") + "失败: ",
        "GQwok": function (_0x30ab95, _0x2581e2) {
          return _0x30ab95(_0x2581e2);
        },
        "OpXUu": "Displa" + _0xa71448(1213, "r#&P")
      },
      _0x59f8fe = K,
      _0x2b11b3 = {
        "KGriH": "🏁 ",
        "KTwPE": function (_0x446d39, _0x422ec2) {
          function _0x1fc4cc(_0x15420f, _0x333e03) {
            return _0xa71448(_0x333e03 - -641, _0x15420f);
          }
          return _0xc59cee[_0x1fc4cc("68zl", 2984)](_0x446d39, _0x422ec2);
        },
        "XbfZp": _0xc59cee[_0xa71448(2294, "2PQv")](_0x59f8fe, 343),
        "PKxAO": _0xc59cee[_0xa71448(3441, "hM!U")](_0xc59cee.kSJtd(_0xc59cee[_0xa71448(1034, "aiqQ")](_0xc59cee[_0xa71448(3859, "A$(g")](_0xc59cee.kSJtd(_0xc59cee.kSJtd(_0xc59cee[_0xa71448(2384, "ZVXe")](_0xc59cee[_0xa71448(2900, "2PQv")](_0xa71448(1014, "$]wl") + _0xa71448(3252, "cV6N"), _0xc59cee[_0xa71448(3865, "i]Oi")](_0x59f8fe, 362)), _0xc59cee.TxYtt(_0x59f8fe, 711)), "e OS 16_6 "), "like M" + _0xa71448(3540, "^s2q")), _0xc59cee[_0xa71448(3791, "$]wl")](_0x59f8fe, 397)) + _0xc59cee.ljyXt + _0xc59cee[_0xa71448(1158, "Bugr")](_0x59f8fe, 653) + _0xc59cee.EtfiX(_0x59f8fe, 502), _0xc59cee.yfOWe) + _0x59f8fe(747), _0x59f8fe(721)) + _0x59f8fe(864), "05.1.15"),
        "IbZIn": _0xc59cee.LdaJS("❌ 无法解析服务器版", _0xa71448(2914, "cV6N") + _0xa71448(3825, "lMAw")),
        "PyGlX": "log",
        "KBCOs": _0xc59cee[_0xa71448(2294, "2PQv")](_0x59f8fe, 717),
        "RDDlM": _0x59f8fe(536),
        "nXATC": _0xc59cee.TxYtt(_0x59f8fe, 435),
        "IvQOx": _0xc59cee.LCUlx(_0xc59cee.zJWIt, _0x59f8fe(837)),
        "UElnu": _0xa71448(1294, "X#K!") + "leSy" + "nc",
        "hZyyH": function (_0x5e64d1, _0xee2d7b) {
          return _0xc59cee.kSJtd(_0x5e64d1, _0xee2d7b);
        },
        "ZHerv": _0xc59cee[_0xa71448(3427, "%Dq0")]
      };
    function _0xa71448(_0x22efbf, _0x5243f1) {
      return _0x1c8f12(_0x5243f1, _0x22efbf - 711);
    }
    try {
      if ("eHmrY" === _0xa71448(2869, "Bugr")) {
        console[_0xc59cee[_0xa71448(2506, "PvqJ")]](_0x59f8fe(637) + _0xa71448(1920, "hM!U"));
        console[_0xc59cee[_0xa71448(2045, "2PQv")](_0x59f8fe, 501)](_0x2b11b3[_0x59f8fe(777)](_0x2b11b3[_0x59f8fe(603)], CURRENT_VERSION));
        const _0x55d156 = await axios[_0xc59cee[_0xa71448(3346, "0qEw")]](UPDATE_CHECK_URL, {
            "timeout": 10000,
            "headers": {
              "User-Agent": _0x2b11b3[_0xc59cee.AjJoh(_0x59f8fe, 333)]
            }
          }),
          _0x2f0969 = _0xc59cee[_0xa71448(2716, "&t&m")](parseInt, _0x55d156[_0xa71448(2574, "%Dq0")]);
        if (isNaN(_0x2f0969)) return console[_0x59f8fe(501)](_0x2b11b3[_0x59f8fe(755)]), false;
        console[_0x2b11b3[_0xc59cee[_0xa71448(3474, "2PQv")]]](_0xc59cee.xhZtj(_0x2b11b3[_0x59f8fe(791)], _0x2f0969));
        if (_0x2f0969 <= CURRENT_VERSION) return console[_0xc59cee[_0xa71448(1677, "FbMW")]]("✅ 当前已是" + _0xa71448(1187, "Kd26") + "！"), false;
        console[_0xc59cee[_0xa71448(3211, "ZyH)")]](_0xc59cee[_0xa71448(1538, "d420")](_0xc59cee.WcsDO, _0xc59cee[_0xa71448(1647, "68zl")]));
        const _0x162504 = await axios[_0xa71448(1473, "G![J")](UPDATE_SCRIPT_URL, {
          "timeout": 30000,
          "responseType": _0x2b11b3[_0x59f8fe(415)],
          "headers": {
            "User-Agent": _0x2b11b3[_0xc59cee.fCljd]
          }
        });
        if (!_0x162504[_0xc59cee.qqTza]) return console[_0x59f8fe(501)](_0x59f8fe(856) + _0xc59cee[_0xa71448(1271, "rEA3")](_0x59f8fe, 738)), false;
        const _0x30c736 = __filename,
          _0x151645 = path[_0x59f8fe(590)](_0x30c736),
          _0x5c9c15 = path[_0x2b11b3[_0xa71448(1191, "X#K!")]](_0x30c736),
          _0x499d02 = path[_0xc59cee.ZjVKa](_0x151645, _0x5c9c15 + _0xc59cee[_0xa71448(1013, "KgIb")](_0x59f8fe, 346));
        fs[_0xc59cee.KGRxe(_0xc59cee[_0xa71448(1200, "B)gy")], "nc")](_0x30c736, _0x499d02);
        console[_0xa71448(2623, "z$^9")](_0xc59cee[_0xa71448(1129, "xkwi")](_0xa71448(3021, "OjOj") + _0xa71448(2563, "Bugr"), _0x499d02));
        fs[_0x2b11b3[_0x59f8fe(834)]](_0x30c736, _0x162504[_0x59f8fe(684)], _0xa71448(2661, "r#&P"));
        console[_0x59f8fe(501)](_0xc59cee[_0xa71448(2222, "X#K!")] + _0x30c736);
        try {
          delete require[_0x59f8fe(850)][require[_0xc59cee[_0xa71448(2111, "0qEw")]](_0x30c736)];
          console[_0x59f8fe(501)](_0xc59cee[_0xa71448(1248, "68zl")](_0x59f8fe, 497));
        } catch (_0x574510) {
          console[_0x59f8fe(501)](_0xc59cee.iZWHZ(_0xc59cee.ZQUBI, _0xa71448(1781, "ZyH)")));
          fs[_0x2b11b3[_0xc59cee[_0xa71448(2300, "h0ri")](_0x59f8fe, 350)]](_0x499d02, _0x30c736);
          console[_0xc59cee[_0xa71448(3302, "z$^9")]](_0x59f8fe(326));
          return false;
        }
        console[_0xa71448(3547, "KgIb")](_0x2b11b3[_0xc59cee[_0xa71448(1008, "#uGO")](_0x59f8fe, 861)]("\n", "="[_0xc59cee[_0xa71448(1803, "KgIb")](_0x59f8fe, 580)](60)));
        console[_0x59f8fe(501)](_0xc59cee[_0xa71448(2335, "#uGO")]);
        console[_0x2b11b3[_0xc59cee.lVrTr]](_0x2b11b3[_0xc59cee[_0xa71448(980, "B)gy")]](_0xc59cee.pUdlM(_0xc59cee.cAsFD + CURRENT_VERSION, _0xc59cee[_0xa71448(3145, "FbMW")]), _0x2f0969));
        console.log(_0xc59cee[_0xa71448(3167, "z$^9")](_0xc59cee.NYFEy, _0xa71448(2962, "OjOj")));
        console.log("="[_0xc59cee.YtOnM](60));
        return true;
      } else return _0xc59cee.LdaJS(_0x50f817, _0x587c96);
    } catch (_0x53be65) {
      if (_0xc59cee[_0xa71448(2862, "xkwi")](_0x2b11b3[_0xc59cee.Ghrvl], _0xc59cee.lZoEf(_0x59f8fe, 793))) return console[_0xa71448(993, "Iw8c")](_0xc59cee[_0xa71448(3620, "rEA3")](_0xc59cee[_0xa71448(3816, "OjOj")], _0x53be65[_0x59f8fe(540)])), false;else d[_0x59f8fe(501)](_0xc59cee[_0xa71448(3691, "B)gy")](_0x2b11b3[_0xc59cee.TxYtt(_0x59f8fe, 811)], this[_0xc59cee[_0xa71448(2481, "wsz*")](_0x59f8fe, 412) + _0xc59cee[_0xa71448(2551, "68zl")] + "e"]()) + (_0xc59cee[_0xa71448(3069, "0qEw")](_0x59f8fe, 763) + _0x59f8fe(557)));
    }
  }
  async function getTencentTimestamp() {
    const _0x1ff287 = {
      "HCwXW": function (_0x33a93e, _0x1e6c81) {
        return _0x33a93e === _0x1e6c81;
      },
      "fNOSy": "UoLCy",
      "oIpXO": function (_0x3c80eb, _0x52f4e7) {
        return _0x3c80eb(_0x52f4e7);
      },
      "bYVOz": function (_0x5cc99f, _0x1d78ed) {
        return _0x5cc99f + _0x1d78ed;
      },
      "MrpvV": function (_0x53f8a8, _0x3b5d8d) {
        return _0x53f8a8 + _0x3b5d8d;
      },
      "AhNnB": function (_0x29a3d7, _0x1cce66) {
        return _0x29a3d7 + _0x1cce66;
      },
      "RZNoC": function (_0x26f90c, _0x10c621) {
        return _0x26f90c + _0x10c621;
      },
      "eiQpe": function (_0x9d1da8, _0x22c03f) {
        return _0x9d1da8(_0x22c03f);
      },
      "ncsHt": _0x42c9d2(1344, "t&mx") + _0x42c9d2(1811, "0qEw"),
      "RYEeV": "bile/1" + _0x42c9d2(1842, "cV6N"),
      "INHFe": "8 Safari/6",
      "VNbHl": _0x42c9d2(2494, "ZVXe"),
      "ueXnp": function (_0x5dd799, _0x467ff0) {
        return _0x5dd799 !== _0x467ff0;
      },
      "wJJdN": _0x42c9d2(105, "FbMW"),
      "XrVqM": _0x42c9d2(-72, "FweH"),
      "RgZES": function (_0x57bfa4, _0x24d0fe) {
        return _0x57bfa4(_0x24d0fe);
      },
      "joGMI": function (_0x5cf4cc, _0x5c4d57) {
        return _0x5cf4cc(_0x5c4d57);
      },
      "JEZsT": function (_0x6ab337, _0x23ba96) {
        return _0x6ab337(_0x23ba96);
      }
    };
    function _0x42c9d2(_0x5a064a, _0x40f075) {
      return _0x1c8f12(_0x40f075, _0x5a064a - -441);
    }
    const _0x25ceea = K,
      _0x2230f2 = {
        "eKWof": _0x1ff287[_0x42c9d2(1155, "$]wl")](_0x25ceea, 356),
        "pHTgj": function (_0x62abf3, _0x38bfb8) {
          function _0x43e606(_0x58166a, _0x48deb9) {
            return _0x42c9d2(_0x48deb9 - 375, _0x58166a);
          }
          if (_0x1ff287.HCwXW(_0x43e606("FbMW", 2285), _0x1ff287[_0x43e606("AeJl", 551)])) return _0x62abf3(_0x38bfb8);else {
            const _0x51ef55 = _0x504a3d;
            return this[_0x51ef55(829)];
          }
        }
      };
    try {
      const _0x535a3f = await axios[_0x25ceea(460)](TIMESTAMP_API_URL, {
        "headers": {
          "User-Agent": _0x1ff287[_0x42c9d2(1985, "8OI@")](_0x1ff287.bYVOz(_0x1ff287[_0x42c9d2(1250, "d420")](_0x1ff287.MrpvV(_0x1ff287.AhNnB(_0x1ff287[_0x42c9d2(1704, "$r&&")](_0x1ff287[_0x42c9d2(154, "ZVXe")](_0x1ff287[_0x42c9d2(38, "Iw8c")](_0x25ceea, 357) + _0x25ceea(362), _0x42c9d2(2339, "PvqJ") + "Phon") + ("e OS 1" + _0x42c9d2(775, "Iw8c")), _0x1ff287[_0x42c9d2(995, "#uGO")]) + (_0x42c9d2(277, "^s2q") + "pple") + _0x1ff287[_0x42c9d2(588, "cV6N")](_0x25ceea, 712), _0x42c9d2(2080, "X#K!") + _0x42c9d2(456, "68zl")), _0x25ceea(502)) + (_0x42c9d2(1164, "%Dq0") + _0x42c9d2(-15, "0qEw")), "S/125." + _0x42c9d2(-122, "5ZNg")), _0x1ff287.RYEeV) + _0x1ff287.INHFe, _0x25ceea(387))
        },
        "timeout": 10000
      });
      if (_0x535a3f[_0x1ff287[_0x42c9d2(2407, "xkwi")]]) {
        const _0x53340f = _0x535a3f[_0x1ff287[_0x42c9d2(18, "#f!g")]],
          _0x4a9c4c = _0x53340f[_0x2230f2[_0x1ff287.oIpXO(_0x25ceea, 742)]](/QZOutputJson=({.*?});/);
        if (_0x4a9c4c && _0x4a9c4c[1]) {
          if (_0x1ff287.ueXnp("tFYEk", _0x42c9d2(201, "d420"))) {
            const _0x4d36bb = JSON[_0x1ff287[_0x42c9d2(2497, "z$^9")]](_0x4a9c4c[1]);
            if (_0x4d36bb && _0x4d36bb.t) return _0x2230f2[_0x1ff287.XrVqM](parseInt, _0x4d36bb.t);
          } else return _0x33d8f9(_0x3f826a);
        }
      }
    } catch (_0x3bf239) {
      console.log(_0x1ff287[_0x42c9d2(29, "&t&m")](_0x1ff287[_0x42c9d2(213, "l[QS")](_0x25ceea, 748), _0x1ff287[_0x42c9d2(951, "68zl")](_0x25ceea, 627)) + _0x3bf239[_0x42c9d2(1374, "2PQv") + "e"]);
    }
    return Math[_0x1ff287.JEZsT(_0x25ceea, 451)](Date[_0x25ceea(794)]() / 1000);
  }
  async function generateDynamicApiKey() {
    const _0x5c5bd9 = {
      "gHtEX": function (_0x11010d, _0x18c018) {
        return _0x11010d(_0x18c018);
      },
      "jckal": "hex",
      "KZMyH": function (_0x2f6276, _0x38ec16) {
        return _0x2f6276 + _0x38ec16;
      },
      "ITXhM": "create" + _0x431693(3352, "%Dq0"),
      "GvILU": _0x431693(2446, "z$^9")
    };
    function _0x431693(_0x824a1, _0x2d52c2) {
      return _0x1c8f12(_0x2d52c2, _0x824a1 - 302);
    }
    const _0x10d6c9 = K,
      _0x15445a = {
        "RSAjD": _0x5c5bd9[_0x431693(2106, "2PQv")](_0x10d6c9, 331),
        "ckNVi": _0x5c5bd9.jckal
      },
      _0x10ed02 = await getTencentTimestamp(),
      _0x1fc033 = _0x5c5bd9[_0x431693(1068, "2PQv")](_0x10ed02, _0x431693(1977, "aiqQ"));
    return {
      "key": crypto[_0x5c5bd9[_0x431693(1549, "X#K!")]](_0x431693(3175, "qZz4"))[_0x5c5bd9.GvILU](_0x1fc033)[_0x15445a.RSAjD](_0x15445a[_0x10d6c9(571)]),
      "timestamp": _0x10ed02
    };
  }
  let unauthorizedErrorCount = 0;
  const MAX_UNAUTHORIZED_RETRY = 5,
    qs = require(_0x1c8f12("OjOj", 2650) + _0x1c8f12("&t&m", 2089) + "g"),
    axios = require(_0x1c8f12("$r&&", 1812)),
    querystring = require("querystring"),
    {
      SocksProxyAgent
    } = require(_0x1c8f12("B)gy", 666) + _0x1c8f12("FbMW", 1061) + (_0x1c8f12("xkwi", 2936) + "t")),
    https = require(K(456));
  function getEnvNumber(_0x84464b, _0xd98360) {
    const _0x29ba1b = {
      "QYLPk": _0x4f4627(1964, "5ZNg") + _0x4f4627(1737, "0qEw"),
      "yFANa": function (_0x1501ac, _0x3d0f9d, _0x2c43db) {
        return _0x1501ac(_0x3d0f9d, _0x2c43db);
      },
      "IpfCI": function (_0x38010a) {
        return _0x38010a();
      },
      "AyHNB": function (_0x35dfc2, _0x46c664) {
        return _0x35dfc2(_0x46c664);
      }
    };
    function _0x4f4627(_0x17135b, _0x2c118b) {
      return _0x1c8f12(_0x2c118b, _0x17135b - -262);
    }
    const _0x496747 = function () {
        const _0x4448d7 = {
          "yyCnC": "axXjM"
        };
        let _0x17ed21 = true;
        return function (_0xe6373b, _0x288a6c) {
          function _0x44e6f6(_0x23d3c2, _0x16ff82) {
            return _0x39e9(_0x23d3c2 - 169, _0x16ff82);
          }
          if (_0x4448d7[_0x44e6f6(2597, "3ipA")] !== "axXjM") return _0x2bb6e6 || _0x3e2613;else {
            const _0x3df0bd = _0x17ed21 ? function () {
              if (_0x288a6c) {
                const _0x2c6b0c = _0x288a6c.apply(_0xe6373b, arguments);
                _0x288a6c = null;
                return _0x2c6b0c;
              }
            } : function () {};
            _0x17ed21 = false;
            return _0x3df0bd;
          }
        };
      }(),
      _0x363e2f = K,
      _0x5506cc = {
        "hyQRM": function (_0x4fcc4f, _0x9dc098) {
          const _0x5ce08f = _0x29ba1b[_0x3d9996("ZVXe", 2489)](_0x496747, this, function () {
            function _0x3de51c(_0x2389ec, _0x54b33b) {
              return _0x3d9996(_0x54b33b, _0x2389ec - -507);
            }
            return _0x5ce08f.toString()[_0x3de51c(1392, "#uGO")](_0x29ba1b[_0x3de51c(3228, "l[QS")]).toString().constructor(_0x5ce08f)[_0x3de51c(1481, "xb56")](_0x29ba1b[_0x3de51c(2798, "cV6N")]);
          });
          function _0x3d9996(_0x43bdb5, _0x2692e3) {
            return _0x4f4627(_0x2692e3 - 1381, _0x43bdb5);
          }
          _0x29ba1b.IpfCI(_0x5ce08f);
          return _0x29ba1b.AyHNB(_0x4fcc4f, _0x9dc098);
        }
      },
      _0x3cbe6c = parseInt(process[_0x363e2f(704)][_0x84464b], 10);
    return _0x5506cc[_0x4f4627(1774, "l[QS")](isNaN, _0x3cbe6c) ? _0xd98360 : _0x3cbe6c;
  }
  const KS_EXECUTION_TIMES_FINAL = getEnvNumber("KSROUNDS", KS_EXECUTION_TIMES),
    KSCOIN_LIMIT_FINAL = getEnvNumber("KSCOIN" + _0x1c8f12("hM!U", 1276) + "IT", KSCOIN_LIMIT),
    IMMEDIATE_STOP_THRESHOLD_FINAL = getEnvNumber(K(619) + K(804) + "HOLD", IMMEDIATE_STOP_THRESHOLD),
    LOW_REWARD_THRESHOLD_FINAL = getEnvNumber(K(479) + "_THRESHOLD", LOW_REWARD_THRESHOLD),
    LOW_REWARD_LIMIT_FINAL = getEnvNumber("LOW_RE" + _0x1c8f12("#f!g", 217) + _0x1c8f12("^R3S", 3155), LOW_REWARD_LIMIT);
  function getTasksToExecute() {
    const _0x2a03fe = {
      "ZEOxP": function (_0x49f51c, _0x2982bb) {
        return _0x49f51c === _0x2982bb;
      },
      "KYrds": _0x168682("ZVXe", 638),
      "Bqbpl": function (_0x350f9e, _0x1b9d01) {
        return _0x350f9e(_0x1b9d01);
      },
      "Rkwra": function (_0x15e3ed, _0x4f6191) {
        return _0x15e3ed(_0x4f6191);
      },
      "Xrqgq": _0x168682("l[QS", 2747),
      "RvrrB": "length"
    };
    function _0x168682(_0x3e7505, _0x26bfb6) {
      return _0x1c8f12(_0x3e7505, _0x26bfb6 - -168);
    }
    const _0x302792 = K,
      _0x2b3a37 = {
        "Dqlfh": _0x302792(492),
        "FdBiL": _0x2a03fe.KYrds,
        "YqmBd": function (_0x2d07f9, _0x110e26) {
          function _0x5dbfa6(_0x2271f0, _0x369067) {
            return _0x168682(_0x2271f0, _0x369067 - -141);
          }
          return _0x2a03fe[_0x5dbfa6("wsz*", 178)](_0x2d07f9, _0x110e26);
        }
      },
      _0x5bfd79 = process[_0x2a03fe.Bqbpl(_0x302792, 704)][_0x168682("X#K!", 199)];
    if (!_0x5bfd79) return DEFAULT_TASKS;
    const _0x2e7c14 = _0x5bfd79[_0x302792(421)](",")[_0x2b3a37[_0x168682("5ZNg", 1905)]](_0x4f1278 => _0x4f1278[_0x302792(854)]()[_0x302792(345) + "e"]())[_0x302792(724)](Boolean),
      _0x566edf = [_0x2a03fe[_0x168682("rEA3", 2337)](_0x302792, 376), _0x168682("Bugr", 1714), _0x168682("&t&m", 1187), _0x2b3a37[_0x302792(713)]],
      _0x15f95d = _0x2e7c14[_0x2a03fe.Bqbpl(_0x302792, 724)](_0x55250f => _0x566edf.includes(_0x55250f));
    if (_0x2b3a37[_0x2a03fe[_0x168682("8OI@", 117)]](_0x15f95d[_0x2a03fe[_0x168682("68zl", 2374)]], 0)) return DEFAULT_TASKS;
    return _0x15f95d;
  }
  function getAccountConfigsFromEnv() {
    const _0x1f4d52 = {
      "vTyio": function (_0x11a5cb, _0x283071) {
        return _0x11a5cb + _0x283071;
      },
      "pjDwq": function (_0x5a2e6c, _0x2bbf67) {
        return _0x5a2e6c + _0x2bbf67;
      },
      "xnmLH": _0x5c2c55("B)gy", 771) + "deAt",
      "jWlxe": "toString",
      "lbGgU": function (_0x3ffaf7, _0x343da6) {
        return _0x3ffaf7(_0x343da6);
      },
      "vPQOI": "ksck",
      "JOJas": function (_0x4f4259, _0x4b34f7) {
        return _0x4f4259(_0x4b34f7);
      },
      "WKPGr": _0x5c2c55("qZz4", 2152),
      "SrfVq": function (_0x43f908, _0x163262) {
        return _0x43f908 <= _0x163262;
      },
      "FVvDR": "cVxpo",
      "HgxtR": function (_0x4e5d46, _0x497eb0) {
        return _0x4e5d46(_0x497eb0);
      },
      "MZsKq": _0x5c2c55("g1XK", 700),
      "cwMPz": _0x5c2c55("FbMW", 2431)
    };
    function _0x5c2c55(_0x149576, _0x4dbbd6) {
      return _0x1c8f12(_0x149576, _0x4dbbd6 - -650);
    }
    const _0x49982d = K,
      _0x533ff3 = {
        "oSFXA": _0x5c2c55("lMAw", 1163)
      },
      _0x28871e = [],
      _0x132040 = new Set();
    if (process[_0x1f4d52[_0x5c2c55("cV6N", 2240)](_0x49982d, 704)][_0x1f4d52[_0x5c2c55("G![J", 910)]]) {
      const _0x2cc262 = process[_0x1f4d52.JOJas(_0x49982d, 704)][_0x49982d(827)],
        _0x4320fb = _0x2cc262[_0x49982d(421)]("&")[_0x5c2c55("G![J", 450)](_0x215750 => _0x215750.trim())[_0x49982d(724)](Boolean);
      _0x28871e[_0x1f4d52.WKPGr](..._0x4320fb);
    }
    for (let _0x1e0cc7 = 1; _0x1f4d52[_0x5c2c55("$]wl", 2181)](_0x1e0cc7, 666); _0x1e0cc7++) {
      if (_0x5c2c55("PvqJ", 1867) === _0x1f4d52[_0x5c2c55("Bugr", 2463)]) {
        const _0x29df2a = _0x1f4d52.pjDwq(_0x1f4d52.vPQOI, _0x1e0cc7);
        if (process[_0x1f4d52.HgxtR(_0x49982d, 704)][_0x29df2a]) {
          const _0x15dc33 = process[_0x5c2c55("0qEw", 230)][_0x29df2a],
            _0x1f6c8f = _0x15dc33[_0x533ff3[_0x1f4d52.MZsKq]]("&")[_0x1f4d52[_0x5c2c55("Z@bN", 1219)]](_0x5122a0 => _0x5122a0.trim())[_0x49982d(724)](Boolean);
          _0x28871e[_0x49982d(554)](..._0x1f6c8f);
        }
      } else _0x123ff3 += _0x1f4d52[_0x5c2c55("Iw8c", 1411)]("%", _0x1f4d52[_0x5c2c55("hM!U", 1098)]("00", _0x55bff4[_0x1f4d52[_0x5c2c55("KgIb", -421)]](_0x4b7175)[_0x1f4d52.jWlxe](16))[_0x5c2c55("3ipA", -2)](-2));
    }
    const _0x243d17 = [];
    for (const _0x22c6f8 of _0x28871e) {
      !_0x132040[_0x5c2c55("z$^9", 401)](_0x22c6f8) && (_0x132040[_0x49982d(340)](_0x22c6f8), _0x243d17[_0x5c2c55("KgIb", 1235)](_0x22c6f8));
    }
    return _0x243d17;
  }
  const accountConfigs = getAccountConfigsFromEnv(),
    accountCount = accountConfigs[K(726)],
    tasksToExecute = getTasksToExecute();
  async function main() {
    const _0x2e7325 = {
        "MGLyV": _0x453111(3624, "&t&m"),
        "oSMrm": function (_0x1e66b2, _0x522d12) {
          return _0x1e66b2 / _0x522d12;
        },
        "uXYus": function (_0x398171, _0x3d4267) {
          return _0x398171 > _0x3d4267;
        },
        "fUMTf": function (_0x45a321, _0x49136c) {
          return _0x45a321 + _0x49136c;
        },
        "pfniM": "index",
        "vbWBz": _0x453111(2785, "G![J"),
        "dtkdp": "remark",
        "fTtlI": function (_0x237016, _0x464536) {
          return _0x237016(_0x464536);
        },
        "SgjLf": _0x453111(1541, "aiqQ"),
        "nguBb": function (_0x2fa92d, _0x27d4d3) {
          return _0x2fa92d(_0x27d4d3);
        },
        "CLUnB": function (_0x56a723, _0x387a85) {
          return _0x56a723(_0x387a85);
        },
        "dFCVG": function (_0x157741, _0x13646) {
          return _0x157741 + _0x13646;
        },
        "UNkUP": "log",
        "Mrbdg": function (_0x483a58, _0x1ac6b2) {
          return _0x483a58 + _0x1ac6b2;
        },
        "BeZDt": function (_0x4749ff, _0x3537d6) {
          return _0x4749ff(_0x3537d6);
        },
        "dfCXt": function (_0x202172, _0x43c143) {
          return _0x202172(_0x43c143);
        },
        "RXyoo": "无备注",
        "wYwmW": function (_0x2dd9f5, _0x420f22) {
          return _0x2dd9f5 + _0x420f22;
        },
        "rRcmt": function (_0x4f39c4) {
          return _0x4f39c4();
        },
        "uLAft": function (_0x314726, _0x435cbe) {
          return _0x314726(_0x435cbe);
        },
        "tdQVS": "🚀 ks极速" + _0x453111(4113, "KgIb"),
        "imEre": function (_0x2cc242, _0x2ebded) {
          return _0x2cc242 + _0x2ebded;
        },
        "wVQTD": function (_0x51d13f, _0x3d5973) {
          return _0x51d13f + _0x3d5973;
        },
        "dtRnw": _0x453111(3246, "%Dq0") + _0x453111(2765, "Caa8"),
        "ZKald": _0x453111(4205, "ZyH)") + "456",
        "HEeaI": function (_0x29ad68, _0x47bfbb) {
          return _0x29ad68(_0x47bfbb);
        },
        "gpWud": "🎯 执行任务: ",
        "amBJi": "join",
        "LzYuN": function (_0x4357ca, _0x5a483b) {
          return _0x4357ca + _0x5a483b;
        },
        "GkaBJ": _0x453111(2659, "ZVXe") + _0x453111(3024, "lMAw"),
        "peCHn": function (_0xcd14f8, _0x3a121c) {
          return _0xcd14f8(_0x3a121c);
        },
        "guCJN": function (_0x5573ac, _0x37fd25) {
          return _0x5573ac + _0x37fd25;
        },
        "lvnil": function (_0x2212aa, _0x5d02dc) {
          return _0x2212aa + _0x5d02dc;
        },
        "VqZgR": function (_0x522f0b, _0x25152a) {
          return _0x522f0b + _0x25152a;
        },
        "pXCCe": _0x453111(2054, "rEA3"),
        "qtlRw": "NlNvA",
        "hXPxz": function (_0x397665, _0x32bb12) {
          return _0x397665(_0x32bb12);
        },
        "pcXVl": function (_0x5556bb, _0x4db02a) {
          return _0x5556bb(_0x4db02a);
        },
        "SFhxz": "yGtKD",
        "YVQGC": _0x453111(2455, "G![J"),
        "rzzwa": function (_0x5cc5b2, _0x407fc4) {
          return _0x5cc5b2(_0x407fc4);
        },
        "UsEvy": function (_0x8501ce, _0x494314) {
          return _0x8501ce + _0x494314;
        },
        "buOAu": function (_0x979ab1, _0x4b3372) {
          return _0x979ab1 + _0x4b3372;
        },
        "ZygMs": function (_0x13c69e, _0x5495ff) {
          return _0x13c69e(_0x5495ff);
        },
        "qDnEm": _0x453111(3528, "ZVXe"),
        "WeBfX": function (_0x2d6b3d, _0x4dc03f, _0x2a19fb, _0x289481) {
          return _0x2d6b3d(_0x4dc03f, _0x2a19fb, _0x289481);
        },
        "GOmRp": _0x453111(3159, "^s2q")
      },
      _0x48aeec = K,
      _0x195055 = {
        "dIzKp": function (_0x5cbc38, _0x263e3e) {
          return _0x5cbc38 + _0x263e3e;
        },
        "BOcFd": _0x48aeec(667),
        "UGxED": _0x453111(3502, "Z@bN") + _0x453111(3596, "xb56"),
        "PeFFj": "repeat",
        "NlNvA": function (_0x1362ae, _0x29c0fc) {
          return _0x1362ae + _0x29c0fc;
        },
        "QGHkV": _0x48aeec(688),
        "HVMLY": function (_0x234bdc, _0x3f6b32) {
          function _0x4679ff(_0x1df228, _0x57f166) {
            return _0x453111(_0x1df228 - -676, _0x57f166);
          }
          const _0x453463 = {
            "fPscL": function (_0xebdf83, _0x247221) {
              return _0xebdf83 + _0x247221;
            }
          };
          return _0x2e7325[_0x4679ff(740, "FweH")] !== "MJoKw" ? _0x453463[_0x4679ff(1085, "FweH")](_0x851a11, _0x4f928e) : _0x2e7325[_0x4679ff(1065, "aiqQ")](_0x234bdc, _0x3f6b32);
        },
        "yGtKD": _0x2e7325[_0x453111(1599, "#uGO")](_0x48aeec, 501),
        "jvyLD": function (_0x34dbd1, _0x60ecd7) {
          function _0x14737f(_0x59427b, _0x339168) {
            return _0x453111(_0x59427b - -1741, _0x339168);
          }
          return _0x2e7325[_0x14737f(2032, "$]wl")](_0x34dbd1, _0x60ecd7);
        },
        "lwFqR": "exit",
        "TyKhB": _0x2e7325[_0x453111(2964, "ZVXe")](_0x48aeec, 867)
      },
      _0x5c820f = await _0x2e7325[_0x453111(3847, "X#K!")](checkAndUpdate);
    function _0x453111(_0x35e20c, _0x4e7a95) {
      return _0x1c8f12(_0x4e7a95, _0x35e20c - 1167);
    }
    if (_0x5c820f) return;
    console[_0x48aeec(501)](_0x195055[_0x2e7325[_0x453111(3098, "cV6N")](_0x48aeec, 657)]("\n", "="[_0x2e7325.BeZDt(_0x48aeec, 580)](60)));
    console[_0x2e7325.UNkUP](_0x2e7325[_0x453111(1408, "PvqJ")] + "版-启动成功！");
    console.log(_0x2e7325.imEre(_0x48aeec(771), _0x453111(2479, "68zl")));
    console[_0x2e7325[_0x453111(1969, "hM!U")]](_0x2e7325[_0x453111(2996, "G![J")](_0x2e7325[_0x453111(3539, "3ipA")], _0x2e7325.ZKald));
    console[_0x453111(1714, "&t&m")](_0x2e7325.Mrbdg(_0x453111(2711, "2PQv") + " htt", _0x453111(2329, "PvqJ") + "345y") + _0x453111(3043, "h0ri"));
    console[_0x2e7325[_0x453111(2027, "Z@bN")](_0x48aeec, 501)]("="[_0x195055[_0x2e7325.HEeaI(_0x48aeec, 624)]](60));
    console[_0x2e7325[_0x453111(3925, "qZz4")]](_0x2e7325[_0x453111(3592, "2PQv")](_0x453111(3814, "q(oB") + ": " + accountCount, "个"));
    console[_0x453111(4301, "i]Oi")](_0x195055.NlNvA(_0x2e7325.gpWud, tasksToExecute[_0x2e7325.amBJi](", ")));
    console[_0x2e7325.UNkUP](_0x2e7325[_0x453111(2953, "hM!U")](_0x2e7325[_0x453111(3215, "Iw8c")], "=") + KS_EXECUTION_TIMES_FINAL + _0x2e7325[_0x453111(3972, "ZyH)")](_0x48aeec, 797) + KSCOIN_LIMIT_FINAL);
    console[_0x453111(3537, "Kd26")](_0x2e7325[_0x453111(3740, "0qEw")](_0x453111(3846, "X#K!") + ": " + (SEARCH_AD_ENABLED ? "开启" : "关闭"), _0x2e7325[_0x453111(1451, "^R3S")](_0x48aeec, 736)) + SEARCH_KEYWORD);
    console[_0x453111(3048, "^R3S")](_0x2e7325.lvnil(_0x2e7325[_0x453111(2558, "KgIb")](_0x195055[_0x2e7325.pXCCe] + (AD_APPEND_ENABLED ? "开启" : "关闭"), _0x2e7325[_0x453111(1874, "xb56")](_0x48aeec, 751)), AD_APPEND_MAX_COUNT));
    console[_0x48aeec(501)](_0x195055[_0x48aeec(657)](_0x195055[_0x2e7325[_0x453111(2378, "%Dq0")]](_0x195055.dIzKp(_0x453111(2817, "%Dq0") + _0x453111(3054, "lMAw"), AD_APPEND_REST_INTERVAL), _0x48aeec(548)) + _0x195055[_0x2e7325[_0x453111(3652, "&t&m")](_0x48aeec, 679)](AD_APPEND_REST_MIN, 1000), "-") + _0x2e7325.oSMrm(AD_APPEND_REST_MAX, 1000) + "秒");
    console[_0x2e7325[_0x453111(2954, "z$^9")]](_0x195055[_0x2e7325[_0x453111(2387, "yuIP")](_0x48aeec, 657)](_0x453111(3541, "0qEw") + ": " + WATCH_TIME_MIN + "-" + WATCH_TIME_MAX, "秒"));
    console[_0x195055[_0x2e7325[_0x453111(2535, "xb56")]]]("=".repeat(60) + "\n");
    _0x195055[_0x2e7325[_0x453111(2298, "X#K!")]](accountCount, process[_0x453111(1673, "Caa8")][_0x453111(2238, "A$(g") + _0x453111(2933, "hM!U") + _0x2e7325[_0x453111(3884, "Bugr")](_0x48aeec, 626)] || MAX_CONCURRENCY) && (console[_0x48aeec(501)](_0x2e7325[_0x453111(3800, "KgIb")](_0x2e7325[_0x453111(2301, "z$^9")](_0x2e7325[_0x453111(2604, "PvqJ")](_0x2e7325.VqZgR(_0x48aeec(364), accountCount), _0x2e7325[_0x453111(2888, "i]Oi")](" 个账号配置，最多只", "允许")), process[_0x48aeec(704)][_0x2e7325[_0x453111(1539, "G![J")](_0x2e7325[_0x453111(1692, "KgIb")](_0x48aeec, 417), _0x2e7325[_0x453111(3807, "^s2q")](_0x48aeec, 626))] || MAX_CONCURRENCY), "个")), process[_0x195055[_0x453111(3805, "B)gy")]](1));
    const _0x161713 = loadAccountsFromEnv();
    console[_0x2e7325.ZygMs(_0x48aeec, 501)](_0x2e7325.buOAu("📊 共找到 " + _0x161713[_0x453111(2740, "68zl")], _0x195055[_0x453111(3127, "ZyH)")]));
    !_0x161713[_0x48aeec(726)] && (console[_0x2e7325.UNkUP](_0x48aeec(773) + "，程序退出"), process[_0x195055[_0x2e7325.qDnEm]](1));
    const _0x78ccfc = MAX_CONCURRENCY,
      _0x28aa8d = [];
    await _0x2e7325.WeBfX(concurrentExecute, _0x161713, _0x78ccfc, async _0x4a44f0 => {
      function _0xd671df(_0x5b836c, _0x60bfaa) {
        return _0x453111(_0x60bfaa - -925, _0x5b836c);
      }
      const _0x546ff8 = _0x48aeec;
      console[_0x546ff8(501)](_0x2e7325[_0xd671df("A$(g", 589)](_0x195055[_0x546ff8(657)](_0x2e7325[_0xd671df("wsz*", 2167)](_0x546ff8(429), " "), _0x4a44f0[_0x2e7325[_0xd671df("lMAw", 685)]]), _0x2e7325[_0xd671df("B)gy", 852)]) + (_0x4a44f0[_0xd671df("xkwi", 2309)] ? _0x2e7325[_0xd671df("68zl", 2199)]("(", _0x4a44f0[_0x2e7325.dtkdp]) + ")" : "") + _0x195055[_0x546ff8(860)]);
      try {
        const _0x370c59 = await _0x2e7325.fTtlI(processAccount, _0x4a44f0);
        _0x28aa8d[_0x2e7325[_0xd671df("aiqQ", 2838)]]({
          "index": _0x4a44f0[_0xd671df("2PQv", 1488)],
          "remark": _0x4a44f0[_0x2e7325[_0xd671df("rEA3", 2348)](_0x546ff8, 425)] || "无备注",
          "nickname": _0x370c59?.[_0x2e7325.fTtlI(_0x546ff8, 695)] || _0x195055[_0xd671df("l[QS", 655)]("账号", _0x4a44f0[_0x2e7325.CLUnB(_0x546ff8, 542)]),
          "initialCoin": _0x370c59?.[_0x2e7325.dFCVG(_0x546ff8(328), "n")] || 0,
          "finalCoin": _0x370c59?.[_0x195055[_0x546ff8(621)]] || 0,
          "coinChange": _0x370c59?.[_0xd671df("Z@bN", 2898) + "ange"] || 0,
          "stats": _0x370c59?.[_0x546ff8(638)] || {},
          "coinLimitExceeded": _0x370c59?.[_0xd671df("FweH", 2969) + "mitE" + (_0xd671df("t&mx", 697) + "d")] || false
        });
      } catch (_0x175641) {
        console[_0x2e7325[_0xd671df("ZyH)", 1445)]](_0x2e7325[_0xd671df("FbMW", 1550)](_0x2e7325[_0xd671df("cV6N", 1307)](_0xd671df("g1XK", 912), _0x4a44f0[_0x2e7325[_0xd671df("PvqJ", 956)](_0x546ff8, 542)]) + _0x2e7325[_0xd671df("aiqQ", 1520)](_0x546ff8, 515), _0x175641[_0x2e7325.dfCXt(_0x546ff8, 540)]));
        _0x28aa8d[_0xd671df("^s2q", 875)]({
          "index": _0x4a44f0[_0x2e7325[_0xd671df("ZVXe", 3310)]],
          "remark": _0x4a44f0.remark || _0x2e7325.RXyoo,
          "nickname": _0x2e7325.wYwmW("账号", _0x4a44f0[_0x2e7325.pfniM]),
          "initialCoin": 0,
          "finalCoin": 0,
          "coinChange": 0,
          "error": _0x175641.message
        });
      }
    });
    _0x28aa8d[_0x2e7325[_0x453111(1682, "5ZNg")]]((_0x200915, _0x4fa51c) => _0x200915[_0x48aeec(542)] - _0x4fa51c[_0x48aeec(542)]);
    printAccountsSummary(_0x28aa8d);
  }
  function generateKuaishouDid() {
    const _0x3b3f62 = {
        "WepgA": function (_0x2cc18f, _0x43fafd, _0x5307dc) {
          return _0x2cc18f(_0x43fafd, _0x5307dc);
        },
        "lowAE": function (_0x1bca4b, _0xb34ca) {
          return _0x1bca4b + _0xb34ca;
        },
        "SWPNY": function (_0x278f9c, _0x11059f) {
          return _0x278f9c + _0x11059f;
        },
        "hKJJb": "012345" + _0x4a89bc("cV6N", 2865),
        "gzKvp": function (_0x5f103e, _0x4f1159) {
          return _0x5f103e < _0x4f1159;
        },
        "XSuLc": function (_0x1a56a4, _0x53a36f) {
          return _0x1a56a4 === _0x53a36f;
        },
        "sluLV": _0x4a89bc("hM!U", 2275),
        "XeseX": "charAt",
        "SFeEq": function (_0x14d63f, _0x1ee679) {
          return _0x14d63f * _0x1ee679;
        },
        "Ehybl": _0x4a89bc("&t&m", 2056),
        "SlePE": function (_0x348189, _0x1514c9) {
          return _0x348189(_0x1514c9);
        },
        "GHDbS": "ANDROID_",
        "EIybI": function (_0x2532ad, _0x3acde6) {
          return _0x2532ad(_0x3acde6);
        },
        "GEaPr": function (_0x57c50e, _0x7737cd) {
          return _0x57c50e + _0x7737cd;
        },
        "XGPzI": function (_0x31e848, _0x2daee0) {
          return _0x31e848(_0x2daee0);
        }
      },
      _0x128297 = K,
      _0x1db820 = {
        "AbyeX": function (_0x3762a6, _0x1f21d1) {
          function _0xfe3cda(_0x2cec94, _0x4cd4ff) {
            return _0x4a89bc(_0x4cd4ff, _0x2cec94 - -1189);
          }
          return _0xfe3cda(854, "3ipA") !== _0xfe3cda(1582, "ZVXe") ? _0x3762a6(_0x1f21d1) : _0x3b3f62.WepgA(_0x426d90, _0x19e41a, _0x55ece6);
        },
        "CIxpI": _0x128297(455)
      };
    function _0x4a89bc(_0xec77d0, _0x19655d) {
      return _0x1c8f12(_0xec77d0, _0x19655d - 726);
    }
    try {
      const _0x32e8bf = _0x52e6de => {
          function _0x3be7f5(_0x17dba9, _0x1b6318) {
            return _0x4a89bc(_0x17dba9, _0x1b6318 - -140);
          }
          const _0x4e6bb3 = _0x3b3f62[_0x3be7f5("t&mx", 1191)](_0x3b3f62[_0x3be7f5("3ipA", 1792)], _0x3be7f5("^R3S", 2402));
          let _0x3be122 = "";
          for (let _0x3eccf3 = 0; _0x3b3f62[_0x3be7f5("xkwi", 1596)](_0x3eccf3, _0x52e6de); _0x3eccf3++) {
            if (_0x3b3f62[_0x3be7f5("yuIP", 3013)](_0x3b3f62.sluLV, _0x3b3f62[_0x3be7f5("&t&m", 3264)])) _0x3be122 += _0x4e6bb3[_0x3b3f62[_0x3be7f5("KgIb", 3550)]](Math.floor(_0x3b3f62[_0x3be7f5("%Dq0", 2095)](Math.random(), _0x4e6bb3[_0x3b3f62[_0x3be7f5("yuIP", 1633)]])));else return _0x3b3f62[_0x3be7f5("t&mx", 1119)](_0x3d860a, _0x594d42);
          }
          return _0x3be122;
        },
        _0x18d3d3 = _0x1db820[_0x3b3f62.SlePE(_0x128297, 611)](_0x32e8bf, 16),
        _0x3c1064 = _0x3b3f62.SWPNY(_0x3b3f62.GHDbS, _0x18d3d3);
      return _0x3c1064;
    } catch (_0x26bd32) {
      const _0x32387d = Date[_0x3b3f62[_0x4a89bc("68zl", 1731)](_0x128297, 794)]()[_0x4a89bc("Bugr", 3684) + "ng"](16)[_0x3b3f62.SWPNY(_0x3b3f62.EIybI(_0x128297, 810), "e")]();
      return _0x3b3f62[_0x4a89bc("d420", 1604)](_0x3b3f62[_0x4a89bc("A$(g", 2216)](_0x128297, 597), _0x32387d[_0x1db820[_0x128297(414)]](0, 16));
    }
  }
  async function sendRequest(_0x593456, _0x809a2b = null, _0x8eb99c = _0x1c8f12("xkwi", 277) + _0x1c8f12("q(oB", 414) + K(527)) {
    const _0x392ded = {
        "ZWLoj": function (_0x53ce87, _0x103967) {
          return _0x53ce87 >= _0x103967;
        },
        "bweUT": function (_0x3f1d5b, _0x139c44) {
          return _0x3f1d5b(_0x139c44);
        },
        "NdATL": function (_0xce5670, _0x407cff) {
          return _0xce5670 + _0x407cff;
        },
        "IvAaL": "log",
        "RfKDL": function (_0x462614, _0x26304a) {
          return _0x462614 + _0x26304a;
        },
        "akqiz": "🚨 未授权错" + _0x596537("l[QS", 2216),
        "GVOpM": function (_0x219b34, _0x1fa7bd) {
          return _0x219b34 + _0x1fa7bd;
        },
        "KQSIX": "DdZvV",
        "gsvpG": _0x596537("lMAw", 3302),
        "weDhX": function (_0x249b59, _0x546138) {
          return _0x249b59 + _0x546138;
        },
        "vCmag": " 代理URL无效，尝",
        "mVSoU": function (_0x39a3fe, _0x1f0b3a) {
          return _0x39a3fe(_0x1f0b3a);
        },
        "XeTXN": function (_0x1de88f, _0x48f4be) {
          return _0x1de88f === _0x48f4be;
        },
        "UOeXk": "tCiWu",
        "UBePo": "Ezqok",
        "YWDun": "url",
        "gpzKK": _0x596537("hM!U", 1237),
        "UwATG": _0x596537("hM!U", 1492),
        "bRdLn": function (_0x528a48, _0x4ef000) {
          return _0x528a48 === _0x4ef000;
        },
        "jXYYH": function (_0xa5c491, _0x58706e) {
          return _0xa5c491 + _0x58706e;
        },
        "DVqNG": function (_0x2a09bb, _0x4a04ca) {
          return _0x2a09bb(_0x4a04ca);
        },
        "BlyAE": _0x596537("^R3S", 2102) + "mitR",
        "HxoMS": function (_0x523eab, _0x5319c3) {
          return _0x523eab !== _0x5319c3;
        },
        "gxtyb": function (_0x2866e3, _0xe47f9d) {
          return _0x2866e3(_0xe47f9d);
        },
        "GyjRq": _0x596537("Iw8c", 1798),
        "VInBm": _0x596537("^s2q", 2558)
      },
      _0x4e8ecd = K,
      _0x5db690 = {
        "LzhtS": _0x392ded.IvAaL,
        "hIgSp": _0x392ded.RfKDL(_0x392ded.akqiz, " "),
        "mTySw": function (_0x3b2a78, _0x29809f) {
          function _0x504cbc(_0x1eb9e9, _0x40ec42) {
            return _0x596537(_0x40ec42, _0x1eb9e9 - -1231);
          }
          return _0x392ded[_0x504cbc(840, "^R3S")](_0x3b2a78, _0x29809f);
        },
        "UdCqf": _0x392ded[_0x596537("A$(g", 1099)](_0x596537("$]wl", 2285) + _0x596537("$]wl", 1765), "或联系QQ群" + _0x596537("z$^9", 3926)),
        "DdZvV": function (_0x16cc2b, _0x301f4b) {
          return _0x16cc2b === _0x301f4b;
        },
        "bwSFT": _0x4e8ecd(439),
        "DsCZb": _0x392ded[_0x596537("B)gy", 3294)](_0x4e8ecd, 569),
        "TvMCT": function (_0x38e179, _0x79e036) {
          function _0x7e92f(_0x475da5, _0x179e5b) {
            return _0x596537(_0x179e5b, _0x475da5 - -179);
          }
          return _0x392ded[_0x7e92f(1284, "G![J")](_0x38e179, _0x79e036);
        },
        "sOQxm": _0x4e8ecd(385)
      },
      _0x55f306 = {
        ..._0x593456
      };
    let _0x3f2ee7 = null;
    if (_0x809a2b) {
      if (_0x5db690[_0x392ded[_0x596537("Iw8c", 2066)]](_0x392ded[_0x596537("5ZNg", 1719)], "RlNsM")) return this[_0x4e8ecd(643) + _0x4e8ecd(808)][0];else try {
        _0x3f2ee7 = new SocksProxyAgent(_0x809a2b);
      } catch (_0xcd614b) {
        console[_0x5db690[_0x4e8ecd(821)]](_0x392ded[_0x596537("AeJl", 1903)]("❌ ", _0x8eb99c) + _0x392ded[_0x596537("ZyH)", 3338)](_0x392ded[_0x596537("t&mx", 2548)], _0x392ded.mVSoU(_0x4e8ecd, 672)));
      }
    }
    function _0x596537(_0x4159d0, _0x192088) {
      return _0x1c8f12(_0x4159d0, _0x192088 - 884);
    }
    try {
      if (_0x392ded.XeTXN(_0x392ded[_0x596537("X#K!", 1165)], _0x392ded.UBePo)) return _0x392ded[_0x596537("%Dq0", 1597)](_0x42a09f, _0x2131fc);else {
        const _0x1e8eee = {
          "method": _0x55f306[_0x5db690[_0x596537("r#&P", 1420)]] || _0x5db690[_0x4e8ecd(830)],
          "url": _0x55f306[_0x392ded.YWDun],
          "headers": _0x55f306[_0x392ded.mVSoU(_0x4e8ecd, 575)] || {},
          "data": _0x55f306[_0x392ded[_0x596537("OjOj", 2356)]] || _0x55f306[_0x392ded[_0x596537("X#K!", 3544)]],
          "timeout": _0x55f306[_0x4e8ecd(323)] || REQUEST_TIMEOUT
        };
        _0x3f2ee7 ? _0x392ded[_0x596537("PvqJ", 2987)](_0x596537("rEA3", 3856), "xEpBu") ? this[_0x392ded.jXYYH(_0x392ded.DVqNG(_0x4e8ecd, 730), "s")][_0x8eb99c] && (this[_0x392ded[_0x596537("rEA3", 1908)](_0x392ded.BlyAE, _0x596537("l[QS", 3145))][_0x55f306] = false) : (_0x1e8eee.httpAgent = _0x3f2ee7, _0x1e8eee[_0x4e8ecd(800)] = _0x3f2ee7) : _0x1e8eee[_0x596537("rEA3", 3549) + _0x596537("Z@bN", 3121)] = new https[_0x596537("Bugr", 1509)]({
          "rejectUnauthorized": false
        });
        const _0x3f3753 = await _0x5db690[_0x596537("AeJl", 3021)](axios, _0x1e8eee);
        return {
          "response": _0x3f3753,
          "body": _0x3f3753[_0x4e8ecd(684)]
        };
      }
    } catch (_0x19ecef) {
      if (_0x392ded.HxoMS("nJPzx", _0x5db690[_0x392ded[_0x596537("g1XK", 3419)](_0x4e8ecd, 514)])) k++, l[_0x5db690[_0x392ded[_0x596537("3ipA", 1852)]]](_0x5db690[_0x4e8ecd(803)] + m + "/" + _0x19ecef), _0x5db690[_0x392ded.VInBm](o, p) && (s[_0x4e8ecd(501)](_0x596537("&t&m", 1557) + _0x596537("B)gy", 2979) + _0x4e8ecd(756)), t.log(_0x5db690.UdCqf), process[_0x392ded[_0x596537("q(oB", 1491)](_0x4e8ecd, 583)](1));else return {
        "response": null,
        "body": null
      };
    }
  }
  function _0x39e9(_0x1291c5, _0x1e38b9) {
    const _0x45527b = _0x1ec9();
    _0x39e9 = function (_0x2415df, _0x1aa0c8) {
      _0x2415df = _0x2415df - 396;
      let _0x28fe25 = _0x45527b[_0x2415df];
      if (_0x39e9.YriPzC === undefined) {
        var _0x462f91 = function (_0x45f986) {
          const _0x1567cd = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
          let _0x4532da = "",
            _0x468297 = "",
            _0x2af3f0 = _0x4532da + _0x462f91;
          for (let _0x257164 = 0, _0x2439f9, _0x4bff8c, _0x1f5ed8 = 0; _0x4bff8c = _0x45f986.charAt(_0x1f5ed8++); ~_0x4bff8c && (_0x2439f9 = _0x257164 % 4 ? _0x2439f9 * 64 + _0x4bff8c : _0x4bff8c, _0x257164++ % 4) ? _0x4532da += _0x2af3f0.charCodeAt(_0x1f5ed8 + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x2439f9 >> (-2 * _0x257164 & 6)) : _0x257164 : 0) {
            _0x4bff8c = _0x1567cd.indexOf(_0x4bff8c);
          }
          for (let _0x48195d = 0, _0x54f51d = _0x4532da.length; _0x48195d < _0x54f51d; _0x48195d++) {
            _0x468297 += "%" + ("00" + _0x4532da.charCodeAt(_0x48195d).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x468297);
        };
        const _0x1d9a5a = function (_0x329312, _0x129f9b) {
          let _0x89278a = [],
            _0x377b5d = 0,
            _0x17fdec,
            _0x5d1742 = "";
          _0x329312 = _0x462f91(_0x329312);
          let _0x32e04b;
          for (_0x32e04b = 0; _0x32e04b < 256; _0x32e04b++) {
            _0x89278a[_0x32e04b] = _0x32e04b;
          }
          for (_0x32e04b = 0; _0x32e04b < 256; _0x32e04b++) {
            _0x377b5d = (_0x377b5d + _0x89278a[_0x32e04b] + _0x129f9b.charCodeAt(_0x32e04b % _0x129f9b.length)) % 256;
            _0x17fdec = _0x89278a[_0x32e04b];
            _0x89278a[_0x32e04b] = _0x89278a[_0x377b5d];
            _0x89278a[_0x377b5d] = _0x17fdec;
          }
          _0x32e04b = 0;
          _0x377b5d = 0;
          for (let _0x122e86 = 0; _0x122e86 < _0x329312.length; _0x122e86++) {
            _0x32e04b = (_0x32e04b + 1) % 256;
            _0x377b5d = (_0x377b5d + _0x89278a[_0x32e04b]) % 256;
            _0x17fdec = _0x89278a[_0x32e04b];
            _0x89278a[_0x32e04b] = _0x89278a[_0x377b5d];
            _0x89278a[_0x377b5d] = _0x17fdec;
            _0x5d1742 += String.fromCharCode(_0x329312.charCodeAt(_0x122e86) ^ _0x89278a[(_0x89278a[_0x32e04b] + _0x89278a[_0x377b5d]) % 256]);
          }
          return _0x5d1742;
        };
        _0x39e9.YGlQbu = _0x1d9a5a;
        _0x1291c5 = arguments;
        _0x39e9.YriPzC = true;
      }
      const _0x3a0940 = _0x45527b[0],
        _0x525f48 = _0x2415df + _0x3a0940,
        _0x16097e = _0x1291c5[_0x525f48];
      if (!_0x16097e) {
        if (_0x39e9.VbdYSR === undefined) {
          const _0x32c4d8 = function (_0x2327b5) {
            this.GlvKBe = _0x2327b5;
            this.SeIeTS = [1, 0, 0];
            this.rSzoGq = function () {
              return "newState";
            };
            this.JaGHqi = "\\w+ *\\(\\) *{\\w+ *";
            this.ULSEIG = "['|\"].+['|\"];? *}";
          };
          _0x32c4d8.prototype.pohuBM = function () {
            const _0x34e8b6 = new RegExp(this.JaGHqi + this.ULSEIG),
              _0x158e15 = _0x34e8b6.test(this.rSzoGq.toString()) ? --this.SeIeTS[1] : --this.SeIeTS[0];
            return this.hNYbCd(_0x158e15);
          };
          _0x32c4d8.prototype.hNYbCd = function (_0x265979) {
            if (!Boolean(~_0x265979)) return _0x265979;
            return this.kVhSMo(this.GlvKBe);
          };
          _0x32c4d8.prototype.kVhSMo = function (_0x4eea60) {
            for (let _0x26d7c6 = 0, _0x5d0038 = this.SeIeTS.length; _0x26d7c6 < _0x5d0038; _0x26d7c6++) {
              this.SeIeTS.push(Math.round(Math.random()));
              _0x5d0038 = this.SeIeTS.length;
            }
            return _0x4eea60(this.SeIeTS[0]);
          };
          new _0x32c4d8(_0x39e9).pohuBM();
          _0x39e9.VbdYSR = true;
        }
        _0x28fe25 = _0x39e9.YGlQbu(_0x28fe25, _0x1aa0c8);
        _0x1291c5[_0x525f48] = _0x28fe25;
      } else _0x28fe25 = _0x16097e;
      return _0x28fe25;
    };
    return _0x39e9(_0x1291c5, _0x1e38b9);
  }
  async function testProxyConnectivity(_0x434b75, _0x219db9 = _0x1c8f12("0qEw", 1782) + "测") {
    const _0x54ce44 = {
        "IXdbe": function (_0x17d005, _0x184f12) {
          return _0x17d005 !== _0x184f12;
        },
        "Iovpj": function (_0x30a038, _0x431910) {
          return _0x30a038 === _0x431910;
        },
        "EYGXT": function (_0x313204, _0x1655c6) {
          return _0x313204(_0x1655c6);
        },
        "WembX": function (_0x2fc758, _0x19041f) {
          return _0x2fc758(_0x19041f);
        },
        "smNjy": function (_0xc566de, _0x1922f2) {
          return _0xc566de + _0x1922f2;
        },
        "zEeZY": _0x2bcbb8(1489, "8OI@") + _0x2bcbb8(640, "rEA3"),
        "KTxrA": _0x2bcbb8(85, "5ZNg") + _0x2bcbb8(2606, "2PQv"),
        "ueSvL": "df83-4" + _0x2bcbb8(601, "hM!U"),
        "wVzHk": function (_0x1e4690, _0x117c48) {
          return _0x1e4690 + _0x117c48;
        },
        "cAdfN": _0x2bcbb8(826, "^R3S") + "理（直连",
        "hqZMF": function (_0x165028, _0x35649c) {
          return _0x165028 < _0x35649c;
        },
        "eEbUk": function (_0x162208, _0x23cb9d) {
          return _0x162208 === _0x23cb9d;
        },
        "rwSnB": _0x2bcbb8(1501, "Z@bN"),
        "xEXae": "https:" + _0x2bcbb8(345, "FbMW"),
        "ITtUs": _0x2bcbb8(2045, "q(oB") + "p",
        "DSYvg": function (_0x4938b1, _0x54cee7) {
          return _0x4938b1 + _0x54cee7;
        },
        "ANURP": function (_0x2c30ed, _0x19f7c1) {
          return _0x2c30ed + _0x19f7c1;
        },
        "wREqM": function (_0x2971e0, _0x4e3d92) {
          return _0x2971e0 + _0x4e3d92;
        },
        "QlGcm": function (_0x2051b3, _0x30eb0b) {
          return _0x2051b3 + _0x30eb0b;
        },
        "avyfL": function (_0x3bcd9a, _0x279e2d) {
          return _0x3bcd9a + _0x279e2d;
        },
        "CXczZ": "Mozilla/5.",
        "otHEX": _0x2bcbb8(1008, "Z@bN") + "6_6 ",
        "vZbwS": "S X) A" + _0x2bcbb8(-129, "lMAw"),
        "FQkjp": _0x2bcbb8(2373, "qZz4") + "/605",
        "RRTNp": function (_0x50a948, _0x2ad62) {
          return _0x50a948(_0x2ad62);
        },
        "uJQXA": "48 Saf" + _0x2bcbb8(736, "%Dq0"),
        "IXVUA": _0x2bcbb8(1849, "t&mx") + "tml,",
        "jMgIi": function (_0x331712, _0x2a891a) {
          return _0x331712(_0x2a891a);
        },
        "SnHrO": function (_0x2af9a9, _0x13324e) {
          return _0x2af9a9(_0x13324e);
        },
        "ZSbxs": "ion/xm" + _0x2bcbb8(411, "FweH"),
        "CTEgH": _0x2bcbb8(2539, "8OI@"),
        "HVuhd": _0x2bcbb8(416, "^R3S"),
        "knkxp": function (_0x413d4c, _0x2481a9) {
          return _0x413d4c(_0x2481a9);
        },
        "SCAmN": function (_0x4080da, _0x3ec4db) {
          return _0x4080da(_0x3ec4db);
        },
        "eFSpn": _0x2bcbb8(-126, "8OI@"),
        "XeDHD": "trim",
        "IPtZH": function (_0x540571, _0x3e2400) {
          return _0x540571 + _0x3e2400;
        },
        "ZhtbW": "✅ ✅ SO" + _0x2bcbb8(283, "OjOj"),
        "XgWkj": "log",
        "vwKVL": _0x2bcbb8(551, "FweH"),
        "mzqLH": function (_0x387f64, _0x43e8e4) {
          return _0x387f64 + _0x43e8e4;
        },
        "zoJjD": function (_0x1f4c92, _0x30c8f4) {
          return _0x1f4c92(_0x30c8f4);
        }
      },
      _0x400214 = K,
      _0x205526 = {
        "JWTwP": _0x54ce44[_0x2bcbb8(586, "%Dq0")](_0x400214, 848),
        "yvyuj": _0x400214(531) + ("ans;q=" + _0x2bcbb8(2485, "lMAw")),
        "zzHwL": _0x54ce44.WembX(_0x400214, 734),
        "isrFQ": _0x54ce44.smNjy(_0x54ce44[_0x2bcbb8(104, "FbMW")](_0x54ce44.zEeZY + (_0x2bcbb8(2105, "68zl") + "520;"), " fqm_p" + _0x2bcbb8(2163, "l[QS")), _0x54ce44.KTxrA) + _0x54ce44.ueSvL + (_0x2bcbb8(231, "cV6N") + "bae8") + "b6c200b",
        "ytnuc": _0x2bcbb8(344, "g1XK"),
        "dbBSW": _0x2bcbb8(334, "qZz4"),
        "rlKOJ": function (_0x354466, _0x293e05) {
          function _0x49e0ee(_0x48f385, _0x131d5c) {
            return _0x2bcbb8(_0x48f385 - 551, _0x131d5c);
          }
          return _0x54ce44[_0x49e0ee(908, "8OI@")](_0x354466, _0x293e05);
        },
        "UigFl": function (_0x1552e6, _0x26ec46) {
          return _0x1552e6 + _0x26ec46;
        }
      };
    if (!_0x434b75) return {
      "ok": true,
      "msg": _0x54ce44.wVzHk(_0x54ce44[_0x2bcbb8(641, "xkwi")], _0x400214(382)),
      "ip": _0x54ce44.EYGXT(_0x400214, 598)
    };
    let _0x684c41 = 0;
    const _0x916acb = 5;
    while (_0x54ce44[_0x2bcbb8(1831, "PvqJ")](_0x684c41, _0x916acb)) {
      if (_0x54ce44.eEbUk(_0x2bcbb8(354, "G![J"), _0x54ce44.rwSnB)) {
        try {
          const _0x4c980b = new SocksProxyAgent(_0x434b75),
            _0x2bbdb4 = await axios[_0x400214(460)](_0x54ce44.xEXae + _0x54ce44[_0x2bcbb8(141, "cV6N")](_0x400214, 504) + (_0x2bcbb8(1051, "Caa8") + _0x2bcbb8(561, "0qEw")) + _0x54ce44.ITtUs, {
              "httpAgent": _0x4c980b,
              "httpsAgent": _0x4c980b,
              "timeout": 10000,
              "headers": {
                "User-Agent": _0x54ce44[_0x2bcbb8(952, "0qEw")](_0x54ce44.smNjy(_0x54ce44.ANURP(_0x54ce44.wREqM(_0x54ce44[_0x2bcbb8(1030, "5ZNg")](_0x54ce44[_0x2bcbb8(-179, "ZVXe")](_0x54ce44[_0x2bcbb8(2530, "2PQv")](_0x54ce44.wREqM(_0x54ce44[_0x2bcbb8(2352, "z$^9")], _0x400214(362)), " CPU iPhon") + _0x54ce44[_0x2bcbb8(1573, "%Dq0")] + _0x54ce44.EYGXT(_0x400214, 424) + _0x54ce44.vZbwS + _0x54ce44.FQkjp, ".1.15 " + _0x2bcbb8(917, "Iw8c")), _0x54ce44.RRTNp(_0x400214, 502)) + ("ecko) " + _0x2bcbb8(520, "wsz*")), _0x400214(495)), _0x400214(453)), _0x54ce44[_0x2bcbb8(-37, "lMAw")]), _0x2bcbb8(1660, "ZyH)") + "15"),
                "Accept": _0x54ce44[_0x2bcbb8(905, "t&mx")](_0x54ce44[_0x2bcbb8(1477, "&t&m")](_0x54ce44[_0x2bcbb8(312, "#uGO")](_0x54ce44[_0x2bcbb8(2506, "z$^9")](_0x54ce44.IXVUA + _0x54ce44[_0x2bcbb8(425, "g1XK")](_0x400214, 677), _0x54ce44.SnHrO(_0x400214, 493)), _0x400214(434)), _0x54ce44[_0x2bcbb8(1637, "68zl")]) + _0x54ce44.SnHrO(_0x400214, 355), _0x2bcbb8(757, "ZVXe")),
                "Sec-Fetch-Site": _0x205526[_0x54ce44[_0x2bcbb8(1644, "68zl")]],
                "Accept-Language": _0x205526[_0x400214(792)],
                "Sec-Fetch-Mode": _0x205526[_0x54ce44[_0x2bcbb8(831, "Iw8c")]],
                "Cache-Control": _0x400214(396),
                "Pragma": _0x54ce44[_0x2bcbb8(1776, "G![J")](_0x400214, 396),
                "Sec-Fetch-Dest": "document",
                "Cookie": _0x205526[_0x54ce44[_0x2bcbb8(1088, "Bugr")](_0x400214, 408)]
              }
            });
          if (_0x2bbdb4[_0x205526[_0x2bcbb8(309, "PvqJ")]] === 200 && _0x2bbdb4[_0x54ce44.WembX(_0x400214, 684)] && typeof _0x2bbdb4[_0x205526[_0x400214(673)]] === "string") {
            if (_0x54ce44[_0x2bcbb8(2310, "aiqQ")](_0x54ce44[_0x2bcbb8(792, "aiqQ")], _0x2bcbb8(1914, "wsz*"))) {
              const _0x575df3 = _0x2bbdb4[_0x205526[_0x2bcbb8(534, "0qEw")]][_0x54ce44.XeDHD]();
              if (_0x575df3 && _0x205526[_0x400214(802)](_0x575df3, "")) return {
                "ok": true,
                "msg": _0x54ce44.avyfL(_0x54ce44[_0x2bcbb8(2541, "g1XK")](_0x54ce44[_0x2bcbb8(1075, "t&mx")](_0x54ce44.ZhtbW, _0x54ce44.EYGXT(_0x400214, 342)), " "), _0x575df3),
                "ip": _0x575df3
              };
            } else return _0x54ce44[_0x2bcbb8(2191, "#uGO")](_0xb8d728, _0x5747e8);
          }
        } catch (_0x3430bf) {}
        _0x684c41++;
        _0x684c41 < _0x916acb && (console[_0x54ce44[_0x2bcbb8(765, "l[QS")]]("   🔄 代" + _0x2bcbb8(145, "Kd26") + _0x2bcbb8(-11, "qZz4") + _0x684c41 + _0x54ce44.vwKVL), await new Promise(_0xda2e88 => setTimeout(_0xda2e88, 2000)));
      } else return _0x15ab7f(_0x3d21f9);
    }
    function _0x2bcbb8(_0x2be9f7, _0x235988) {
      return _0x1c8f12(_0x235988, _0x2be9f7 - -505);
    }
    return {
      "ok": false,
      "msg": _0x54ce44[_0x2bcbb8(-162, "g1XK")](_0x205526.UigFl(_0x54ce44[_0x2bcbb8(210, "Iw8c")](_0x54ce44.zoJjD(_0x400214, 327), "重试"), _0x916acb), "次"),
      "ip": null
    };
  }
  const usedProxies = new Set();
  async function getAccountBasicInfo(_0x3a8c6b, _0x1c397c, _0xc6b76c = "?") {
    function _0x4617bb(_0x5b3f40, _0x1dcefc) {
      return _0x1c8f12(_0x1dcefc, _0x5b3f40 - 354);
    }
    const _0x4cf10c = {
        "eqjEg": _0x4617bb(2263, "G![J"),
        "aMahX": function (_0x42476c, _0x47f1ba) {
          return _0x42476c + _0x47f1ba;
        },
        "Glsat": function (_0x2b8b2e, _0xdfa4f) {
          return _0x2b8b2e + _0xdfa4f;
        },
        "Uookg": function (_0x333454, _0xa2eaf3) {
          return _0x333454 + _0xa2eaf3;
        },
        "DaDpR": function (_0x70a0c1, _0x4f65b4) {
          return _0x70a0c1(_0x4f65b4);
        },
        "QIrQF": function (_0x3225ed, _0xcddd98) {
          return _0x3225ed(_0xcddd98);
        },
        "oxDRN": _0x4617bb(581, "ZyH)") + "over",
        "yXVzK": _0x4617bb(2468, "FbMW") + _0x4617bb(2101, "A$(g"),
        "HUxwo": _0x4617bb(1285, "cV6N") + _0x4617bb(2401, "lMAw"),
        "zBQAk": function (_0x45a2fe, _0x26fe39) {
          return _0x45a2fe(_0x26fe39);
        },
        "srfex": _0x4617bb(2757, "&t&m"),
        "TWWYf": function (_0x390e2f, _0x1f99e3) {
          return _0x390e2f(_0x1f99e3);
        },
        "hRDrA": "获取账号基本信息",
        "bYBpv": _0x4617bb(1451, "h0ri"),
        "NqSIA": function (_0x3a4e91, _0x1dd2f2) {
          return _0x3a4e91(_0x1dd2f2);
        }
      },
      _0x289505 = K,
      _0x2f960f = {
        "MkleR": _0x4617bb(1552, "hM!U") + ".kua" + _0x289505(694),
        "NAuVo": _0x4cf10c[_0x4617bb(2830, "Bugr")]
      },
      _0x21fbbd = _0x4cf10c[_0x4617bb(815, "X#K!")](_0x4cf10c[_0x4617bb(3028, "Z@bN")](_0x4cf10c[_0x4617bb(2118, "B)gy")](_0x4cf10c[_0x4617bb(1939, "Caa8")](_0x4cf10c.Glsat(_0x4cf10c.Uookg(_0x4cf10c[_0x4617bb(1104, "^s2q")](_0x289505, 806) + _0x4cf10c[_0x4617bb(1467, "&t&m")](_0x289505, 552), _0x4617bb(1293, "68zl") + "m/re") + (_0x4617bb(2514, "G![J") + _0x4617bb(2998, "Kd26")), _0x4617bb(1110, "rEA3") + "vity"), _0x4cf10c[_0x4617bb(1797, "B)gy")]), _0x4617bb(1922, "ZyH)") + _0x4617bb(3322, "$]wl")), _0x4cf10c[_0x4617bb(1172, "wsz*")]) + _0x4cf10c.HUxwo, _0x4cf10c.QIrQF(_0x289505, 324)),
      {
        body: _0x306bba
      } = await sendRequest({
        "method": _0x4cf10c[_0x4617bb(3504, "lMAw")](_0x289505, 569),
        "url": _0x21fbbd,
        "headers": {
          "Host": _0x2f960f[_0x4cf10c.srfex],
          "User-Agent": _0x4cf10c[_0x4617bb(3460, "&t&m")](_0x4cf10c[_0x4617bb(845, "5ZNg")](_0x4cf10c[_0x4617bb(2876, "ZVXe")](_0x289505, 503), _0x289505(666)), _0x4cf10c[_0x4617bb(1487, "8OI@")](_0x289505, 508)),
          "Cookie": _0x3a8c6b,
          "Content-Type": _0x4cf10c[_0x4617bb(3133, "yuIP")](_0x289505(677) + (_0x4617bb(2238, "KgIb") + _0x4617bb(2566, "OjOj")) + _0x289505(354), _0x4617bb(2130, "AeJl"))
        },
        "timeout": 12000
      }, _0x1c397c, _0x4cf10c.hRDrA);
    if (_0x306bba && _0x306bba[_0x4cf10c[_0x4617bb(2524, "%Dq0")](_0x289505, 351)] === 1 && _0x306bba[_0x2f960f[_0x4cf10c[_0x4617bb(2996, "FbMW")]]]) return {
      "nickname": _0x306bba[_0x4cf10c.NqSIA(_0x289505, 684)].userData?.[_0x4cf10c.QIrQF(_0x289505, 695)] || null,
      "totalCoin": _0x306bba[_0x2f960f[_0x4617bb(977, "#f!g")]].totalCoin ?? null,
      "allCash": _0x306bba[_0x4cf10c[_0x4617bb(1748, "ZVXe")](_0x289505, 684)][_0x289505(521)] ?? null
    };
    return null;
  }
  class KuaishouAdTask {
    constructor({
      index: _0x180ff3,
      salt: _0x567d66,
      cookie: _0x28587f,
      nickname = "",
      proxyUrl = null,
      tasksToExecute = DEFAULT_TASKS,
      remark = ""
    }) {
      const _0x3bdc8f = {
        "qTcfV": _0x68db9b("2PQv", 1157),
        "diBMT": function (_0x3b5675, _0x52b2bf) {
          return _0x3b5675 + _0x52b2bf;
        },
        "ZAVpV": function (_0x4a811d, _0x355aea) {
          return _0x4a811d(_0x355aea);
        },
        "iTxhm": "未知错误",
        "JqjeK": function (_0x42969c, _0x2e386c) {
          return _0x42969c + _0x2e386c;
        },
        "dbCjZ": _0x68db9b("cV6N", 1976) + "es",
        "xbDoS": function (_0x529baf, _0x56d64a) {
          return _0x529baf(_0x56d64a);
        },
        "DxinS": _0x68db9b("d420", 1985) + _0x68db9b("$r&&", 1792),
        "qwFVu": function (_0xdd17b2, _0xea1575) {
          return _0xdd17b2(_0xea1575);
        },
        "JmepL": function (_0x1b9d21, _0x3a9ef7) {
          return _0x1b9d21(_0x3a9ef7);
        },
        "DVeIh": _0x68db9b("Bugr", 2162),
        "qMJjt": _0x68db9b("xb56", 2014),
        "pxZIP": "taskCo" + _0x68db9b("3ipA", 1149),
        "mFXJR": function (_0x4d14ad, _0x16bca2) {
          return _0x4d14ad(_0x16bca2);
        },
        "GsEHk": _0x68db9b("lMAw", 3405) + "运行",
        "XIbKT": _0x68db9b("68zl", 2530),
        "axqop": _0x68db9b("X#K!", 1143),
        "DpUeV": "pYlDS",
        "hGdUG": _0x68db9b("FbMW", 3212) + "gs",
        "XDAhQ": _0x68db9b("cV6N", 2590),
        "qJBTi": function (_0x4ed1d5, _0x120b47) {
          return _0x4ed1d5(_0x120b47);
        },
        "sOOGo": function (_0xce807f, _0x1e6b29) {
          return _0xce807f(_0x1e6b29);
        },
        "AsTBH": function (_0x296c6a, _0x234ca0) {
          return _0x296c6a(_0x234ca0);
        },
        "skOrk": "饭补广告",
        "qcTYu": "forEach",
        "BVpbU": function (_0x382e26, _0x44a917) {
          return _0x382e26(_0x44a917);
        },
        "MGMMB": "hreshold",
        "xlADd": function (_0x8386a7, _0x2a2955) {
          return _0x8386a7 + _0x2a2955;
        },
        "IyGiv": function (_0x502717, _0xfb0357) {
          return _0x502717(_0xfb0357);
        },
        "FHZvl": "salt",
        "oeYJw": _0x68db9b("d420", 2096),
        "Oujda": function (_0x4dde38, _0x47ef55) {
          return _0x4dde38(_0x47ef55);
        },
        "WpvcT": function (_0x36c026, _0x36dbf7) {
          return _0x36c026 + _0x36dbf7;
        },
        "lyKua": function (_0x392ebe, _0x2ce8aa) {
          return _0x392ebe + _0x2ce8aa;
        },
        "yPKmH": _0x68db9b("Iw8c", 1785) + ".kua",
        "JRpBX": function (_0x576d27, _0x58960d) {
          return _0x576d27(_0x58960d);
        },
        "mvNLw": _0x68db9b("AeJl", 2029),
        "EOmxK": function (_0x4451bf, _0xadc08) {
          return _0x4451bf + _0xadc08;
        },
        "JxvFI": function (_0x4743ec, _0x3d4d2f) {
          return _0x4743ec + _0x3d4d2f;
        },
        "HiMOZ": function (_0x451b98, _0x10b616) {
          return _0x451b98 + _0x10b616;
        },
        "MASYm": function (_0x42032e, _0xcf75f0) {
          return _0x42032e + _0xcf75f0;
        },
        "SRMIB": _0x68db9b("Z@bN", 843) + "a/5.",
        "XccDN": "Androi" + _0x68db9b("Iw8c", 1614),
        "mpWor": function (_0x1b3e7a, _0xe643b5) {
          return _0x1b3e7a(_0xe643b5);
        },
        "CSqZe": function (_0x35d300, _0x1ab8ce) {
          return _0x35d300(_0x1ab8ce);
        },
        "uecWH": _0x68db9b("yuIP", 2371) + "6 (K",
        "JnmYl": " Gecko" + _0x68db9b("^s2q", 1411),
        "ndWcE": _0x68db9b("$r&&", 1047) + "e Sa",
        "KzChu": _0x68db9b("cV6N", 2888) + _0x68db9b("FbMW", 3393),
        "fhtZy": function (_0x44c952, _0x8cba02) {
          return _0x44c952(_0x8cba02);
        },
        "Nppuj": function (_0x2022f7, _0x3bd9dd) {
          return _0x2022f7(_0x3bd9dd);
        },
        "tZHga": _0x68db9b("z$^9", 2055) + _0x68db9b("r#&P", 1757),
        "shqMM": function (_0x1a1a93, _0x396006) {
          return _0x1a1a93 + _0x396006;
        },
        "DICXU": _0x68db9b("yuIP", 765) + _0x68db9b("#f!g", 3397),
        "zVfCJ": _0x68db9b("X#K!", 2068) + _0x68db9b("$]wl", 2507),
        "QNRKb": _0x68db9b("$r&&", 1019),
        "gbTqB": _0x68db9b("68zl", 1747),
        "WCfjv": "宝箱广告",
        "CQwpt": _0x68db9b("aiqQ", 2806),
        "uPnHm": function (_0x45b9ab, _0x1b5905) {
          return _0x45b9ab + _0x1b5905;
        },
        "YcTfb": function (_0x57be89, _0x43e677) {
          return _0x57be89 + _0x43e677;
        },
        "YTDzs": function (_0xce181b, _0x4aefdf) {
          return _0xce181b + _0x4aefdf;
        },
        "VAoWw": function (_0x4d2026, _0x2ceb13) {
          return _0x4d2026 + _0x2ceb13;
        },
        "anQLw": function (_0x2cb1e0, _0x12e9a6) {
          return _0x2cb1e0 + _0x12e9a6;
        },
        "GwFaZ": function (_0x1dfdd9, _0x44d963) {
          return _0x1dfdd9 + _0x44d963;
        },
        "VBSrm": function (_0x2cd8e8, _0x292d8f) {
          return _0x2cd8e8 + _0x292d8f;
        },
        "tYHAS": function (_0x29ed8a, _0x1fccae) {
          return _0x29ed8a + _0x1fccae;
        },
        "lYcIl": function (_0x171cb4, _0x5bdef3) {
          return _0x171cb4 + _0x5bdef3;
        },
        "YrGHa": function (_0x4c8f67, _0x444061) {
          return _0x4c8f67 + _0x444061;
        },
        "foebd": function (_0x2b7876, _0x14e994) {
          return _0x2b7876 + _0x14e994;
        },
        "WNTAy": function (_0x4e3b06, _0x4490d4) {
          return _0x4e3b06 + _0x4490d4;
        },
        "dVwPU": function (_0x3cddc3, _0x22f716) {
          return _0x3cddc3 + _0x22f716;
        },
        "BVjev": function (_0x6c739c, _0x436ea3) {
          return _0x6c739c + _0x436ea3;
        },
        "DMQDT": function (_0x47f1d0, _0xee3b91) {
          return _0x47f1d0 + _0xee3b91;
        },
        "UoTwa": function (_0x36ba1c, _0x491b15) {
          return _0x36ba1c + _0x491b15;
        },
        "kragi": function (_0x559941, _0x267294) {
          return _0x559941 + _0x267294;
        },
        "MvnNA": function (_0x3c268a, _0x1dc98a) {
          return _0x3c268a + _0x1dc98a;
        },
        "AUBEF": function (_0x5d6d7a, _0x13f460) {
          return _0x5d6d7a + _0x13f460;
        },
        "aZuMj": function (_0x1bb3da, _0x2291a0) {
          return _0x1bb3da + _0x2291a0;
        },
        "OtLff": function (_0xe5ad05, _0x2df978) {
          return _0xe5ad05 + _0x2df978;
        },
        "ZBrEj": function (_0x4acef6, _0x3f801d) {
          return _0x4acef6 + _0x3f801d;
        },
        "oUFtq": function (_0x1d4347, _0x1f769d) {
          return _0x1d4347 + _0x1f769d;
        },
        "VMhbk": function (_0x534cff, _0x1d19e0) {
          return _0x534cff + _0x1d19e0;
        },
        "vbhPu": "QiOjEx" + _0x68db9b("wsz*", 2526),
        "OdyrV": _0x68db9b("PvqJ", 2039) + _0x68db9b("Kd26", 1699),
        "LpXcG": _0x68db9b("68zl", 2589) + _0x68db9b("B)gy", 919),
        "VlhKX": "wicG9z" + _0x68db9b("yuIP", 948),
        "EfWDk": "Ojk2MTM0LC",
        "usphL": _0x68db9b("z$^9", 2422) + _0x68db9b("aiqQ", 3347),
        "xnvZE": function (_0x4870b2, _0x52e733) {
          return _0x4870b2(_0x52e733);
        },
        "NBPfd": "I0YmJiMWI1",
        "zsPDs": "OTBiZD" + _0x68db9b("qZz4", 787),
        "edEaf": "Njg5MT" + _0x68db9b("h0ri", 3120),
        "KgPIy": _0x68db9b("lMAw", 3316) + _0x68db9b("l[QS", 1947),
        "PGEXv": _0x68db9b("FbMW", 863) + _0x68db9b("rEA3", 1078),
        "OPNEJ": "MwMjE3MjU0",
        "yQhHR": function (_0x22a6db, _0x42a770) {
          return _0x22a6db(_0x42a770);
        },
        "NhIrG": function (_0x44dd68, _0xd44869) {
          return _0x44dd68(_0xd44869);
        },
        "nguao": _0x68db9b("^s2q", 1585) + _0x68db9b("t&mx", 3089),
        "tPOfY": _0x68db9b("^R3S", 3280) + _0x68db9b("wsz*", 1499),
        "JJtpN": _0x68db9b("#uGO", 3051) + _0x68db9b("5ZNg", 1977),
        "QIJeq": function (_0x2b5bae, _0x1a8a60) {
          return _0x2b5bae(_0x1a8a60);
        },
        "CyiiI": _0x68db9b("aiqQ", 3578) + "YyI6",
        "hobAR": "bnVsbC" + _0x68db9b("3ipA", 1546),
        "Ojsqc": _0x68db9b("cV6N", 3502) + "51bG",
        "MgOLb": function (_0x1a7275, _0x15d46e) {
          return _0x1a7275(_0x15d46e);
        },
        "UtrXM": _0x68db9b("xkwi", 1908) + _0x68db9b("qZz4", 2412),
        "HJjKW": _0x68db9b("5ZNg", 2535) + _0x68db9b("Kd26", 2098),
        "KDlcV": function (_0x5bb29b, _0x550c15) {
          return _0x5bb29b(_0x550c15);
        },
        "MTEeQ": "AsIm1peGVk",
        "ACafv": _0x68db9b("cV6N", 1899) + _0x68db9b("#uGO", 2295),
        "NhzWp": function (_0x3e325d, _0x776308) {
          return _0x3e325d(_0x776308);
        },
        "lMhyd": _0x68db9b("8OI@", 2745) + "aElu",
        "owtJV": _0x68db9b("yuIP", 1837) + _0x68db9b("G![J", 3319),
        "zaaUD": _0x68db9b("q(oB", 1564) + "eU1q",
        "tPIkt": "all0TV" + _0x68db9b("h0ri", 1276),
        "tYSZr": "5EYzVOeTB5",
        "deyok": "TURBdF" + _0x68db9b("ZVXe", 3526),
        "OKpoE": _0x68db9b("B)gy", 772) + _0x68db9b("$r&&", 2004),
        "FLcbA": _0x68db9b("lMAw", 1001) + _0x68db9b("X#K!", 3135),
        "oJpSP": function (_0x4c1691, _0xacc946) {
          return _0x4c1691(_0xacc946);
        },
        "YFnIP": function (_0x1f0013, _0x25e9c5) {
          return _0x1f0013(_0x25e9c5);
        },
        "PtgsQ": function (_0x5d56f9, _0x3ad5d8) {
          return _0x5d56f9(_0x3ad5d8);
        },
        "zLtrz": _0x68db9b("PvqJ", 730) + "LCJl",
        "cfxrw": function (_0x18c730, _0x19603c) {
          return _0x18c730 + _0x19603c;
        },
        "ZMyKL": function (_0x10c552, _0x515ab9) {
          return _0x10c552(_0x515ab9);
        },
        "nbaLd": _0x68db9b("G![J", 1791),
        "akVrZ": _0x68db9b("Caa8", 2130) + _0x68db9b("r#&P", 807),
        "lyJyY": function (_0x14ba75, _0x53dc07) {
          return _0x14ba75 + _0x53dc07;
        },
        "LbtvZ": function (_0x5f4875, _0x547307) {
          return _0x5f4875(_0x547307);
        },
        "MKweE": "treak",
        "fdXJW": function (_0x2921be, _0x58a994) {
          return _0x2921be + _0x58a994;
        },
        "XdxgB": "immedi" + _0x68db9b("X#K!", 2391),
        "GWTih": function (_0x555f84, _0x5db6ca) {
          return _0x555f84(_0x5db6ca);
        },
        "csdJK": _0x68db9b("yuIP", 1085) + _0x68db9b("68zl", 2038),
        "FqgHV": function (_0x1033c3, _0x5b429c) {
          return _0x1033c3(_0x5b429c);
        },
        "lJYdM": function (_0x201c6d, _0x25cff9) {
          return _0x201c6d(_0x25cff9);
        },
        "kdBfI": "iVTDf",
        "TaBzX": "curren" + _0x68db9b("lMAw", 2122),
        "PMSMr": "tasksToExe",
        "VshmD": "cute",
        "rsejq": function (_0x13ca14, _0x59b8a6) {
          return _0x13ca14(_0x59b8a6);
        }
      };
      function _0x68db9b(_0x538daf, _0x236a02) {
        return _0x1c8f12(_0x538daf, _0x236a02 - 492);
      }
      const _0x112722 = K,
        _0x21a708 = {
          "XbooY": _0x112722(366),
          "yrdgO": _0x112722(859),
          "MmsJZ": _0x3bdc8f.XDAhQ,
          "LLerg": _0x3bdc8f.qJBTi(_0x112722, 695),
          "PTFKJ": function (_0x5716b0, _0x343d8d) {
            return _0x5716b0 + _0x343d8d;
          },
          "uddUx": "proxyUrl",
          "XvRgL": _0x3bdc8f.qJBTi(_0x112722, 574),
          "sJAIT": _0x68db9b("t&mx", 3300) + "live",
          "LITvd": _0x68db9b("lMAw", 2897) + _0x68db9b("xb56", 1054) + _0x3bdc8f.ZAVpV(_0x112722, 592),
          "pdIaj": _0x3bdc8f[_0x68db9b("X#K!", 2989)](_0x112722, 842),
          "HAmvp": _0x3bdc8f.AsTBH(_0x112722, 682),
          "PmUXa": _0x3bdc8f[_0x68db9b("ZVXe", 3063)],
          "pdokE": "搜索广告",
          "YQytJ": _0x3bdc8f.qcTYu,
          "SazIB": _0x3bdc8f.JqjeK(_0x3bdc8f.BVpbU(_0x112722, 380), _0x3bdc8f[_0x68db9b("i]Oi", 2454)]),
          "TFVhG": _0x3bdc8f[_0x68db9b("Kd26", 888)](_0x112722(643), _0x112722(808)),
          "iVTDf": _0x112722(377) + _0x68db9b("PvqJ", 1337),
          "knjif": _0x3bdc8f.xlADd(_0x3bdc8f.IyGiv(_0x112722, 543), _0x68db9b("i]Oi", 1825))
        };
      this[_0x112722(542)] = _0x180ff3;
      this[_0x3bdc8f.FHZvl] = _0x567d66;
      this[_0x21a708[_0x112722(770)]] = _0x28587f;
      this[_0x21a708.LLerg] = nickname || remark || _0x21a708[_0x3bdc8f.oeYJw]("账号", _0x180ff3);
      this[_0x68db9b("cV6N", 2782)] = remark;
      this[_0x21a708[_0x112722(674)]] = proxyUrl;
      this[_0x21a708.XvRgL] = KSCOIN_LIMIT_FINAL;
      this[_0x3bdc8f[_0x68db9b("AeJl", 1796)](_0x112722(401), "ed")] = false;
      this[_0x3bdc8f[_0x68db9b("B)gy", 2769)](_0x112722, 643) + _0x68db9b("G![J", 1325)] = tasksToExecute;
      this[_0x3bdc8f[_0x68db9b("Bugr", 2076)](_0x68db9b("G![J", 1533) + _0x68db9b("lMAw", 2114), _0x68db9b("Iw8c", 1481) + "o")]();
      this[_0x68db9b("FbMW", 2064) + "s"] = {
        "Host": _0x3bdc8f[_0x68db9b("PvqJ", 753)](_0x3bdc8f.yPKmH, _0x3bdc8f.JRpBX(_0x112722, 694)),
        "Connection": _0x21a708[_0x3bdc8f[_0x68db9b("X#K!", 1635)]],
        "User-Agent": _0x3bdc8f[_0x68db9b("aiqQ", 3080)](_0x3bdc8f[_0x68db9b("Iw8c", 708)](_0x3bdc8f[_0x68db9b("g1XK", 2360)](_0x3bdc8f[_0x68db9b("3ipA", 2503)](_0x3bdc8f[_0x68db9b("Iw8c", 995)](_0x3bdc8f[_0x68db9b("0qEw", 1426)](_0x3bdc8f.diBMT(_0x3bdc8f[_0x68db9b("aiqQ", 1717)](_0x3bdc8f.HiMOZ(_0x3bdc8f.SRMIB, _0x112722(411)), _0x3bdc8f.XccDN) + _0x3bdc8f.mpWor(_0x112722, 703) + (_0x68db9b("rEA3", 3390) + _0x68db9b("$]wl", 790)) + _0x3bdc8f[_0x68db9b("FweH", 1538)](_0x112722, 347), "002; wv) A"), _0x112722(727)), _0x3bdc8f[_0x68db9b("yuIP", 2326)]) + _0x112722(832), _0x3bdc8f[_0x68db9b("OjOj", 1286)]) + _0x112722(329) + _0x112722(572) + _0x112722(419), _0x3bdc8f[_0x68db9b("l[QS", 826)]), _0x112722(606)), "6"),
        "Cookie": this[_0x3bdc8f.XDAhQ],
        "content-type": _0x21a708[_0x112722(617)]
      };
      this[_0x3bdc8f.KzChu + _0x68db9b("hM!U", 3258)] = _0x3bdc8f.MASYm(_0x112722(461), _0x3bdc8f[_0x68db9b("hM!U", 1230)](_0x112722, 454)) + "rt";
      this[_0x112722(585)] = Date[_0x3bdc8f[_0x68db9b("FweH", 1538)](_0x112722, 794)]();
      this[_0x3bdc8f[_0x68db9b("wsz*", 2483)](_0x112722, 630)] = this[_0x112722(585)] - 30000;
      this[_0x3bdc8f.WpvcT(_0x3bdc8f[_0x68db9b("q(oB", 949)], "s")] = _0x3bdc8f[_0x68db9b("t&mx", 2252)](_0x21a708[_0x3bdc8f.oeYJw](_0x3bdc8f[_0x68db9b("ZyH)", 1907)](_0x3bdc8f.DICXU + _0x3bdc8f[_0x68db9b("68zl", 1471)] + _0x68db9b("hM!U", 3400), this[_0x3bdc8f.QNRKb]) + _0x21a708[_0x112722(845)], this[_0x3bdc8f[_0x68db9b("r#&P", 2436)]]), "&did=") + this[_0x21a708[_0x112722(403)]];
      this[_0x68db9b("#f!g", 1924) + _0x68db9b("0qEw", 2665) + "s"] = {
        "box": {
          "name": _0x3bdc8f[_0x68db9b("ZVXe", 748)],
          "businessId": 606,
          "posId": 20346,
          "subPageId": 100024064,
          "requestSceneType": 1,
          "taskType": 1
        },
        "look": {
          "name": "看广告得金币",
          "businessId": 672,
          "posId": 24067,
          "subPageId": 100026367,
          "requestSceneType": 1,
          "taskType": 1
        },
        "food": {
          "name": _0x21a708[_0x68db9b("%Dq0", 2715)],
          "businessId": 9362,
          "posId": 24067,
          "subPageId": 100026367,
          "requestSceneType": 7,
          "taskType": 2
        },
        "search": {
          "name": _0x21a708[_0x3bdc8f[_0x68db9b("$r&&", 3069)]],
          "businessId": 7038,
          "posId": 96134,
          "subPageId": 100161537,
          "pageId": 11014,
          "requestSceneType": 1,
          "taskType": 2,
          "linkUrl": _0x3bdc8f[_0x68db9b("Bugr", 1681)](_0x3bdc8f.YcTfb(_0x3bdc8f[_0x68db9b("aiqQ", 1259)](_0x3bdc8f.uPnHm(_0x3bdc8f.YTDzs(_0x3bdc8f.EOmxK(_0x3bdc8f[_0x68db9b("$r&&", 2799)](_0x3bdc8f[_0x68db9b("3ipA", 1266)](_0x3bdc8f[_0x68db9b("Kd26", 888)](_0x3bdc8f[_0x68db9b("PvqJ", 2323)](_0x3bdc8f.lyKua(_0x3bdc8f[_0x68db9b("Z@bN", 1321)](_0x3bdc8f.diBMT(_0x3bdc8f.GwFaZ(_0x3bdc8f[_0x68db9b("q(oB", 3368)](_0x3bdc8f[_0x68db9b("Kd26", 2586)](_0x3bdc8f.VBSrm(_0x3bdc8f.YTDzs(_0x3bdc8f.shqMM(_0x3bdc8f[_0x68db9b("t&mx", 3629)](_0x3bdc8f.EOmxK(_0x3bdc8f[_0x68db9b("#uGO", 2080)](_0x3bdc8f.lYcIl(_0x3bdc8f.YrGHa(_0x3bdc8f.foebd(_0x3bdc8f.WNTAy(_0x3bdc8f[_0x68db9b("cV6N", 3609)](_0x3bdc8f[_0x68db9b("68zl", 1232)](_0x3bdc8f.BVjev(_0x3bdc8f[_0x68db9b("OjOj", 2564)](_0x3bdc8f[_0x68db9b("^R3S", 2809)](_0x3bdc8f[_0x68db9b("3ipA", 3223)](_0x3bdc8f[_0x68db9b("8OI@", 2861)](_0x3bdc8f.anQLw(_0x3bdc8f[_0x68db9b("5ZNg", 2475)](_0x3bdc8f[_0x68db9b("Kd26", 3372)](_0x3bdc8f.DMQDT(_0x3bdc8f[_0x68db9b("Z@bN", 1816)](_0x3bdc8f.kragi(_0x3bdc8f[_0x68db9b("Bugr", 3391)](_0x3bdc8f[_0x68db9b("OjOj", 1974)](_0x3bdc8f[_0x68db9b("PvqJ", 2187)](_0x3bdc8f[_0x68db9b("3ipA", 2503)](_0x3bdc8f.aZuMj(_0x3bdc8f.OtLff(_0x3bdc8f[_0x68db9b("i]Oi", 1962)](_0x3bdc8f[_0x68db9b("#f!g", 897)](_0x3bdc8f.foebd(_0x3bdc8f.WNTAy(_0x3bdc8f[_0x68db9b("0qEw", 3075)](_0x3bdc8f.diBMT(_0x3bdc8f[_0x68db9b("wsz*", 1750)](_0x3bdc8f.oUFtq(_0x3bdc8f.VMhbk(_0x3bdc8f.BVpbU(_0x112722, 437) + _0x3bdc8f[_0x68db9b("^s2q", 2415)] + (_0x68db9b("^s2q", 3158) + _0x68db9b("2PQv", 1268)), _0x3bdc8f[_0x68db9b("wsz*", 2922)]) + _0x3bdc8f.LpXcG, _0x3bdc8f[_0x68db9b("%Dq0", 903)]), _0x3bdc8f.EfWDk), _0x3bdc8f[_0x68db9b("z$^9", 2597)]), _0x112722(710)) + _0x112722(459) + _0x3bdc8f[_0x68db9b("OjOj", 1901)](_0x112722, 518) + _0x3bdc8f[_0x68db9b("h0ri", 3105)] + _0x3bdc8f.zsPDs, _0x68db9b("l[QS", 3540) + _0x68db9b("t&mx", 3267)) + _0x3bdc8f.edEaf, _0x3bdc8f[_0x68db9b("#uGO", 944)]) + _0x112722(330) + _0x3bdc8f.PGEXv + _0x112722(629), _0x112722(447)), _0x68db9b("xb56", 1496) + "FlYj") + _0x112722(731) + _0x112722(452), _0x3bdc8f[_0x68db9b("#f!g", 3565)]), "N2U1ZT" + _0x68db9b("3ipA", 1529)), _0x112722(373)), _0x3bdc8f[_0x68db9b("&t&m", 2032)](_0x112722, 746)), _0x3bdc8f.NhIrG(_0x112722, 789)) + _0x112722(692) + _0x3bdc8f.nguao + "ODdmMmQzYz" + _0x112722(665), _0x112722(498)), _0x112722(336)), _0x112722(384)) + ("U5ZDIx" + _0x68db9b("$r&&", 2525)) + _0x112722(593), _0x3bdc8f.JmepL(_0x112722, 573)), _0x3bdc8f[_0x68db9b("&t&m", 3260)]), _0x3bdc8f.JJtpN), _0x3bdc8f.QIJeq(_0x112722, 443)) + _0x3bdc8f[_0x68db9b("OjOj", 3095)], _0x3bdc8f.hobAR) + (_0x68db9b("G![J", 3036) + _0x68db9b("&t&m", 1663)) + _0x3bdc8f[_0x68db9b("rEA3", 2837)] + _0x3bdc8f.Nppuj(_0x112722, 506), _0x3bdc8f.BVpbU(_0x112722, 625)), _0x68db9b("aiqQ", 2834) + _0x68db9b("yuIP", 1759)), _0x3bdc8f[_0x68db9b("Z@bN", 802)](_0x112722, 535)), _0x3bdc8f[_0x68db9b("3ipA", 3570)](_0x112722, 635)), _0x3bdc8f.UtrXM) + (_0x68db9b("Kd26", 2378) + "OjAs"), _0x112722(510)) + (_0x68db9b("G![J", 740) + "Z2VJ"), "ZCI6MCwiY2") + _0x112722(560) + _0x3bdc8f[_0x68db9b("AeJl", 2370)](_0x112722, 473) + _0x3bdc8f.qwFVu(_0x112722, 851), _0x112722(855)) + _0x3bdc8f.HJjKW, _0x3bdc8f[_0x68db9b("Kd26", 3378)](_0x112722, 386)) + _0x3bdc8f[_0x68db9b("l[QS", 2320)], _0x68db9b("g1XK", 2952) + "RydW") + _0x3bdc8f.MgOLb(_0x112722, 556), _0x68db9b("X#K!", 3195) + "I6dH"), _0x112722(438)), _0x112722(706)) + _0x3bdc8f[_0x68db9b("B)gy", 3344)], _0x68db9b("Iw8c", 2901) + _0x68db9b("^R3S", 2024)) + (_0x68db9b("g1XK", 2975) + "ZXIi") + _0x3bdc8f[_0x68db9b("xkwi", 1187)](_0x112722, 798), _0x3bdc8f[_0x68db9b("0qEw", 1077)]) + ("c3Bpcm" + _0x68db9b("0qEw", 2728)) + _0x112722(725), _0x68db9b("Caa8", 2234) + "NlYX"), _0x112722(427)) + (_0x68db9b("Caa8", 1477) + _0x68db9b("X#K!", 2702)), _0x68db9b("r#&P", 1034) + _0x68db9b("lMAw", 2852)), _0x112722(444)), _0x3bdc8f.owtJV) + _0x3bdc8f[_0x68db9b("g1XK", 2469)](_0x112722, 348), "FOVE0z" + _0x68db9b("#uGO", 833)), _0x3bdc8f[_0x68db9b("OjOj", 1357)](_0x112722, 656)), _0x3bdc8f[_0x68db9b("l[QS", 1137)]) + _0x112722(772) + _0x112722(768) + _0x3bdc8f.tPIkt, _0x3bdc8f.tYSZr) + _0x3bdc8f.deyok, _0x3bdc8f[_0x68db9b("B)gy", 2345)]), _0x3bdc8f[_0x68db9b("aiqQ", 2912)]), _0x3bdc8f.fhtZy(_0x112722, 868)), _0x68db9b("cV6N", 731) + _0x68db9b("qZz4", 3342)) + _0x3bdc8f[_0x68db9b("3ipA", 3419)](_0x112722, 505), _0x3bdc8f[_0x68db9b("d420", 1873)](_0x112722, 525)), "1ETTFN" + _0x68db9b("qZz4", 2536)), _0x3bdc8f.PtgsQ(_0x112722, 594)), _0x3bdc8f.zLtrz) + (_0x68db9b("ZyH)", 1419) + "NvdX") + _0x112722(352) + (_0x3bdc8f.cfxrw(_0x3bdc8f.aZuMj(_0x3bdc8f[_0x68db9b("&t&m", 829)](_0x112722, 853) + (_0x68db9b("aiqQ", 1103) + _0x68db9b("68zl", 1457)), _0x3bdc8f[_0x68db9b("OjOj", 2348)](_0x112722, 409)) + ("NvbCJ9" + _0x68db9b("&t&m", 2419)), _0x112722(398)) + _0x3bdc8f[_0x68db9b("X#K!", 2408)])
        }
      };
      this[_0x3bdc8f.akVrZ] = {};
      this[_0x3bdc8f.lyJyY(_0x3bdc8f[_0x68db9b("PvqJ", 850)](_0x112722, 643), _0x3bdc8f.LbtvZ(_0x112722, 808))][_0x21a708[_0x68db9b("q(oB", 786)]](_0x10e68a => {
        const _0x39927e = _0x112722;
        function _0xdfcd64(_0x15de41, _0x103441) {
          return _0x68db9b(_0x15de41, _0x103441 - -1242);
        }
        _0x3bdc8f[_0xdfcd64("lMAw", 278)] !== _0x21a708[_0xdfcd64("ZyH)", -266)] ? _0x28587f = _0x21a708 : this[_0x3bdc8f.diBMT(_0x39927e(730), "s")][_0x10e68a] && (this[_0x3bdc8f[_0xdfcd64("PvqJ", 2279)](_0x39927e, 829)][_0x10e68a] = {
          "success": 0,
          "failed": 0,
          "totalReward": 0
        });
      });
      this[_0x3bdc8f[_0x68db9b("d420", 2178)](_0x3bdc8f[_0x68db9b("A$(g", 1287)](_0x112722, 822), _0x3bdc8f[_0x68db9b("i]Oi", 1777)])] = 0;
      this[_0x3bdc8f[_0x68db9b("t&mx", 844)](_0x3bdc8f[_0x68db9b("g1XK", 744)] + _0x112722(689), "ld")] = IMMEDIATE_STOP_THRESHOLD_FINAL;
      this[_0x21a708[_0x112722(849)]] = LOW_REWARD_THRESHOLD_FINAL;
      this[_0x3bdc8f.GWTih(_0x112722, 767) + "imit"] = LOW_REWARD_LIMIT_FINAL;
      this[_0x3bdc8f[_0x68db9b("Iw8c", 2410)] + "ks"] = false;
      this[_0x3bdc8f[_0x68db9b("#uGO", 1454)](_0x112722, 807) + _0x68db9b("#uGO", 3548)] = {};
      this[_0x21a708[_0x3bdc8f[_0x68db9b("h0ri", 3150)](_0x112722, 533)]][_0x3bdc8f.lJYdM(_0x112722, 620)](_0x5b01f9 => {
        function _0x461bda(_0x1b1cc8, _0x13e678) {
          return _0x68db9b(_0x13e678, _0x1b1cc8 - -193);
        }
        if ("rjESk" === _0x3bdc8f[_0x461bda(3243, "A$(g")]) {
          const _0x16760e = _0x112722;
          _0x21a708[_0x16760e(650)] === _0x16760e(859) ? this[_0x3bdc8f[_0x461bda(1171, "X#K!")] + "s"][_0x5b01f9] && (this[_0x461bda(1277, "5ZNg") + "mitR" + _0x16760e(532)][_0x5b01f9] = false) : (_0x28587f[_0x3bdc8f[_0x461bda(1332, "FbMW")](_0x16760e, 501)](_0x3bdc8f[_0x461bda(3241, "FbMW")](_0x461bda(1792, "d420") + _0x461bda(3246, "KgIb"), _0x3bdc8f.GsEHk)), _0x21a708.log(_0x3bdc8f.diBMT(_0x16760e(671), _0x3bdc8f.JmepL(_0x16760e, 568))), process[_0x3bdc8f[_0x461bda(2117, "X#K!")](_0x16760e, 583)](1));
        } else {
          const _0x3d68a2 = _0x38b399[_0xcf3298(775)] || _0x3bdc8f[_0x461bda(2451, "Bugr")];
          _0x33d584[_0x461bda(2631, "OjOj")](_0x925ca0[_0x461bda(512, "&t&m")](_0x3bdc8f.JqjeK("❌ " + this[_0xcee945[_0x461bda(803, "xkwi")]](), _0x35e164(796)), _0x3d68a2));
          _0x3d68a2[_0x3bdc8f[_0x461bda(1330, "i]Oi")]](_0x3bdc8f.xbDoS(_0x16f91d, 325)) && (_0x35b718++, _0x402749[_0x59c552(501)](_0x3bdc8f[_0x461bda(2596, "Kd26")](_0x3bdc8f[_0x461bda(1718, "i]Oi")](_0x4501de, 361) + " " + _0x32d334, "/") + _0x493166), _0x258e9b >= _0x4a9b14 && (_0x4d6a4a[_0x461bda(3121, "3ipA")](_0x3bdc8f.DxinS + _0x3bdc8f[_0x461bda(978, "d420")](_0x26a4ba, 756)), _0x910b2d[_0x962302(501)](_0x54afb9[_0x3bdc8f[_0x461bda(942, "G![J")](_0x35fd74, 549)]), _0x57e864[_0x3bdc8f[_0x461bda(2010, "68zl")]](1)));
          return null;
        }
      });
      this[_0x21a708[_0x3bdc8f.kdBfI]] = false;
      this[_0x3bdc8f[_0x68db9b("z$^9", 3242)] + "kIndex"] = 0;
      this[_0x3bdc8f[_0x68db9b("h0ri", 1898)](_0x112722, 833) + (_0x68db9b("rEA3", 759) + "gs")] = {};
      this[_0x3bdc8f[_0x68db9b("^s2q", 2836)](_0x3bdc8f[_0x68db9b("KgIb", 1527)], _0x3bdc8f[_0x68db9b("Bugr", 3072)])][_0x3bdc8f[_0x68db9b("xb56", 1919)](_0x112722, 620)](_0x7a4b0c => {
        function _0x2415f8(_0x1836bb, _0x436911) {
          return _0x68db9b(_0x1836bb, _0x436911 - -142);
        }
        if (_0x3bdc8f[_0x2415f8("lMAw", 2825)] !== _0x3bdc8f[_0x2415f8("ZVXe", 3126)]) {
          const _0xb039b9 = _0x112722;
          this[_0x3bdc8f.ZAVpV(_0xb039b9, 833) + _0x3bdc8f.hGdUG][_0x7a4b0c] = false;
        } else !_0x16b8f9[_0x2415f8("PvqJ", 2217)](_0x1753c3) && (_0x39bb17[_0x1c2a1c(340)](_0x431b5f), _0x587f8e[_0x3bdc8f[_0x2415f8("Iw8c", 2062)]](_0x300087));
      });
      this[_0x21a708[_0x68db9b("%Dq0", 3465)]] = this[_0x21a708[_0x112722(533)]][_0x3bdc8f.rsejq(_0x112722, 726)] === 1;
    }
    [K(723) + "Data"](_0x3b8301) {
      const _0x25d71b = {
        "ChEcH": function (_0x24cf34, _0x1b3871) {
          return _0x24cf34(_0x1b3871);
        },
        "NBmYM": function (_0x25e0e0, _0xff03cc) {
          return _0x25e0e0 === _0xff03cc;
        },
        "LUgbR": _0x6a6fc4("Iw8c", 2242),
        "qXvEu": _0x6a6fc4("Bugr", 3152) + "l"
      };
      function _0x6a6fc4(_0x1e78cc, _0x162102) {
        return _0x1c8f12(_0x1e78cc, _0x162102 - 48);
      }
      const _0x3aa078 = K,
        _0x2cf367 = {
          "vSjSh": _0x25d71b.ChEcH(_0x3aa078, 660),
          "xEkxf": _0x3aa078(485)
        };
      return _0x25d71b[_0x6a6fc4("ZVXe", 368)](_0x3b8301[_0x25d71b[_0x6a6fc4("AeJl", 2263)]], _0x3aa078(835)) ? JSON[_0x2cf367[_0x3aa078(776)]]({
        "openH5AdCount": 2,
        "sessionLookedCompletedCount": "1",
        "sessionType": "1",
        "searchKey": SEARCH_KEYWORD,
        "triggerType": "2",
        "disableReportToast": _0x2cf367[_0x25d71b[_0x6a6fc4("^s2q", 1127)](_0x3aa078, 499)],
        "businessEnterAction": "7",
        "neoParams": _0x3b8301[_0x25d71b[_0x6a6fc4("^R3S", 1471)]]
      }) : "{}";
    }
    async [_0x1c8f12("r#&P", 1729) + _0x1c8f12("hM!U", 510) + "imit"]() {
      const _0x236997 = {
          "loyNh": function (_0x87c36, _0x46e493) {
            return _0x87c36 !== _0x46e493;
          },
          "mAkZo": _0x2a5369("i]Oi", 632),
          "UHAhI": _0x2a5369("X#K!", 1241),
          "xEKQA": function (_0x65466c, _0x298db5, _0x201ba9, _0x53c11a) {
            return _0x65466c(_0x298db5, _0x201ba9, _0x53c11a);
          },
          "oUBme": _0x2a5369("Bugr", 2142),
          "IwiiY": function (_0x5f145c, _0x51c633) {
            return _0x5f145c(_0x51c633);
          },
          "xaedV": "LzhtS",
          "lEWhu": function (_0x50cbb5, _0x2efb4d) {
            return _0x50cbb5 + _0x2efb4d;
          },
          "TsbxE": _0x2a5369("8OI@", 2208),
          "pXNpH": function (_0x47fa33, _0x43d7f6) {
            return _0x47fa33(_0x43d7f6);
          },
          "dveLP": function (_0x52b100, _0x6895a0) {
            return _0x52b100 + _0x6895a0;
          },
          "HVlKU": _0x2a5369("wsz*", 2075),
          "CkZmk": function (_0x4c633c, _0x2dc9d7) {
            return _0x4c633c(_0x2dc9d7);
          },
          "uWwIV": _0x2a5369("xkwi", 2367) + "达 ",
          "ZOhdN": "，超过阈值 ",
          "FUIGw": "message",
          "gNUDm": function (_0x1834f1, _0x2a453c) {
            return _0x1834f1 === _0x2a453c;
          },
          "sghvf": function (_0xd74cfc, _0x5e2bde) {
            return _0xd74cfc !== _0x5e2bde;
          },
          "UXIfZ": _0x2a5369("Iw8c", 1081),
          "HPXAb": function (_0x1d8756, _0xc9c237) {
            return _0x1d8756(_0xc9c237);
          },
          "eAjhJ": "totalC" + _0x2a5369("#uGO", 2340),
          "tzeWy": function (_0x2d2d93, _0x21db59) {
            return _0x2d2d93 >= _0x21db59;
          },
          "BUQQx": _0x2a5369("aiqQ", 2741) + "mit",
          "NOuli": _0x2a5369("yuIP", 1670),
          "hakPl": function (_0x45f44a, _0x41a38a) {
            return _0x45f44a + _0x41a38a;
          },
          "treNh": function (_0x58416e, _0x371b87) {
            return _0x58416e + _0x371b87;
          },
          "QEJRC": _0x2a5369("0qEw", 2714) + _0x2a5369("g1XK", 1055),
          "YDvtZ": _0x2a5369("h0ri", 1821) + _0x2a5369("%Dq0", 1611),
          "NJIxZ": _0x2a5369("FweH", 998),
          "sffwE": "flaod",
          "xRGXo": function (_0x23b534, _0x41ab51) {
            return _0x23b534 + _0x41ab51;
          },
          "apaEN": "NMMKR"
        },
        _0x386acc = K,
        _0x474845 = {
          "nhlFT": _0x386acc(781),
          "XuWvd": function (_0x397d08, _0x2541f5, _0x59da40, _0x15cb9d) {
            function _0x518148(_0x306dc2, _0x5d38a1) {
              return _0x2a5369(_0x5d38a1, _0x306dc2 - -353);
            }
            if (_0x236997[_0x518148(-304, "FweH")](_0x236997.mAkZo, _0x236997.UHAhI)) return _0x236997[_0x518148(835, "rEA3")](_0x397d08, _0x2541f5, _0x59da40, _0x15cb9d);else {
              const _0x4d2ed7 = _0x4200d9 ? function () {
                if (_0x4fafeb) {
                  const _0x5aa2c0 = _0x4c64e1.apply(_0xc87cc8, arguments);
                  _0x2ac8a2 = null;
                  return _0x5aa2c0;
                }
              } : function () {};
              _0x48dce4 = false;
              return _0x4d2ed7;
            }
          },
          "jlemC": _0x236997[_0x2a5369("aiqQ", 2397)](_0x386acc, 819),
          "YLCET": function (_0x4ee0be, _0xef4fec) {
            return _0x4ee0be(_0xef4fec);
          },
          "bvfXw": _0x236997[_0x2a5369("rEA3", 336)],
          "flaod": _0x236997.ZOhdN,
          "gcZZL": _0x236997[_0x2a5369("#uGO", 585)](_0x386acc, 574),
          "UNugJ": _0x236997.CkZmk(_0x386acc, 644),
          "NMMKR": _0x236997.FUIGw
        };
      function _0x2a5369(_0x45ee6a, _0x25404d) {
        return _0x1c8f12(_0x45ee6a, _0x25404d - -386);
      }
      try {
        if (_0x236997[_0x2a5369("z$^9", 1134)](_0x2a5369("$r&&", 1079), "vKiew")) {
          if (_0x236997[_0x2a5369("#f!g", 1072)](_0x474845[_0x386acc(836)], _0x474845.nhlFT)) return {
            "success": false,
            "reward": 0,
            "hasRewardEnd": false
          };else {
            if (_0x236997[_0x2a5369("2PQv", 2134)](_0x2a5369("^s2q", 677), _0x236997[_0x2a5369("t&mx", 2622)])) {
              const _0x4bfc61 = await _0x474845[_0x236997[_0x2a5369("%Dq0", 2209)](_0x386acc, 678)](getAccountBasicInfo, this[_0x474845[_0x386acc(858)]], this[_0x2a5369("0qEw", 2758) + "rl"], this[_0x386acc(542)]);
              if (_0x4bfc61 && _0x4bfc61[_0x236997.eAjhJ]) {
                const _0x4cd4ef = _0x474845[_0x2a5369("qZz4", 142)](parseInt, _0x4bfc61[_0x236997[_0x2a5369("l[QS", 270)]]);
                if (_0x236997.tzeWy(_0x4cd4ef, this[_0x236997.BUQQx])) return console[_0x236997[_0x2a5369("t&mx", 2239)]](_0x236997[_0x2a5369("$r&&", 1634)](_0x386acc(681) + this[_0x236997.treNh(_0x236997[_0x2a5369("aiqQ", 1804)] + _0x236997[_0x2a5369("PvqJ", 471)], "e")]() + _0x474845[_0x236997.NJIxZ] + _0x4cd4ef + _0x474845[_0x236997[_0x2a5369("hM!U", 303)]] + this[_0x474845[_0x386acc(393)]], _0x386acc(582))), this[_0x236997.lEWhu(_0x386acc(401), "ed")] = true, this["stopAl" + _0x2a5369("d420", 993) + "ks"] = true, true;
              }
              return false;
            } else {
              if (_0x236997.oUBme !== _0x1f6585[_0x236997[_0x2a5369("aiqQ", 2077)](_0x483591, 514)]) _0x5901ee++, _0x365d60[_0x4d8bfb[_0x236997[_0x2a5369("hM!U", 2691)]]](_0x236997[_0x2a5369("Bugr", 2336)](_0x3c1436[_0x236997[_0x2a5369("ZVXe", 597)](_0x292043, 803)], _0x218858) + "/" + _0x202cc6), _0x16f294[_0x236997[_0x2a5369("t&mx", 2188)]](_0x203977, _0x29b391) && (_0x59eba7[_0x236997.pXNpH(_0x389023, 501)](_0x236997.dveLP(_0x2a5369("yuIP", 437) + _0x2a5369("AeJl", 1358), _0x236997.IwiiY(_0x1c53b5, 756))), _0x5135c6[_0x2a5369("rEA3", 795)](_0x470fbf[_0x236997.HVlKU]), _0x2536e8[_0x236997.CkZmk(_0x1d91cb, 583)](1));else return {
                "response": null,
                "body": null
              };
            }
          }
        } else return _0x558861 + _0x53134a;
      } catch (_0x1630f4) {
        console[_0x2a5369("PvqJ", 1145)](_0x236997[_0x2a5369("t&mx", 2439)]("❌ ", this[_0x236997.xRGXo(_0x2a5369("ZVXe", 2271) + "ount" + (_0x2a5369("$r&&", 418) + _0x2a5369("#uGO", 1562)), "e")]()) + _0x474845[_0x386acc(490)] + _0x1630f4[_0x474845[_0x236997[_0x2a5369("AeJl", 2383)]]]);
        return false;
      }
    }
    [K(412) + "DisplayNam" + "e"]() {
      const _0x20c691 = {
        "Jlwcr": function (_0x48d703, _0x431617) {
          return _0x48d703 + _0x431617;
        },
        "XIuPp": "AMDXq",
        "bdQwf": function (_0x45ab45, _0x2bd80a) {
          return _0x45ab45(_0x2bd80a);
        },
        "kGFbI": "remark"
      };
      function _0x102fb7(_0x569879, _0x2636dc) {
        return _0x1c8f12(_0x569879, _0x2636dc - 166);
      }
      const _0xe3f260 = K,
        _0x3593f8 = {
          "AMDXq": _0xe3f260(714),
          "xZIVY": function (_0x513cfb, _0x138bc7) {
            return _0x513cfb + _0x138bc7;
          }
        };
      return _0x20c691[_0x102fb7("Bugr", 591)](_0x20c691[_0x102fb7("Caa8", 1928)](_0x3593f8[_0x20c691[_0x102fb7("qZz4", 581)]], this[_0xe3f260(695)]), "]") + (this[_0xe3f260(425)] ? _0x20c691[_0x102fb7("FbMW", 730)](_0x3593f8[_0xe3f260(404)]("(", this[_0x20c691[_0x102fb7("g1XK", 1590)]]), ")") : "");
    }
    [_0x1c8f12("r#&P", 2452) + "tCoo" + K(741)]() {
      function _0x6c4863(_0x30b16f, _0x5395c0) {
        return _0x1c8f12(_0x5395c0, _0x30b16f - 137);
      }
      const _0x5808a3 = {
          "jtZCs": function (_0x598cde, _0xa460c6) {
            return _0x598cde + _0xa460c6;
          },
          "QxYEe": _0x6c4863(2223, "aiqQ"),
          "VwCGb": function (_0x121655, _0x3600bd) {
            return _0x121655(_0x3600bd);
          },
          "ebUeg": function (_0x20c3d7, _0x467c81) {
            return _0x20c3d7 + _0x467c81;
          },
          "fgefA": "DisplayNam",
          "lsNQm": _0x6c4863(3106, "AeJl"),
          "IFckP": "VKjCM",
          "FJxlP": _0x6c4863(2012, "lMAw"),
          "gZkhM": function (_0x5bc074, _0x4890e0) {
            return _0x5bc074(_0x4890e0);
          },
          "iJXnq": function (_0x51686b, _0x5259d5) {
            return _0x51686b + _0x5259d5;
          },
          "jOhiu": _0x6c4863(1501, "8OI@"),
          "snRqh": _0x6c4863(1478, "qZz4"),
          "GdGIi": function (_0x5ca8d7, _0x3320a7) {
            return _0x5ca8d7(_0x3320a7);
          },
          "zWhqa": function (_0x1ea4c7, _0x5866c7) {
            return _0x1ea4c7(_0x5866c7);
          },
          "ayRTS": function (_0x44b66e, _0x299e33) {
            return _0x44b66e(_0x299e33);
          },
          "UaavK": function (_0x12f2d5, _0x1ce941) {
            return _0x12f2d5 + _0x1ce941;
          },
          "uulDG": "💰 ",
          "KvkCu": function (_0x4e0a45, _0x5b2a75) {
            return _0x4e0a45(_0x5b2a75);
          },
          "BtUdw": function (_0x204cd9, _0x211fc6) {
            return _0x204cd9(_0x211fc6);
          },
          "tvrxS": function (_0x3bb31d, _0x47c567) {
            return _0x3bb31d(_0x47c567);
          },
          "ylVdz": "stopAl" + _0x6c4863(858, "Z@bN")
        },
        _0x58ea2d = K,
        _0x1b9d74 = {
          "VKjCM": _0x5808a3.QxYEe,
          "NCULh": _0x5808a3[_0x6c4863(1019, "g1XK")](_0x58ea2d, 406),
          "NxCgN": function (_0x183f13, _0x30ca44) {
            return _0x5808a3.jtZCs(_0x183f13, _0x30ca44);
          },
          "BFgdc": _0x5808a3[_0x6c4863(2164, "q(oB")](_0x6c4863(2010, "l[QS") + _0x6c4863(1008, "xb56") + _0x5808a3.fgefA, "e"),
          "lgVxz": _0x5808a3.VwCGb(_0x58ea2d, 584),
          "MhjHj": _0x5808a3.VwCGb(_0x58ea2d, 488)
        };
      try {
        const _0x5362a9 = this[_0x5808a3[_0x6c4863(1300, "$]wl")]][_0x5808a3[_0x6c4863(1135, "Iw8c")]](/egid=([^;]+)/),
          _0xd2c2e3 = this[_0x58ea2d(819)][_0x5808a3[_0x6c4863(1651, "#uGO")]](/did=([^;]+)/),
          _0x455b80 = this[_0x1b9d74[_0x5808a3.IFckP]][_0x5808a3.lsNQm](/userId=([^;]+)/),
          _0x1f60df = this[_0x5808a3.QxYEe][_0x5808a3.lsNQm](/kuaishou\.api_st=([^;]+)/),
          _0x57ff54 = this[_0x58ea2d(819)].match(/appver=([^;]+)/);
        this[_0x58ea2d(722)] = _0x5362a9 ? _0x5362a9[1] : "";
        this[_0x5808a3[_0x6c4863(650, "G![J")](_0x58ea2d, 682)] = _0xd2c2e3 ? _0xd2c2e3[1] : "";
        this[_0x1b9d74[_0x5808a3.VwCGb(_0x58ea2d, 744)]] = _0x455b80 ? _0x455b80[1] : "";
        this[_0x6c4863(3164, "A$(g") + "ouAp" + _0x5808a3.FJxlP] = _0x1f60df ? _0x1f60df[1] : "";
        this[_0x5808a3[_0x6c4863(1945, "B)gy")](_0x58ea2d, 576)] = _0x57ff54 ? _0x57ff54[1] : _0x5808a3.iJXnq("13.7.20.10", "468");
        (!this[_0x58ea2d(722)] || !this[_0x58ea2d(682)]) && console[_0x5808a3.jOhiu](_0x1b9d74[_0x58ea2d(762)](_0x5808a3[_0x6c4863(2275, "FweH")], this[_0x1b9d74[_0x5808a3[_0x6c4863(2138, "ZyH)")](_0x58ea2d, 360)]]()) + (_0x5808a3[_0x6c4863(1458, "AeJl")](_0x58ea2d(516), _0x5808a3.GdGIi(_0x58ea2d, 466)) + _0x58ea2d(658)));
      } catch (_0x29e448) {
        if (_0x1b9d74[_0x58ea2d(344)] !== _0x1b9d74[_0x5808a3[_0x6c4863(981, "%Dq0")](_0x58ea2d, 407)]) console[_0x58ea2d(501)]("❌ " + this[_0x5808a3.ebUeg(_0x5808a3[_0x6c4863(1904, "t&mx")](_0x58ea2d(412), _0x5808a3[_0x6c4863(1052, "X#K!")]), "e")]() + (_0x5808a3.ayRTS(_0x58ea2d, 517) + _0x6c4863(1185, "g1XK")) + _0x29e448[_0x6c4863(992, "^R3S") + "e"]);else return e[_0x5808a3[_0x6c4863(3131, "z$^9")]](_0x5808a3.UaavK(_0x5808a3[_0x6c4863(2673, "G![J")](_0x5808a3.uulDG + this[_0x5808a3.UaavK(_0x5808a3[_0x6c4863(2030, "X#K!")](_0x5808a3[_0x6c4863(2335, "OjOj")](_0x58ea2d, 412), _0x6c4863(2611, "FbMW") + "yNam"), "e")](), _0x5808a3[_0x6c4863(2894, "Z@bN")](_0x58ea2d, 449)), f) + _0x5808a3[_0x6c4863(599, "AeJl")](_0x58ea2d, 750) + this[_0x6c4863(838, "r#&P") + "mit"] + _0x58ea2d(582)), this[_0x5808a3[_0x6c4863(2030, "X#K!")]("coinExceed", "ed")] = true, this[_0x5808a3.ylVdz + "ks"] = true, true;
      }
    }
    [_0x1c8f12("OjOj", 2390) + _0x1c8f12("l[QS", 2205) + "ts"]() {
      const _0x214e1e = K;
      return this[_0x214e1e(829)];
    }
    [_0x1c8f12("FbMW", 500) + "askS" + _0x1c8f12("xkwi", 1098)]() {
      const _0x259f35 = {
          "FuvcD": _0x4b6662(2012, "xb56"),
          "BzgBu": function (_0x36ea81, _0x2823b3) {
            return _0x36ea81 * _0x2823b3;
          },
          "BpYMn": function (_0x597e72, _0x32cc85) {
            return _0x597e72 % _0x32cc85;
          },
          "kqPYg": _0x4b6662(2531, "Bugr") + _0x4b6662(-55, "Kd26"),
          "IDdVa": function (_0x1b1405, _0xd1c5d1) {
            return _0x1b1405 + _0xd1c5d1;
          },
          "gwQXV": function (_0xe86c5e, _0x363960) {
            return _0xe86c5e + _0x363960;
          },
          "diISe": _0x4b6662(2572, "$]wl"),
          "CPrde": _0x4b6662(2691, "$]wl"),
          "gAkHs": function (_0x2d12ff, _0x2f6454) {
            return _0x2d12ff(_0x2f6454);
          },
          "gahMO": _0x4b6662(2826, "qZz4"),
          "yCsWI": _0x4b6662(2644, "hM!U"),
          "jRbUa": function (_0x1636ff, _0x16a6a4) {
            return _0x1636ff + _0x16a6a4;
          },
          "MbdPZ": "getAccount",
          "VtFlc": function (_0x399561, _0x3b6da9) {
            return _0x399561(_0x3b6da9);
          },
          "SctwF": _0x4b6662(1556, "PvqJ") + _0x4b6662(921, "hM!U"),
          "CeOCA": _0x4b6662(66, "^R3S") + "nfig",
          "GvxbJ": "BIXgX",
          "ydmkL": function (_0x333384, _0x56b3ae) {
            return _0x333384 + _0x56b3ae;
          },
          "xSJqc": "BwTNf"
        },
        _0x104ffb = K,
        _0x516719 = {
          "DNLyf": _0x259f35.CPrde,
          "BIXgX": function (_0x475a59, _0x34d884) {
            function _0x1381ba(_0x2d068a, _0x3f0ce5) {
              return _0x4b6662(_0x2d068a - -288, _0x3f0ce5);
            }
            if (_0x259f35.diISe !== _0x259f35[_0x1381ba(1642, "^R3S")]) {
              const _0x1a01be = _0x1381ba(1094, "8OI@") + _0x1381ba(2070, "Iw8c") + "mnopqr" + _0x1381ba(455, "l[QS") + _0x1381ba(-162, "$]wl") + _0x1381ba(-29, "5ZNg") + _0x1381ba(332, "8OI@") + _0x1381ba(-131, "xb56") + "WXYZ01" + "234567" + "89+/=";
              let _0x5b4360 = "",
                _0x430d54 = "";
              for (let _0x3454da = 0, _0x519513, _0x5969a9, _0x40d43d = 0; _0x5969a9 = _0x2a41a4[_0x259f35[_0x1381ba(1194, "0qEw")]](_0x40d43d++); ~_0x5969a9 && (_0x519513 = _0x3454da % 4 ? _0x259f35.BzgBu(_0x519513, 64) + _0x5969a9 : _0x5969a9, _0x259f35.BpYMn(_0x3454da++, 4)) ? _0x5b4360 += _0x7e4b1a[_0x259f35[_0x1381ba(2140, "%Dq0")]](255 & _0x519513 >> (-2 * _0x3454da & 6)) : 0) {
                _0x5969a9 = _0x1a01be.indexOf(_0x5969a9);
              }
              for (let _0x4cafea = 0, _0x4bb166 = _0x5b4360[_0x1381ba(120, "xkwi")]; _0x4cafea < _0x4bb166; _0x4cafea++) {
                _0x430d54 += _0x259f35.IDdVa("%", _0x259f35.gwQXV("00", _0x5b4360[_0x1381ba(1908, "#uGO") + "deAt"](_0x4cafea)[_0x1381ba(1775, "Caa8") + "ng"](16))[_0x1381ba(878, "cV6N")](-2));
              }
              return _0x4eea83(_0x430d54);
            } else return _0x259f35[_0x1381ba(1106, "#uGO")](_0x475a59, _0x34d884);
          },
          "BwTNf": _0x4b6662(197, "A$(g"),
          "JMjmk": _0x259f35[_0x4b6662(892, "Z@bN")](_0x104ffb, 365) + "d"
        };
      function _0x4b6662(_0x499095, _0xc75906) {
        return _0x1c8f12(_0xc75906, _0x499095 - -263);
      }
      console[_0x516719[_0x259f35[_0x4b6662(49, "Z@bN")]]](_0x259f35[_0x4b6662(1727, "h0ri")](_0x259f35[_0x4b6662(2800, "z$^9")] + this[_0x259f35.jRbUa(_0x259f35[_0x4b6662(622, "ZVXe")] + _0x259f35[_0x4b6662(2836, "yuIP")](_0x104ffb, 388), "e")](), _0x259f35.VtFlc(_0x104ffb, 565)));
      for (const [_0x5b39b8, _0x1b152e] of Object[_0x104ffb(529)](this[_0x259f35[_0x4b6662(2209, "l[QS")]])) {
        const _0x4b990e = this[_0x259f35[_0x4b6662(696, "i]Oi")] + "s"][_0x5b39b8][_0x4b6662(378, "FweH")];
        console[_0x259f35.gAkHs(_0x104ffb, 501)](_0x516719[_0x259f35[_0x4b6662(1142, "Z@bN")]](_0x259f35[_0x4b6662(1408, "^R3S")](_0x259f35.jRbUa(_0x516719[_0x259f35.gAkHs(_0x104ffb, 693)](_0x259f35.ydmkL(_0x516719[_0x259f35.xSJqc] + _0x4b990e + ": 成功", _0x1b152e[_0x104ffb(690)]), _0x4b6662(675, "ZVXe")), _0x1b152e[_0x4b6662(2829, "d420")]), _0x259f35[_0x4b6662(2536, "Caa8")](_0x104ffb, 561)), _0x1b152e[_0x516719[_0x259f35.VtFlc(_0x104ffb, 783)]]) + "金币");
      }
    }
    async [K(709) + _0x1c8f12("r#&P", 2742)](_0x24b42b, _0x3121ed, _0x17ef48 = 5, _0x1d710e = 2000) {
      const _0x4c8cab = {
          "ANtgp": function (_0x489ab4, _0x782ac5) {
            return _0x489ab4(_0x782ac5);
          },
          "KFays": function (_0x2f8f41, _0x238580) {
            return _0x2f8f41 + _0x238580;
          },
          "gkCto": "getAcc" + _0x52a625("^R3S", 2158),
          "WNtvI": function (_0xf04182, _0x2e494c) {
            return _0xf04182 < _0x2e494c;
          },
          "TBUVs": function (_0x5db7f1) {
            return _0x5db7f1();
          },
          "JnPzL": function (_0x121f07, _0x26bdcf) {
            return _0x121f07 + _0x26bdcf;
          },
          "SzAyN": function (_0xce7743, _0x1e79d0) {
            return _0xce7743 !== _0x1e79d0;
          },
          "GFuQR": _0x52a625("g1XK", 3271),
          "EdiaZ": function (_0x4ab1bd, _0x31c3eb) {
            return _0x4ab1bd + _0x31c3eb;
          },
          "IuXxN": function (_0x514424, _0x1420c1) {
            return _0x514424 + _0x1420c1;
          },
          "MMeMy": _0x52a625("Iw8c", 670),
          "MBqSc": function (_0x329d32, _0xd5bba9) {
            return _0x329d32(_0xd5bba9);
          },
          "SjOKR": function (_0x3476a9, _0x54f673) {
            return _0x3476a9 + _0x54f673;
          }
        },
        _0x5b2aa1 = K,
        _0x3d1e4c = {
          "oRoSt": function (_0x295867, _0x4a9247) {
            return _0x295867 + _0x4a9247;
          },
          "IJyBh": "🔄 ",
          "DPsbj": _0x4c8cab[_0x52a625("^R3S", 996)](_0x5b2aa1, 753),
          "LhcVJ": _0x4c8cab[_0x52a625("KgIb", 1787)](_0x4c8cab[_0x52a625("d420", 626)], _0x4c8cab[_0x52a625("68zl", 1913)](_0x5b2aa1, 388)) + "e"
        };
      let _0x205b74 = 0,
        _0x1f94cb = null;
      while (_0x4c8cab.WNtvI(_0x205b74, _0x17ef48)) {
        try {
          const _0x506b7e = await _0x4c8cab.TBUVs(_0x24b42b);
          if (_0x506b7e) return _0x506b7e;
          _0x1f94cb = new Error(_0x4c8cab[_0x52a625("G![J", 2041)](_0x3121ed, _0x5b2aa1(486)));
        } catch (_0x544cb8) {
          if (_0x4c8cab[_0x52a625("B)gy", 490)](_0x4c8cab[_0x52a625("hM!U", 2330)], _0x4c8cab.GFuQR)) return _0x3bf772 <= _0x50146b;else _0x1f94cb = _0x544cb8;
        }
        _0x205b74++;
        _0x205b74 < _0x17ef48 && (console[_0x4c8cab.ANtgp(_0x5b2aa1, 501)](_0x4c8cab.KFays(_0x4c8cab.EdiaZ(_0x4c8cab[_0x52a625("#f!g", 2576)](_0x4c8cab[_0x52a625("X#K!", 2232)](_0x3d1e4c.oRoSt(_0x3d1e4c[_0x4c8cab[_0x52a625("Kd26", 587)]], this[_0x4c8cab[_0x52a625("FweH", 1948)](_0x4c8cab[_0x52a625("ZyH)", 2099)] + _0x4c8cab[_0x52a625("hM!U", 2871)](_0x5b2aa1, 388), "e")]()), " "), _0x3121ed) + _0x3d1e4c.DPsbj + _0x205b74, "/"), _0x17ef48)), await new Promise(_0x1f8c24 => setTimeout(_0x1f8c24, _0x1d710e)));
      }
      function _0x52a625(_0x5b85cc, _0x3fc8bb) {
        return _0x1c8f12(_0x5b85cc, _0x3fc8bb - 248);
      }
      console[_0x52a625("ZyH)", 481)](_0x4c8cab[_0x52a625("KgIb", 783)](_0x4c8cab[_0x52a625("xb56", 2017)](_0x4c8cab.EdiaZ(_0x4c8cab.SjOKR(_0x3d1e4c.oRoSt("❌ ", this[_0x3d1e4c.LhcVJ]()) + " ", _0x3121ed), _0x4c8cab[_0x52a625("A$(g", 2074)](_0x5b2aa1, 668)), _0x17ef48), "次"));
      return null;
    }
    async [K(652)](_0x1300d7) {
      const _0x3512d3 = {
        "wTZug": function (_0x31cb2f, _0x25b3e6) {
          return _0x31cb2f(_0x25b3e6);
        },
        "mMmIG": function (_0x3e2268, _0x3f5c1e) {
          return _0x3e2268 + _0x3f5c1e;
        },
        "mHYGJ": function (_0x5671a4, _0x2a1b10) {
          return _0x5671a4 === _0x2a1b10;
        },
        "XSfwn": _0x1ef68f(977, "hM!U"),
        "YMynb": function (_0x23e2b7, _0x4c3218) {
          return _0x23e2b7 !== _0x4c3218;
        },
        "vObhk": function (_0x50ec8a, _0x5c469d) {
          return _0x50ec8a(_0x5c469d);
        },
        "XpcyU": _0x1ef68f(3332, "q(oB"),
        "NCGyv": _0x1ef68f(1230, "d420") + _0x1ef68f(3455, "ZVXe"),
        "lCcPj": "|sign|",
        "JiiiO": function (_0x4219c9, _0x40781b) {
          return _0x4219c9(_0x40781b);
        },
        "aEPym": _0x1ef68f(2251, "B)gy"),
        "fagAd": _0x1ef68f(2711, "cV6N"),
        "XYASe": function (_0xc78fe, _0x4b6a09) {
          return _0xc78fe + _0x4b6a09;
        },
        "NIZbz": function (_0x1054c2, _0x5b6ae9) {
          return _0x1054c2(_0x5b6ae9);
        },
        "AcwzB": function (_0x2db2ea, _0x1b374b) {
          return _0x2db2ea + _0x1b374b;
        },
        "pEcie": _0x1ef68f(3106, "PvqJ") + _0x1ef68f(1520, "lMAw"),
        "FbSnc": _0x1ef68f(1343, "Bugr") + _0x1ef68f(3896, "t&mx"),
        "eMLhX": _0x1ef68f(3496, "l[QS") + "-8",
        "kWZvV": "getAccount",
        "nfsnJ": _0x1ef68f(2457, "^s2q") + "yNam",
        "bswYq": _0x1ef68f(3879, "X#K!"),
        "QJwcb": _0x1ef68f(2102, "3ipA") + "6d",
        "QtwLt": function (_0x1c6d61, _0x4154f4) {
          return _0x1c6d61(_0x4154f4);
        },
        "STdxZ": function (_0x544fa6, _0x5ea759) {
          return _0x544fa6(_0x5ea759);
        },
        "FUEHW": function (_0x50c6c9, _0x323e42) {
          return _0x50c6c9(_0x323e42);
        },
        "MlVmE": function (_0x57f0df, _0x12945a) {
          return _0x57f0df + _0x12945a;
        },
        "jVIJm": _0x1ef68f(3450, "#uGO") + _0x1ef68f(2682, "OjOj"),
        "hUZSR": function (_0x58d9fa, _0x463194) {
          return _0x58d9fa(_0x463194);
        },
        "lIypt": _0x1ef68f(2412, "rEA3") + _0x1ef68f(3505, "ZVXe"),
        "uubZO": _0x1ef68f(3136, "xb56") + "#cmM",
        "lsKnr": _0x1ef68f(1609, "FbMW"),
        "eAdBd": _0x1ef68f(2422, "ZVXe"),
        "RSdMt": function (_0x43a380, _0x2942c8) {
          return _0x43a380(_0x2942c8);
        },
        "fhUGd": "1599",
        "NbqCS": function (_0x243a9c, _0x269290) {
          return _0x243a9c(_0x269290);
        },
        "tDqtP": function (_0x14ed65, _0x3a9283) {
          return _0x14ed65(_0x3a9283);
        },
        "dkQnH": function (_0x51ae5a, _0x1547c9) {
          return _0x51ae5a(_0x1547c9);
        },
        "dJfPS": _0x1ef68f(3805, "PvqJ") + _0x1ef68f(1514, "q(oB"),
        "uumEU": _0x1ef68f(1424, "cV6N"),
        "CvZKa": "hGFwo",
        "UIFgC": "did",
        "rEnzV": "PGqUP",
        "cupNG": function (_0x5e1a5f, _0x4090e2) {
          return _0x5e1a5f(_0x4090e2);
        },
        "gIHSw": function (_0xe09f62, _0x39c514) {
          return _0xe09f62 + _0x39c514;
        },
        "ErgTz": function (_0x1c490a, _0x1f9a38) {
          return _0x1c490a + _0x1f9a38;
        },
        "PzAJL": _0x1ef68f(2355, "0qEw") + "a",
        "tdjNB": "sign",
        "ehMOE": function (_0x244a05, _0x3fb85d) {
          return _0x244a05 + _0x3fb85d;
        },
        "nlQhn": function (_0x30bf56, _0x1cb5b9) {
          return _0x30bf56(_0x1cb5b9);
        },
        "kVctN": "string" + _0x1ef68f(2880, "^s2q"),
        "EbQHg": function (_0x1d03f4, _0x393bf3) {
          return _0x1d03f4(_0x393bf3);
        },
        "ZZHHQ": _0x1ef68f(3710, "$]wl"),
        "gPqOU": function (_0x5ef7fa, _0x379ad9) {
          return _0x5ef7fa(_0x379ad9);
        },
        "VwcIV": function (_0x1b916f, _0x4ee8da) {
          return _0x1b916f + _0x4ee8da;
        },
        "HQXTV": _0x1ef68f(3221, "r#&P") + "务失败，",
        "YURIu": function (_0x1f6a34, _0x5768b6) {
          return _0x1f6a34(_0x5768b6);
        },
        "jiXyd": _0x1ef68f(2726, "#f!g") + "aish",
        "QnwtX": _0x1ef68f(1370, "l[QS") + _0x1ef68f(3265, "PvqJ"),
        "ShKTB": function (_0x4e609f, _0x4f3e8f) {
          return _0x4e609f(_0x4f3e8f);
        },
        "ISTFD": _0x1ef68f(2070, "OjOj"),
        "QHqxh": "iSt",
        "zZSAw": function (_0xe87b19, _0x18ee3e) {
          return _0xe87b19 + _0x18ee3e;
        },
        "SHtqF": "errorMsg",
        "TWuVC": _0x1ef68f(965, "^R3S"),
        "VsNPb": _0x1ef68f(1069, "Bugr"),
        "zodOd": "caption",
        "FRtUj": function (_0x1f3299, _0x2edade) {
          return _0x1f3299(_0x2edade);
        },
        "TwHfO": "zNumh",
        "InCWv": function (_0x120031, _0x3087eb) {
          return _0x120031(_0x3087eb);
        },
        "dNDUp": _0x1ef68f(1647, "lMAw"),
        "lEFsz": function (_0x202a6f, _0x5510d8) {
          return _0x202a6f + _0x5510d8;
        },
        "JChdw": function (_0x53d9df, _0x3b8e47) {
          return _0x53d9df + _0x3b8e47;
        },
        "jHDeq": function (_0x1fd996, _0x129183) {
          return _0x1fd996(_0x129183);
        },
        "uKRWj": _0x1ef68f(1726, "FbMW"),
        "HUWJP": "FlyXI",
        "qHlnB": function (_0x512486, _0x2335f0) {
          return _0x512486(_0x2335f0);
        }
      };
      function _0x1ef68f(_0x12b60b, _0x1e20b0) {
        return _0x1c8f12(_0x1e20b0, _0x12b60b - 756);
      }
      const _0x35770e = K,
        _0x35ef31 = {
          "FwQyG": _0x3512d3[_0x1ef68f(3771, "$]wl")](_0x3512d3[_0x1ef68f(2040, "q(oB")] + (_0x1ef68f(1725, "G![J") + _0x1ef68f(1623, "Z@bN")), _0x1ef68f(1930, "X#K!")),
          "QfBOI": _0x3512d3.lCcPj,
          "GLzWJ": _0x3512d3[_0x1ef68f(3898, "#uGO")](_0x35770e, 600),
          "IGvCw": _0x3512d3.mMmIG(_0x3512d3[_0x1ef68f(3012, "ZVXe")](_0x35770e, 563), "16PN5BC)"),
          "cTYHz": _0x3512d3[_0x1ef68f(1444, "Caa8")],
          "wvSAc": _0x3512d3[_0x1ef68f(1572, "$]wl")],
          "hGFwo": _0x3512d3.XYASe("kuaish" + _0x1ef68f(2024, "d420"), _0x3512d3[_0x1ef68f(1704, "KgIb")](_0x35770e, 664)),
          "PGqUP": function (_0x20e27c, _0x2fce89) {
            return _0x20e27c === _0x2fce89;
          },
          "AevBM": _0x3512d3[_0x1ef68f(2889, "cV6N")](_0x35770e, 470),
          "iQhxz": function (_0x152db2, _0x36a975) {
            const _0x1aefff = {
              "KYaaG": function (_0x19d1e1, _0xf993a2) {
                return _0x3512d3.wTZug(_0x19d1e1, _0xf993a2);
              },
              "HsnGZ": "neoAmo" + _0x490cee(486, "cV6N")
            };
            function _0x490cee(_0x37fffd, _0x124b29) {
              return _0x1ef68f(_0x37fffd - -867, _0x124b29);
            }
            if (_0x490cee(1390, "lMAw") !== "QGrGF") {
              if (_0x122a24(764) === _0x1aefff[_0x490cee(1124, "d420")](_0x32f3ee, 764)) return {
                "success": false,
                "reward": 0
              };else {
                const _0x528ca9 = _0x301497[_0x481af8[_0x54dd41(645)]]?.[_0x1aefff.HsnGZ] || 0;
                return {
                  "success": true,
                  "reward": _0x528ca9
                };
              }
            } else return _0x152db2 + _0x36a975;
          },
          "wOIRv": _0x3512d3[_0x1ef68f(3074, "ZVXe")](_0x3512d3[_0x1ef68f(2411, "Iw8c")](_0x3512d3[_0x1ef68f(2984, "Kd26")] + (_0x1ef68f(3597, "$]wl") + "w-fo"), _0x3512d3[_0x1ef68f(1480, "rEA3")]), "ded; c" + _0x1ef68f(2382, "X#K!")) + _0x3512d3[_0x1ef68f(1961, "wsz*")],
          "bdwin": _0x1ef68f(1042, "xb56") + _0x1ef68f(1982, "yuIP") + _0x1ef68f(2318, "h0ri"),
          "DCFSh": _0x3512d3.kWZvV + _0x3512d3[_0x1ef68f(3576, "3ipA")] + "e",
          "fAXRc": _0x3512d3[_0x1ef68f(2760, "OjOj")],
          "decST": "log",
          "JyUWg": function (_0x54ef6f, _0x18e240) {
            function _0x22c80b(_0x2832e1, _0x384e93) {
              return _0x1ef68f(_0x2832e1 - -895, _0x384e93);
            }
            return _0x3512d3[_0x22c80b(770, "2PQv")]("sSjdU", _0x3512d3[_0x22c80b(242, "2PQv")]) ? _0x3512d3[_0x22c80b(2650, "d420")](_0x54ef6f, _0x18e240) : _0x3512d3[_0x22c80b(2632, "OjOj")](_0x123b86, _0xc3f995);
          },
          "iKypl": function (_0x152776, _0x5a9b9d) {
            return _0x152776 + _0x5a9b9d;
          }
        };
      try {
        const _0x5a9e5c = _0x35ef31[_0x3512d3[_0x1ef68f(2410, "Caa8")](_0x35770e, 544)],
          _0x75f35f = {
            "encData": _0x1ef68f(3246, "qZz4") + "ta|",
            "sign": _0x35ef31[_0x1ef68f(2437, "q(oB")],
            "cs": _0x35770e(367),
            "client_key": _0x3512d3.QJwcb,
            "videoModelCrowdTag": _0x35ef31[_0x3512d3[_0x1ef68f(3075, "Kd26")](_0x35770e, 402)],
            "os": _0x3512d3.STdxZ(_0x35770e, 805),
            "kuaishou.api_st": this[_0x3512d3[_0x1ef68f(1254, "KgIb")](_0x35770e, 337) + _0x35770e(577)],
            "uQaTag": _0x3512d3[_0x1ef68f(1626, "d420")](_0x3512d3[_0x1ef68f(1879, "ZyH)")](_0x3512d3.XYASe(_0x3512d3.jVIJm, _0x3512d3.hUZSR(_0x35770e, 814)), _0x3512d3[_0x1ef68f(2975, "$]wl")]) + _0x3512d3[_0x1ef68f(1790, "X#K!")], _0x3512d3.vObhk(_0x35770e, 550))
          },
          _0x3d188e = {
            "earphoneMode": "1",
            "mod": _0x35ef31[_0x1ef68f(3488, "aiqQ")],
            "appver": this[_0x3512d3.lsKnr],
            "isp": _0x3512d3[_0x1ef68f(3675, "xb56")],
            "language": _0x3512d3[_0x1ef68f(3638, "OjOj")](_0x35770e, 446),
            "ud": this.userId,
            "did_tag": "0",
            "net": _0x35ef31[_0x3512d3[_0x1ef68f(1944, "$]wl")](_0x35770e, 587)],
            "kcv": _0x3512d3[_0x1ef68f(1415, "wsz*")],
            "app": "0",
            "kpf": _0x3512d3[_0x1ef68f(2849, "i]Oi")](_0x35770e, 462) + _0x3512d3[_0x1ef68f(2720, "$r&&")](_0x35770e, 523),
            "ver": _0x3512d3[_0x1ef68f(1521, "Caa8")](_0x35770e, 640),
            "android_os": "0",
            "boardPlatform": _0x35770e(530),
            "kpn": _0x1ef68f(3508, "2PQv"),
            "androidApiLevel": "35",
            "country_code": "cn",
            "sys": _0x3512d3[_0x1ef68f(1220, "68zl")],
            "sw": _0x35ef31[_0x1ef68f(3427, "ZVXe")],
            "sh": _0x3512d3.uumEU,
            "abi": _0x1ef68f(2348, "PvqJ"),
            "userRecoBit": "0"
          },
          _0x4e04d1 = {
            "appInfo": {
              "appId": _0x35ef31[_0x3512d3[_0x1ef68f(3648, "OjOj")]],
              "name": _0x1ef68f(3196, "$r&&"),
              "packageName": "com.kuaish" + ("ou.neb" + _0x1ef68f(3616, "FweH")),
              "version": this[_0x35770e(576)],
              "versionCode": -1
            },
            "deviceInfo": {
              "osType": 1,
              "osVersion": "15",
              "deviceId": this[_0x3512d3.UIFgC],
              "screenSize": {
                "width": 1080,
                "height": 2249
              },
              "ftt": ""
            },
            "userInfo": {
              "userId": this[_0x35770e(406)],
              "age": 0,
              "gender": ""
            },
            "impInfo": [{
              "pageId": _0x1300d7[_0x35770e(715)] || 11101,
              "subPageId": _0x1300d7["subPag" + _0x1ef68f(2272, "FweH")],
              "action": 0,
              "browseType": _0x35ef31[_0x3512d3.rEnzV](_0x1300d7[_0x3512d3[_0x1ef68f(3674, "X#K!")](_0x35770e, 702)], _0x1ef68f(2701, "i]Oi")) ? 4 : 3,
              "impExtData": this[_0x3512d3[_0x1ef68f(2911, "xb56")](_0x35770e, 723) + _0x1ef68f(2065, "&t&m")](_0x1300d7),
              "mediaExtData": "{}"
            }]
          },
          _0x8be443 = Buffer[_0x35770e(616)](JSON[_0x1ef68f(3109, "lMAw") + _0x1ef68f(3599, "$r&&")](_0x4e04d1))[_0x35770e(581)](_0x1ef68f(3032, "cV6N"));
        let _0x3c107c = await this[_0x1ef68f(1028, "yuIP") + "n"](_0x8be443);
        if (!_0x3c107c) return console[_0x3512d3.QtwLt(_0x35770e, 501)](_0x3512d3[_0x1ef68f(3573, "#uGO")]("❌ " + this[_0x3512d3[_0x1ef68f(3074, "ZVXe")](_0x3512d3[_0x1ef68f(2508, "g1XK")](_0x35770e(412), _0x3512d3[_0x1ef68f(1629, "ZVXe")](_0x35770e, 388)), "e")](), _0x3512d3[_0x1ef68f(1448, "ZVXe")](_0x1ef68f(1839, "B)gy") + _0x1ef68f(3460, "&t&m"), _0x1ef68f(2346, "68zl")))), null;
        _0x75f35f[_0x35ef31[_0x3512d3[_0x1ef68f(3279, "i]Oi")](_0x35770e, 450)]] = _0x3c107c[_0x3512d3.PzAJL];
        _0x75f35f[_0x3512d3[_0x1ef68f(1732, "l[QS")]] = _0x3c107c[_0x35770e(670)];
        let _0x30b9a5 = await this[_0x3512d3[_0x1ef68f(1987, "5ZNg")]("requestSig", _0x35770e(339))]({
          "urlpath": _0x5a9e5c,
          "reqdata": _0x35ef31[_0x3512d3[_0x1ef68f(1528, "FweH")](_0x35770e, 428)](_0x3512d3[_0x1ef68f(3417, "OjOj")](qs[_0x3512d3[_0x1ef68f(3385, "#uGO")](_0x35770e, 660)](_0x75f35f), "&"), qs[_0x3512d3.kVctN](_0x3d188e)),
          "api_client_salt": this[_0x3512d3.EbQHg(_0x35770e, 369)]
        });
        if (!_0x30b9a5) return console[_0x3512d3.ZZHHQ](_0x3512d3[_0x1ef68f(3765, "r#&P")](_0x35ef31[_0x3512d3[_0x1ef68f(1044, "0qEw")](_0x35770e, 428)]("❌ ", this[_0x3512d3.ErgTz(_0x3512d3[_0x1ef68f(1505, "5ZNg")](_0x35770e, 412), _0x1ef68f(2524, "lMAw") + "yNam") + "e"]()), _0x3512d3.VwcIV(_0x3512d3[_0x1ef68f(1831, "d420")], _0x35770e(708)))), null;
        const _0x4145b8 = {
            ..._0x3d188e,
            "sig": _0x30b9a5[_0x35770e(468)],
            "__NS_sig3": _0x30b9a5[_0x1ef68f(3600, "5ZNg") + _0x1ef68f(2981, "g1XK")],
            "__NS_xfalcon": "",
            "__NStokensig": _0x30b9a5[_0x3512d3.YURIu(_0x35770e, 524) + "ig"]
          },
          _0x343664 = _0x1ef68f(2109, "Kd26") + _0x1ef68f(2980, "aiqQ") + _0x3512d3.jiXyd + _0x1ef68f(3882, "X#K!") + _0x5a9e5c + "?" + querystring[_0x3512d3.kVctN](_0x4145b8),
          {
            response: _0x4fd148,
            body: _0x3cca2e
          } = await sendRequest({
            "method": _0x35770e(622),
            "url": _0x343664,
            "headers": {
              "Content-Type": _0x35ef31[_0x35770e(648)],
              "Host": _0x3512d3[_0x1ef68f(2871, "$r&&")] + _0x35770e(469),
              "User-Agent": _0x3512d3[_0x1ef68f(3141, "d420")](_0x3512d3[_0x1ef68f(1778, "2PQv")](_0x3512d3.ShKTB(_0x35770e, 503), _0x1ef68f(3299, "B)gy") + _0x1ef68f(3096, "OjOj")), _0x3512d3.ISTFD),
              "Cookie": _0x35ef31[_0x35770e(599)] + this[_0x1ef68f(1091, "FbMW") + "ouAp" + _0x3512d3[_0x1ef68f(2321, "$]wl")]]
            },
            "form": _0x75f35f,
            "timeout": 12000
          }, this[_0x3512d3.gPqOU(_0x35770e, 512)], _0x3512d3[_0x1ef68f(3751, "PvqJ")](this[_0x35ef31.DCFSh](), " 获取广告"));
        if (!_0x3cca2e) return null;
        if (_0x3cca2e[_0x3512d3.SHtqF] === "OK" && _0x3cca2e[_0x3512d3[_0x1ef68f(3177, "ZVXe")]] && _0x3cca2e[_0x1ef68f(2860, "wsz*")][0] && _0x3cca2e[_0x35770e(607)][0].ad) {
          if (_0x3512d3[_0x1ef68f(2191, "Iw8c")] === _0x3512d3[_0x1ef68f(2326, "X#K!")]) {
            const _0x484bb0 = _0x3cca2e[_0x35ef31[_0x3512d3.VsNPb]][0][_0x3512d3.zodOd] || _0x3cca2e[_0x3512d3[_0x1ef68f(3313, "^R3S")]][0].ad?.[_0x3512d3.FRtUj(_0x35770e, 865)] || "";
            _0x484bb0 && console[_0x35ef31[_0x1ef68f(1322, "ZVXe")]](_0x3512d3[_0x1ef68f(3811, "8OI@")]("✅ " + this[_0x35ef31[_0x1ef68f(2935, "^R3S")]](), _0x35770e(655)) + _0x484bb0);
            const _0x443a9f = _0x3cca2e[_0x35770e(607)][0][_0x35770e(418)] || "",
              _0x313001 = _0x443a9f[_0x3512d3.NIZbz(_0x35770e, 421)]("/")[1]?.[_0x3512d3[_0x1ef68f(1425, "$]wl")](_0x35770e, 421)]("_")?.[0] || "";
            let _0x5501b3 = false;
            try {
              if (_0x3512d3[_0x1ef68f(1418, "X#K!")] === _0x1ef68f(1177, "KgIb")) {
                const _0x269517 = _0x1f5ed8[_0x3512d3.vObhk(_0x48195d, 704)][_0x54f51d(827)],
                  _0x3e2aa7 = _0x269517[_0x3512d3[_0x1ef68f(2311, "&t&m")](_0x329312, 421)]("&")[_0x3512d3[_0x1ef68f(963, "&t&m")]](_0x3eefd9 => _0x3eefd9.trim())[_0x3512d3.wTZug(_0x129f9b, 724)](_0x89278a);
                _0x377b5d[_0x1ef68f(2973, "h0ri")](..._0x3e2aa7);
              } else {
                const _0x5a9f30 = _0x3cca2e[_0x35ef31[_0x3512d3[_0x1ef68f(2766, "Caa8")](_0x35770e, 394)]][0].ad?.[_0x1ef68f(1622, "d420") + "V2"],
                  _0x32b788 = _0x5a9f30?.[_0x3512d3[_0x1ef68f(2660, "Caa8")](_0x1ef68f(1468, "5ZNg") + _0x1ef68f(2598, "qZz4"), "ewardInfo")];
                _0x32b788?.[_0x35770e(494)] && (_0x5501b3 = true, console[_0x35ef31[_0x3512d3.dNDUp]](_0x3512d3[_0x1ef68f(3054, "Iw8c")](_0x1ef68f(1405, "B)gy") + this[_0x3512d3[_0x1ef68f(2125, "2PQv")](_0x3512d3[_0x1ef68f(3454, "rEA3")], _0x35770e(388)) + "e"](), _0x3512d3.RSdMt(_0x35770e, 737))));
              }
            } catch (_0x2098ca) {}
            return {
              "cid": _0x3cca2e[_0x35770e(607)][0].ad[_0x1ef68f(2621, "G![J") + _0x1ef68f(1863, "PvqJ")],
              "llsid": _0x313001,
              "hasRewardEnd": _0x5501b3
            };
          } else return _0x5a9e5c[_0x35770e(501)](_0x3512d3[_0x1ef68f(3680, "B)gy")](_0x3512d3.XYASe(_0x3512d3.MlVmE("❌ ", this[_0x3512d3[_0x1ef68f(1584, "wsz*")](_0x35770e, 412) + _0x3512d3[_0x1ef68f(1388, "$]wl")] + "e"]()), _0x35770e(644)), _0x75f35f[_0x35770e(540)])), false;
        }
        return null;
      } catch (_0x58e211) {
        if ("oAGct" !== _0x3512d3.uKRWj) return _0x3512d3[_0x1ef68f(3493, "ZyH)")](_0x24de66, _0x22ab54);else {
          if (_0x35ef31[_0x35770e(784)](_0x3512d3[_0x1ef68f(3030, "0qEw")], _0x35770e(813))) return console[_0x35ef31[_0x3512d3[_0x1ef68f(3282, "8OI@")](_0x35770e, 786)]](_0x35ef31[_0x35770e(780)](_0x3512d3[_0x1ef68f(3328, "t&mx")]("❌ " + this[_0x35770e(412) + "DisplayNam" + "e"](), _0x1ef68f(1327, "cV6N") + _0x1ef68f(1196, "&t&m")), _0x58e211[_0x35770e(540)])), null;else i = j[0], k = l[1], m = n[2];
        }
      }
    }
    async [_0x1c8f12("0qEw", 3059) + _0x1c8f12("A$(g", 287) + (_0x1c8f12("lMAw", 2071) + "e")](_0x3a9044, _0x4a7402, _0x51cd6e, _0x543daf) {
      function _0xb79f83(_0x36d985, _0x57020f) {
        return _0x1c8f12(_0x36d985, _0x57020f - 630);
      }
      const _0x3f6862 = {
          "oyXdp": function (_0x287120, _0x8d5c84) {
            return _0x287120 && _0x8d5c84;
          },
          "SsTlU": function (_0x238109, _0x21f625) {
            return _0x238109 + _0x21f625;
          },
          "cvYiq": _0xb79f83("t&mx", 2414),
          "nEtZu": function (_0x1eb123, _0x41e54f) {
            return _0x1eb123 + _0x41e54f;
          },
          "rbRay": function (_0x42791f, _0x28b4c8) {
            return _0x42791f + _0x28b4c8;
          },
          "Nganr": function (_0x2bb51e, _0x42f486) {
            return _0x2bb51e + _0x42f486;
          },
          "PCBdf": _0xb79f83("OjOj", 2987) + "://",
          "JWxQb": function (_0x1d756a, _0x4c610c) {
            return _0x1d756a(_0x4c610c);
          },
          "oAZBp": function (_0x2501a8, _0xa6410d) {
            return _0x2501a8(_0xa6410d);
          },
          "ZCptR": _0xb79f83("FweH", 2314),
          "PZUuP": function (_0x576e58, _0x55e8e4) {
            return _0x576e58 !== _0x55e8e4;
          },
          "BHeCh": _0xb79f83("^R3S", 2436),
          "NPKkp": function (_0x3206a7, _0x5ba61c) {
            return _0x3206a7(_0x5ba61c);
          },
          "vmHZu": _0xb79f83("t&mx", 3054) + "e",
          "xLziN": _0xb79f83("cV6N", 1007) + _0xb79f83("FweH", 2747),
          "lYWhO": "taskType",
          "NimuO": "pageId",
          "xNaBj": function (_0x1db010, _0x5b4433) {
            return _0x1db010(_0x5b4433);
          },
          "RQNPl": function (_0x98e7f4, _0x33629c) {
            return _0x98e7f4(_0x33629c);
          },
          "smsYi": function (_0x428fbd, _0x42358f) {
            return _0x428fbd + _0x42358f;
          },
          "KxNJX": "&cs=fa" + _0xb79f83("#uGO", 2409),
          "aWnUp": function (_0xa9bc5d, _0x463575) {
            return _0xa9bc5d(_0x463575);
          },
          "welvw": function (_0x239bab, _0x2d1909) {
            return _0x239bab(_0x2d1909);
          },
          "nNQYF": _0xb79f83("Kd26", 2602) + "aram",
          "JIIiC": function (_0x27460d, _0x22a01) {
            return _0x27460d(_0x22a01);
          },
          "RCoMY": "nService",
          "fzkcM": _0xb79f83("OjOj", 1916) + "port",
          "EMKWB": _0xb79f83("cV6N", 1028),
          "olFzr": function (_0x441498, _0x32382d) {
            return _0x441498 + _0x32382d;
          },
          "iaYtm": _0xb79f83("q(oB", 1334) + "ount",
          "kZoPP": "log",
          "NXAfd": _0xb79f83("&t&m", 1230) + _0xb79f83("B)gy", 3677),
          "VCvWm": "sig",
          "hceSZ": function (_0xe9c01, _0x2a94f0) {
            return _0xe9c01 + _0x2a94f0;
          },
          "UVFHI": function (_0x29f592, _0x1b6a27) {
            return _0x29f592(_0x1b6a27);
          }
        },
        _0xb913b6 = K,
        _0x27c64e = {
          "jxRjm": _0x3f6862[_0xb79f83("qZz4", 1445)](_0xb913b6, 787),
          "kRpjG": _0xb79f83("hM!U", 3649) + "ify",
          "uXYuy": _0x3f6862[_0xb79f83("hM!U", 2671)],
          "rIkph": _0xb913b6(766),
          "VzdPz": function (_0x21a95a, _0x39e6e9) {
            function _0x34b514(_0xc1ceb, _0x37f1f4) {
              return _0xb79f83(_0xc1ceb, _0x37f1f4 - -1399);
            }
            if (_0x3f6862.ZCptR !== _0x3f6862.ZCptR) {
              const [_0x3686de, _0x44d508, _0x58c311, _0x2a34c0] = _0x264381;
              _0x3f6862.oyXdp(_0x58c311, _0x2a34c0) ? _0x302bc8 = _0x3f6862[_0x34b514("#f!g", 224)](_0x3711a1[_0x3f6862[_0x34b514("0qEw", 2245)]](_0x3f6862.nEtZu(_0x3f6862[_0x34b514("ZVXe", 1664)](_0x3f6862[_0x34b514("G![J", 1965)](_0x3f6862[_0x34b514("yuIP", 2310)](_0x3f6862.PCBdf, _0x58c311), ":"), _0x2a34c0), "@"), _0x3686de), ":") + _0x44d508 : _0x320c52 = _0x19f6a5[_0x3f6862[_0x34b514("#f!g", -147)](_0x5d665c, 500)](_0x15d651[_0x3f6862[_0x34b514("ZVXe", 741)](_0x403a86, 500)]("socks5" + _0x34b514("OjOj", -125) + _0x3686de, ":"), _0x44d508);
            } else return _0x21a95a(_0x39e6e9);
          },
          "UEkpQ": function (_0x5f1f3a, _0x4924a8) {
            function _0x43637c(_0x2985a6, _0x58c907) {
              return _0xb79f83(_0x58c907, _0x2985a6 - -575);
            }
            if (_0x3f6862[_0x43637c(1613, "$r&&")]("SmoaU", _0x3f6862.BHeCh)) _0x337a69 = _0x15b33a[_0x43637c(1894, "qZz4") + "f"](_0x3d0f3b);else return _0x5f1f3a + _0x4924a8;
          },
          "hJwET": function (_0x1a66b0, _0x2f938e) {
            return _0x1a66b0 + _0x2f938e;
          },
          "FRBoY": _0x3f6862[_0xb79f83("8OI@", 2679)]
        };
      try {
        if (_0x27c64e[_0xb913b6(368)] === _0x3f6862.JWxQb(_0xb913b6, 482)) return this[_0xb79f83("PvqJ", 2449) + _0xb79f83("Z@bN", 2083)][_0x4a7402][_0xb79f83("68zl", 3440)]++, {
          "success": false,
          "reward": 0,
          "hasRewardEnd": false
        };else {
          const _0x175563 = JSON[_0x27c64e[_0xb79f83("^R3S", 2098)]]({
              "businessId": _0x543daf[_0x3f6862[_0xb79f83("d420", 3186)](_0xb913b6, 567)],
              "endTime": this[_0x27c64e[_0x3f6862.NPKkp(_0xb913b6, 683)]],
              "extParams": "",
              "mediaScene": _0xb79f83("Kd26", 951),
              "neoInfos": [{
                "creativeId": _0x3a9044,
                "extInfo": "",
                "llsid": _0x4a7402,
                "requestSceneType": _0x543daf[_0xb913b6(467) + _0xb79f83("FbMW", 3232)],
                "taskType": _0x543daf[_0x3f6862[_0xb79f83("#f!g", 3071)]],
                "watchExpId": "",
                "watchStage": 0
              }],
              "pageId": _0x543daf[_0x3f6862.NimuO] || 11101,
              "posId": _0x543daf[_0xb79f83("ZVXe", 2935)],
              "reportType": 0,
              "sessionId": "",
              "startTime": this["startT" + _0xb79f83("PvqJ", 1620)],
              "subPageId": _0x543daf[_0xb79f83("g1XK", 3514) + _0xb79f83("FweH", 2146)]
            }),
            _0x1cc420 = _0x3f6862[_0xb79f83("r#&P", 1883)](_0x27c64e[_0x3f6862.xNaBj(_0xb913b6, 691)] + _0x27c64e[_0x3f6862[_0xb79f83("aiqQ", 2373)](_0xb913b6, 618)](encodeURIComponent, _0x175563) + (_0x3f6862.smsYi(_0x3f6862[_0xb79f83("ZyH)", 1638)], _0xb79f83("hM!U", 2309) + _0xb79f83("r#&P", 1018)) + _0x3f6862[_0xb79f83("h0ri", 3700)](_0xb913b6, 720) + _0x3f6862.RQNPl(_0xb913b6, 707) + _0xb913b6(588)), this["kuaish" + _0xb79f83("Z@bN", 3714) + _0x3f6862[_0xb79f83("3ipA", 3470)](_0xb913b6, 577)]),
            _0x58cb68 = _0x27c64e[_0x3f6862[_0xb79f83("&t&m", 3157)](_0xb913b6, 719)](_0x3f6862.Nganr(this[_0x3f6862[_0xb79f83("hM!U", 989)] + "s"], "&"), _0x1cc420),
            _0x500b59 = await this[_0x3f6862[_0xb79f83("$r&&", 1455)](_0xb913b6, 632) + _0x3f6862.RCoMY]({
              "urlpath": this[_0x3f6862[_0xb79f83("z$^9", 2358)] + _0x3f6862.oAZBp(_0xb913b6, 634)],
              "reqdata": _0x58cb68,
              "api_client_salt": this[_0x3f6862.EMKWB]
            }, _0x27c64e.hJwET(this[_0x3f6862[_0xb79f83("yuIP", 2676)](_0x3f6862[_0xb79f83("68zl", 1369)], _0xb79f83("#f!g", 2241) + _0xb79f83("qZz4", 2447)) + "e"](), _0xb79f83("5ZNg", 2633) + "名"));
          if (!_0x500b59) return console[_0x3f6862[_0xb79f83("B)gy", 2688)]](_0x3f6862.rbRay("❌ " + this[_0x3f6862[_0xb79f83("B)gy", 2626)] + _0x3f6862[_0xb79f83("2PQv", 1249)] + "e"](), _0xb913b6(831))), null;
          return {
            "sig": _0x500b59[_0x3f6862.VCvWm],
            "sig3": _0x500b59["__NS_s" + _0xb79f83("#uGO", 3194)],
            "sigtoken": _0x500b59[_0x3f6862[_0xb79f83("Bugr", 1928)](_0x3f6862.UVFHI(_0xb913b6, 524), "ig")],
            "post": _0x1cc420
          };
        }
      } catch (_0xa6b55) {
        console[_0x3f6862.UVFHI(_0xb913b6, 501)](_0x3f6862.hceSZ(_0x27c64e[_0x3f6862.welvw(_0xb913b6, 846)]("❌ ", this[_0x3f6862[_0xb79f83("g1XK", 2811)] + _0xb913b6(388) + "e"]()) + _0x27c64e.FRBoY, _0xa6b55[_0xb913b6(540)]));
        return null;
      }
    }
    async ["getSign"](_0x20c0a8) {
      function _0x3e2a66(_0x2215ab, _0xf1517a) {
        return _0x1c8f12(_0xf1517a, _0x2215ab - 879);
      }
      const _0x4756d8 = {
          "FxwQk": function (_0x3fb126, _0x22d151) {
            return _0x3fb126 + _0x22d151;
          },
          "PRlKB": function (_0x215aee, _0x18364d) {
            return _0x215aee + _0x18364d;
          },
          "GWcwU": function (_0x5c259b, _0x325de9) {
            return _0x5c259b(_0x325de9);
          },
          "nbBxj": function (_0x3d4750, _0x3709fe) {
            return _0x3d4750 + _0x3709fe;
          },
          "CCGnB": "yabGz",
          "FWrdT": function (_0x1d7074, _0x36cab6) {
            return _0x1d7074(_0x36cab6);
          },
          "wxlYb": function (_0xe3f546, _0x24c373) {
            return _0xe3f546 + _0x24c373;
          },
          "ecrDV": function (_0x2cbc43, _0x15e42e) {
            return _0x2cbc43 + _0x15e42e;
          },
          "xpcFl": function (_0x2c0ec9, _0x440ccb) {
            return _0x2c0ec9 + _0x440ccb;
          },
          "hTyyT": function (_0x95abfa, _0x208271) {
            return _0x95abfa(_0x208271);
          },
          "OXqfs": _0x3e2a66(1968, "cV6N"),
          "DAqBh": function (_0x12c871, _0x3212d0) {
            return _0x12c871(_0x3212d0);
          },
          "rtEBh": function (_0x1a24c3, _0x1b0d8d) {
            return _0x1a24c3 + _0x1b0d8d;
          },
          "LPZAz": _0x3e2a66(1236, "A$(g") + "PI密钥",
          "KMOlm": function (_0x4b6e44, _0x40c898) {
            return _0x4b6e44 === _0x40c898;
          },
          "SCsEh": _0x3e2a66(1854, "Kd26"),
          "WZXXK": function (_0x305b1a) {
            return _0x305b1a();
          },
          "FOiVM": "tOPjP",
          "mnFAL": function (_0x5b75ed, _0x3781fa) {
            return _0x5b75ed(_0x3781fa);
          },
          "AiOKV": "applic" + _0x3e2a66(3886, "68zl"),
          "qzQHX": _0x3e2a66(2148, "0qEw") + _0x3e2a66(3036, "FweH"),
          "TpiVw": function (_0x4f2eab, _0x4ad1cf) {
            return _0x4f2eab !== _0x4ad1cf;
          },
          "EYMKE": "okgak",
          "LSUmP": _0x3e2a66(2011, "r#&P"),
          "enLEG": _0x3e2a66(4013, "i]Oi"),
          "qkOxa": _0x3e2a66(3863, "xkwi"),
          "vXVfh": function (_0x205d3a, _0x498c96) {
            return _0x205d3a + _0x498c96;
          },
          "feLDg": function (_0xe91c41, _0x5235c2) {
            return _0xe91c41 + _0x5235c2;
          },
          "ZYWcR": function (_0x5b448c, _0x380572) {
            return _0x5b448c(_0x380572);
          },
          "YyFRA": _0x3e2a66(2253, "aiqQ") + "es",
          "HxbnN": function (_0x1598b9, _0x438bf0) {
            return _0x1598b9(_0x438bf0);
          },
          "lJHME": function (_0x561fa2, _0x3a41b1) {
            return _0x561fa2 + _0x3a41b1;
          },
          "elBfF": function (_0x4999ef, _0x1edfd8) {
            return _0x4999ef + _0x1edfd8;
          },
          "vcpWU": function (_0xec89a5, _0xd64e75) {
            return _0xec89a5 + _0xd64e75;
          },
          "gpvoE": _0x3e2a66(1639, "68zl") + "误达到上",
          "rVOFb": function (_0x280faf, _0x85bf8f) {
            return _0x280faf !== _0x85bf8f;
          },
          "cfBdA": _0x3e2a66(3047, "^s2q"),
          "NvlDZ": function (_0x101ff4, _0x482245) {
            return _0x101ff4(_0x482245);
          },
          "GoWxn": function (_0x1cad8d, _0x4a43c4) {
            return _0x1cad8d + _0x4a43c4;
          },
          "GUXtB": "lanxA"
        },
        _0x3a2f3c = K,
        _0x42b7dc = {
          "RjqDv": "push",
          "jIgYL": _0x3a2f3c(501),
          "tOPjP": _0x3e2a66(1557, "$]wl"),
          "KQyEg": _0x3a2f3c(559),
          "TWwUa": function (_0x4799c1, _0x2c371a) {
            return _0x4799c1 + _0x2c371a;
          },
          "yabGz": _0x4756d8[_0x3e2a66(1560, "hM!U")](_0x4756d8.rtEBh(_0x3e2a66(1459, "t&mx") + "ount", "Displa" + _0x3e2a66(1811, "Caa8")), "e"),
          "jlkKT": _0x4756d8[_0x3e2a66(2521, "3ipA")](_0x4756d8.LPZAz, _0x3e2a66(3040, "Kd26") + _0x3e2a66(1137, "OjOj")),
          "EvDoI": function (_0x5c57c8, _0x33302f) {
            function _0x5f1931(_0xde37ff, _0x4d02a8) {
              return _0x3e2a66(_0xde37ff - -1400, _0x4d02a8);
            }
            return "cspoU" === _0x5f1931(184, "aiqQ") ? _0x4756d8[_0x5f1931(1159, "%Dq0")](_0x5c57c8, _0x33302f) : _0x4756d8[_0x5f1931(607, "yuIP")](_0x2b3015, _0x260e0f);
          },
          "lanxA": _0x3e2a66(1734, "^R3S") + "e"
        };
      try {
        if (_0x4756d8.KMOlm(_0x3e2a66(3257, "$]wl"), _0x4756d8.SCsEh)) {
          const _0x3f8003 = await _0x4756d8[_0x3e2a66(1937, "A$(g")](generateDynamicApiKey),
            {
              response: _0xa169f2,
              body: _0x552e52
            } = await sendRequest({
              "method": _0x42b7dc[_0x4756d8[_0x3e2a66(3314, "FbMW")]],
              "url": SIGN_API_URL,
              "body": JSON[_0x4756d8.mnFAL(_0x3a2f3c, 660)]({
                "data": _0x20c0a8,
                "timestamp": _0x3f8003.timestamp
              }),
              "headers": {
                "Content-Type": _0x4756d8[_0x3e2a66(3644, "2PQv")] + _0x3e2a66(2244, "#f!g"),
                "Authorization": _0x3f8003[_0x3a2f3c(546)],
                "User-Agent": _0x4756d8[_0x3e2a66(1395, "l[QS")] + "0"
              }
            }, null, _0x3e2a66(3121, "wsz*"));
          if (_0x552e52) {
            if (_0x4756d8.TpiVw(_0x42b7dc.KQyEg, _0x4756d8[_0x3e2a66(1102, "Kd26")])) {
              if (_0x552e52[_0x4756d8.LSUmP]) return _0x552e52[_0x3a2f3c(684)];else {
                const _0x54d709 = _0x552e52[_0x3a2f3c(775)] || "未知错误";
                console[_0x4756d8.enLEG](_0x42b7dc[_0x4756d8[_0x3e2a66(2515, "G![J")]](_0x4756d8[_0x3e2a66(1875, "z$^9")](_0x4756d8[_0x3e2a66(1622, "lMAw")]("❌ ", this[_0x42b7dc[_0x3e2a66(2511, "G![J")]]()), _0x4756d8.ZYWcR(_0x3a2f3c, 796)), _0x54d709));
                _0x54d709[_0x4756d8[_0x3e2a66(4010, "0qEw")]](_0x4756d8.HxbnN(_0x3a2f3c, 325)) && (unauthorizedErrorCount++, console[_0x4756d8[_0x3e2a66(2561, "8OI@")](_0x3a2f3c, 501)](_0x4756d8[_0x3e2a66(2335, "cV6N")](_0x4756d8.elBfF(_0x4756d8[_0x3e2a66(1605, "$]wl")](_0x4756d8[_0x3e2a66(3366, "yuIP")](_0x4756d8[_0x3e2a66(3783, "ZyH)")](_0x3a2f3c, 361), " "), unauthorizedErrorCount), "/"), MAX_UNAUTHORIZED_RETRY)), unauthorizedErrorCount >= MAX_UNAUTHORIZED_RETRY && (console[_0x3e2a66(2410, "PvqJ")](_0x4756d8.FxwQk(_0x4756d8.gpvoE, _0x3a2f3c(756))), console[_0x4756d8[_0x3e2a66(3206, "0qEw")](_0x3a2f3c, 501)](_0x42b7dc[_0x3a2f3c(549)]), process[_0x3e2a66(3747, "Kd26")](1)));
                return null;
              }
            } else {
              if (_0x4756d8.rVOFb(_0x4756d8[_0x3e2a66(1264, "Bugr")], _0x3e2a66(3316, "2PQv"))) {
                const _0x196e7a = _0x4756d8[_0x3e2a66(3711, "wsz*")](h, i);
                _0x196e7a ? m[_0x42b7dc.RjqDv](_0x196e7a) : n[_0x42b7dc[_0x3e2a66(2678, "z$^9")]](_0x3e2a66(2741, "qZz4") + "错误：" + o);
              } else {
                if (_0x44093e[_0x3e2a66(1327, "&t&m")] !== _0x3e2a66(3740, "B)gy")) {
                  if (_0x543fea[_0x3e2a66(1728, "g1XK")]) return _0x483218[_0x4756d8[_0x3e2a66(3439, "5ZNg")](_0x1561c9, 684)];else {
                    const _0x1ab4f3 = _0x2cb046[_0x22e9c8(775)] || "未知错误";
                    _0x3cd655[_0x3e2a66(3117, "$r&&")](_0x382875[_0x3e2a66(3863, "xkwi")](_0x4756d8[_0x3e2a66(3419, "Kd26")]("❌ ", this[_0x483dbc[_0x4756d8.CCGnB]]()) + _0x1ee037(796), _0x1ab4f3));
                    _0x1ab4f3.includes(_0x4756d8[_0x3e2a66(2826, "z$^9")](_0x1e2d8f, 325)) && (_0x514a73++, _0x53f02d[_0x4756d8[_0x3e2a66(2328, "#uGO")](_0x40d641, 501)](_0x4756d8.wxlYb(_0x4756d8.ecrDV(_0x4756d8.xpcFl(_0x4756d8.FWrdT(_0x1cdc0f, 361), " "), _0xd383d4), "/") + _0x5cc595), _0x3c5873 >= _0x420b25 && (_0x222087[_0x3e2a66(3347, "g1XK")]("❌ 未授权错误达到上" + _0x53c136(756)), _0x3b720c[_0x4756d8[_0x3e2a66(2739, "0qEw")](_0x683908, 501)](_0x1ea6ee[_0x431e1b(549)]), _0x2ef69c[_0x4756d8[_0x3e2a66(3235, "G![J")]](1)));
                    return null;
                  }
                } else {
                  const _0x3b18b6 = _0x4756d8.DAqBh(_0x326090, _0x4148ba);
                  _0x3b18b6 ? _0x30eae1[_0x3f5cfc.RjqDv](_0x3b18b6) : _0xebcadc[_0x10e0df[_0x3e2a66(2547, "xkwi")]](_0x4756d8[_0x3e2a66(1941, "^s2q")]("❌ 账号格式错误：", _0x48aa21));
                }
              }
            }
          } else return console[_0x3a2f3c(501)](_0x42b7dc[_0x4756d8.qkOxa]("❌ " + this[_0x42b7dc[_0x4756d8[_0x3e2a66(1129, "^s2q")]]](), _0x3a2f3c(615))), null;
        } else return _0x4756d8[_0x3e2a66(3871, "wsz*")](_0x547670, _0x838f1);
      } catch (_0x3e5eb6) {
        console.log(_0x4756d8.GoWxn(_0x42b7dc.EvDoI("❌ ", this[_0x4756d8[_0x3e2a66(2415, "aiqQ")](_0x3a2f3c(412), _0x3e2a66(3995, "r#&P") + _0x3e2a66(3511, "2PQv")) + "e"]()), _0x3a2f3c(824)) + _0x3e5eb6[_0x42b7dc[_0x4756d8.GUXtB]]);
        return null;
      }
    }
    async [K(632) + "nService"](_0x36a8f8, _0x414083) {
      const _0x5c1b15 = {
        "bFcti": function (_0x3ee605) {
          return _0x3ee605();
        },
        "GMXzD": function (_0x29c5a4, _0x23bb89) {
          return _0x29c5a4 >= _0x23bb89;
        },
        "froMS": function (_0x56cd12, _0x7f8dd3) {
          return _0x56cd12(_0x7f8dd3);
        },
        "SfYni": "未知错误",
        "EaziX": function (_0x4af018, _0xa7fcad) {
          return _0x4af018 + _0xa7fcad;
        },
        "NUSjB": _0x313278(2064, "aiqQ") + _0x313278(1869, "i]Oi"),
        "XEfuG": function (_0x3094ff, _0x4c35fb) {
          return _0x3094ff(_0x4c35fb);
        },
        "EBbGZ": function (_0x247c22, _0x5d4aeb, _0x557911, _0xf5dcc7) {
          return _0x247c22(_0x5d4aeb, _0x557911, _0xf5dcc7);
        },
        "YWzZE": "timest" + _0x313278(3671, "Bugr"),
        "IUEnY": function (_0x18a736, _0x3016d7) {
          return _0x18a736(_0x3016d7);
        },
        "sobog": "data",
        "CmHYO": _0x313278(3576, "3ipA"),
        "vBLOn": _0x313278(2876, "xb56"),
        "xXdvS": _0x313278(1287, "Caa8"),
        "vyoWB": function (_0x545459, _0x221911) {
          return _0x545459 + _0x221911;
        },
        "rPiER": _0x313278(2097, "$]wl"),
        "WnhfR": function (_0x34e46b, _0x46069f) {
          return _0x34e46b + _0x46069f;
        },
        "kntTS": _0x313278(2258, "FweH") + "运行",
        "VhHfF": function (_0x3083ce, _0x531264) {
          return _0x3083ce(_0x531264);
        },
        "jLqae": function (_0x353f02, _0x19306a) {
          return _0x353f02 + _0x19306a;
        }
      };
      function _0x313278(_0x2a066d, _0x201af0) {
        return _0x1c8f12(_0x201af0, _0x2a066d - 792);
      }
      const _0x8f2660 = K,
        _0x4027dc = {
          "DSvJN": _0x5c1b15[_0x313278(2316, "i]Oi")](_0x8f2660, 476),
          "lNzVX": function (_0x3bbb73) {
            function _0x23ad99(_0x4f661f, _0x404e85) {
              return _0x313278(_0x404e85 - -531, _0x4f661f);
            }
            return _0x5c1b15[_0x23ad99("$r&&", 2678)](_0x3bbb73);
          },
          "iKcWA": _0x5c1b15[_0x313278(1581, "$]wl")],
          "EjiPR": function (_0x3ac54e, _0x2e7f5d) {
            function _0x185d6e(_0x54970f, _0x357a97) {
              return _0x313278(_0x54970f - 236, _0x357a97);
            }
            return _0x5c1b15[_0x185d6e(3695, "OjOj")](_0x3ac54e, _0x2e7f5d);
          },
          "MGSqO": _0x5c1b15.EaziX(_0x313278(1149, "A$(g") + "PI密钥", _0x5c1b15[_0x313278(3062, "FweH")])
        };
      let _0x283add = {},
        _0x399f03 = {
          "path": _0x36a8f8[_0x4027dc[_0x5c1b15.XEfuG(_0x8f2660, 758)]],
          "data": _0x36a8f8[_0x313278(2031, "2PQv") + "a"],
          "salt": _0x36a8f8[_0x313278(3664, "r#&P") + _0x313278(2239, "68zl") + _0x313278(1125, "rEA3")]
        };
      const _0x36bad2 = await _0x4027dc[_0x8f2660(392)](generateDynamicApiKey),
        {
          response: _0x5b6ba4,
          body: _0x2c7d6d
        } = await _0x5c1b15[_0x313278(1288, "Iw8c")](sendRequest, {
          "method": "POST",
          "url": SIGN_API_URL,
          "headers": {
            "Content-Type": _0x313278(2920, "&t&m") + _0x313278(2206, "#f!g") + "n/json",
            "User-Agent": _0x313278(2120, "ZyH)") + "a/5." + "0",
            "Authorization": _0x36bad2[_0x313278(2963, "$]wl")]
          },
          "body": JSON["string" + _0x313278(1975, "&t&m")]({
            ..._0x399f03,
            "timestamp": _0x36bad2[_0x5c1b15[_0x313278(3326, "&t&m")]]
          }),
          "timeout": 15000
        }, null, _0x414083);
      if (_0x2c7d6d) {
        if (_0x2c7d6d[_0x5c1b15[_0x313278(2619, "$]wl")](_0x8f2660, 612)]) {
          let _0x53dc11 = _0x2c7d6d.data[_0x5c1b15[_0x313278(3224, "wsz*")](_0x8f2660, 754)],
            _0x5aa3fb = _0x2c7d6d[_0x8f2660(684)][_0x313278(2555, "qZz4") + "nsig"];
          Object[_0x313278(1468, "G![J")](_0x283add, {
            "__NS_sig3": _0x53dc11,
            "__NStokensig": _0x5aa3fb,
            "sig": _0x2c7d6d[_0x5c1b15[_0x313278(2767, "wsz*")]][_0x8f2660(468)]
          });
          return _0x283add;
        } else {
          const _0xe873e7 = _0x2c7d6d[_0x5c1b15.CmHYO] || _0x4027dc[_0x8f2660(332)];
          console[_0x5c1b15.vBLOn]("❌ " + _0x414083 + _0x8f2660(591) + _0xe873e7);
          _0xe873e7.includes(_0x5c1b15[_0x313278(2780, "i]Oi")]) && (unauthorizedErrorCount++, console[_0x8f2660(501)](_0x5c1b15[_0x313278(1841, "5ZNg")](_0x5c1b15.froMS(_0x8f2660, 361) + " " + unauthorizedErrorCount, "/") + MAX_UNAUTHORIZED_RETRY), _0x4027dc[_0x5c1b15[_0x313278(3174, "^R3S")]](unauthorizedErrorCount, MAX_UNAUTHORIZED_RETRY) && (console[_0x8f2660(501)](_0x5c1b15[_0x313278(2726, "AeJl")](_0x313278(3262, "G![J") + _0x313278(1407, "ZVXe"), _0x5c1b15[_0x313278(3322, "lMAw")])), console[_0x5c1b15[_0x313278(1700, "h0ri")]](_0x4027dc[_0x313278(1146, "Kd26")]), process[_0x5c1b15[_0x313278(1416, "B)gy")](_0x8f2660, 583)](1)));
          return null;
        }
      } else return console[_0x5c1b15[_0x313278(1162, "X#K!")]](_0x5c1b15[_0x313278(3608, "hM!U")](_0x5c1b15.jLqae("❌ ", _0x414083), " 签名无响应")), null;
    }
    async [_0x1c8f12("2PQv", 2813) + "Repo" + "rt"](_0x54d03e, _0x4c4473, _0x47cffd, _0x291ac2, _0x2f2950, _0x1e66d1) {
      const _0x2e960f = {
          "LXnRc": function (_0x4659b, _0x3e0525) {
            return _0x4659b + _0x3e0525;
          },
          "eIQhJ": function (_0x541617, _0xf20777) {
            return _0x541617 + _0xf20777;
          },
          "WJPLJ": function (_0x28743f, _0x19af3e) {
            return _0x28743f + _0x19af3e;
          },
          "CCjrr": function (_0x3e8f4d, _0x2e8521) {
            return _0x3e8f4d(_0x2e8521);
          },
          "xZTQU": function (_0x463914, _0x9d34cb) {
            return _0x463914(_0x9d34cb);
          },
          "pUPar": _0x2c0a46("8OI@", 900),
          "FHAqp": _0x2c0a46("B)gy", 569),
          "yTgfs": "message",
          "tbxOV": _0x2c0a46("^R3S", 2272),
          "OlWxU": _0x2c0a46("B)gy", 1765) + "//ap",
          "iyfkG": function (_0x4677d7, _0x3eb255) {
            return _0x4677d7(_0x3eb255);
          },
          "xlBAa": function (_0x56d6ee, _0x3274d4) {
            return _0x56d6ee + _0x3274d4;
          },
          "mEDAc": function (_0x546f31, _0x43ea93) {
            return _0x546f31(_0x43ea93);
          },
          "NzAIK": function (_0x5a703e, _0x2cdd2a) {
            return _0x5a703e(_0x2cdd2a);
          },
          "hEOqt": function (_0x211483, _0x269252) {
            return _0x211483 + _0x269252;
          },
          "XQsxz": "proxyUrl",
          "cBRFI": _0x2c0a46("wsz*", 305),
          "DuShu": function (_0x36604a, _0x17208f) {
            return _0x36604a !== _0x17208f;
          },
          "HNFxf": "taskReport",
          "NQrAJ": _0x2c0a46("2PQv", 1432),
          "LDfBv": _0x2c0a46("#f!g", -130),
          "hyVJt": function (_0x416900, _0x4fdc94) {
            return _0x416900 + _0x4fdc94;
          },
          "GcZgt": "&sig=",
          "BeviO": function (_0x5017d5, _0x49ea78) {
            return _0x5017d5 + _0x49ea78;
          },
          "cziDY": function (_0x365b3d, _0x1300c9) {
            return _0x365b3d(_0x1300c9);
          },
          "GbiNP": _0x2c0a46("Iw8c", 1333),
          "GjZlK": _0x2c0a46("^s2q", 1524),
          "JHBVs": _0x2c0a46("0qEw", 1599) + _0x2c0a46("ZVXe", -137),
          "Prxrr": function (_0x223873, _0x39bb6e) {
            return _0x223873(_0x39bb6e);
          },
          "iqQqh": function (_0x3181fc, _0x1c8153) {
            return _0x3181fc + _0x1c8153;
          },
          "uPAPB": function (_0x269f80, _0x492295) {
            return _0x269f80 + _0x492295;
          },
          "XSXkC": "result",
          "NWvGr": "includes",
          "Xkmvc": _0x2c0a46("z$^9", 1264),
          "OZvSU": function (_0x1d7569, _0x200114) {
            return _0x1d7569 + _0x200114;
          },
          "QmRjr": _0x2c0a46("^R3S", 1583),
          "dnxMS": " 已达上限",
          "cIKUr": function (_0x599ce1, _0x446c88) {
            return _0x599ce1 + _0x446c88;
          },
          "VxcIp": "Displa" + _0x2c0a46("yuIP", 307),
          "DsmNj": function (_0x554540, _0x2e9802) {
            return _0x554540(_0x2e9802);
          }
        },
        _0x4f37b6 = K,
        _0x36f2ad = {
          "HLfLA": _0x2e960f[_0x2c0a46("h0ri", -229)],
          "PCPbD": _0x2e960f.eIQhJ(_0x2e960f[_0x2c0a46("Bugr", 2014)] + _0x2e960f.iyfkG(_0x4f37b6, 816), _0x2e960f.CCjrr(_0x4f37b6, 522)),
          "mFTEO": function (_0x10ead4, _0x6a8218) {
            return _0x2e960f.LXnRc(_0x10ead4, _0x6a8218);
          },
          "QTYzP": _0x2e960f.xlBAa(_0x2e960f[_0x2c0a46("PvqJ", -236)](_0x4f37b6, 528), "s"),
          "NLELR": _0x2e960f.mEDAc(_0x4f37b6, 464) + _0x2e960f[_0x2c0a46("A$(g", 247)](_0x4f37b6, 511) + (_0x2c0a46("B)gy", 971) + "g="),
          "VxRvJ": _0x2e960f[_0x2c0a46("0qEw", 46)](_0x4f37b6(677), _0x2c0a46("#f!g", 934) + _0x2c0a46("Bugr", 1862)) + (_0x2c0a46("2PQv", -194) + _0x2c0a46("lMAw", 1530)) + ("ded; c" + _0x2c0a46("i]Oi", -72)) + (_0x2c0a46("r#&P", 466) + "-8"),
          "DhOFm": _0x2e960f[_0x2c0a46("Z@bN", 2138)],
          "tVTko": function (_0x26b526, _0x22296c) {
            function _0x4c9248(_0x5e3686, _0xb2fc4e) {
              return _0x2c0a46(_0xb2fc4e, _0x5e3686 - 822);
            }
            return _0x2e960f[_0x4c9248(2478, "z$^9")](_0x26b526, _0x22296c);
          },
          "btekz": _0x2e960f.hEOqt("getAccount", _0x2c0a46("$r&&", 156) + "yNam") + "e",
          "UrshJ": _0x2e960f.cBRFI,
          "SJoft": _0x2c0a46("AeJl", 2307) + _0x2c0a46("%Dq0", 2103)
        };
      function _0x2c0a46(_0x2b49c0, _0x1d31fd) {
        return _0x1c8f12(_0x2b49c0, _0x1d31fd - -648);
      }
      try {
        if (_0x2e960f.DuShu(_0x2c0a46("FbMW", 316), _0x2c0a46("Bugr", 257))) _0xc00a93.log(_0x2e960f[_0x2c0a46("^s2q", 530)](_0x2e960f[_0x2c0a46("rEA3", -318)]("❌ 账号[", _0x3897d0[_0x2e960f[_0x2c0a46("Caa8", 967)](_0x101853, 542)]) + _0x2e960f[_0x2c0a46("z$^9", -18)](_0x37205b, 515), _0x51afa[_0x2e960f[_0x2c0a46("cV6N", 1452)](_0x504558, 540)])), _0x1395bb.push({
          "index": _0x359612.index,
          "remark": _0x34c5d5[_0x2e960f[_0x2c0a46("3ipA", 2024)]] || _0x2c0a46("xb56", 878),
          "nickname": "账号" + _0x18ffde[_0x2e960f[_0x2c0a46("q(oB", 143)]],
          "initialCoin": 0,
          "finalCoin": 0,
          "coinChange": 0,
          "error": _0x2cdfab[_0x2e960f.yTgfs]
        });else {
          const _0x33fa5c = _0x36f2ad[_0x4f37b6(441)] + this[_0x2e960f.HNFxf + _0x2e960f[_0x2c0a46("FweH", 806)]] + "?" + _0x36f2ad[_0x2e960f[_0x2c0a46("G![J", 1462)]](_0x2e960f[_0x2c0a46("wsz*", 1854)](_0x2e960f.hyVJt(_0x2e960f.xlBAa(this[_0x36f2ad[_0x4f37b6(828)]], _0x2e960f.GcZgt), _0x54d03e) + _0x2e960f[_0x2c0a46("ZVXe", 488)](_0x2c0a46("hM!U", 2369) + "sig3", "="), _0x4c4473) + _0x36f2ad[_0x2e960f[_0x2c0a46("^s2q", 310)](_0x4f37b6, 779)], _0x47cffd),
            {
              response: _0x227448,
              body: _0x3e9d3e
            } = await sendRequest({
              "method": _0x2e960f[_0x2c0a46("A$(g", 1631)],
              "url": _0x33fa5c,
              "headers": {
                "Content-Type": _0x36f2ad[_0x2e960f[_0x2c0a46("&t&m", 2206)]],
                "Host": "api.e.kuai" + (_0x2c0a46("FweH", 278) + "n"),
                "User-Agent": _0x4f37b6(503) + _0x2e960f[_0x2c0a46("#uGO", 2380)] + _0x2e960f[_0x2c0a46("#f!g", 1451)](_0x4f37b6, 508),
                "Content-Type": _0x2e960f[_0x2c0a46("wsz*", 1961)](_0x2e960f[_0x2c0a46("i]Oi", -49)](_0x2e960f.CCjrr(_0x4f37b6, 677), _0x4f37b6(852)) + (_0x2c0a46("$r&&", 296) + _0x2c0a46("xb56", 106)), _0x4f37b6(371))
              },
              "body": _0x291ac2,
              "timeout": 12000
            }, this[_0x36f2ad.DhOFm], this[_0x2e960f[_0x2c0a46("h0ri", 1754)](_0x2e960f.CCjrr(_0x4f37b6, 412) + _0x2e960f[_0x2c0a46("OjOj", 252)](_0x4f37b6, 388), "e")]() + " 提交任务");
          if (!_0x3e9d3e) {
            if (_0x2e960f.Prxrr(_0x4f37b6, 764) === _0x4f37b6(764)) return {
              "success": false,
              "reward": 0
            };else {
              const _0x4e2ef4 = _0x4c4473[_0x36f2ad[_0x4f37b6(645)]]?.[_0x2c0a46("wsz*", 594) + _0x2c0a46("lMAw", 1615)] || 0;
              return {
                "success": true,
                "reward": _0x4e2ef4
              };
            }
          }
          if (_0x3e9d3e[_0x2e960f.XSXkC] === 1) {
            const _0x4e8cd8 = _0x3e9d3e[_0x2e960f.CCjrr(_0x4f37b6, 684)]?.[_0x4f37b6(843)] || 0;
            return {
              "success": true,
              "reward": _0x4e8cd8
            };
          }
          if ([20107, 20108, 1003, 415][_0x2e960f[_0x2c0a46("hM!U", -166)]](_0x3e9d3e[_0x2e960f.XSXkC])) return console[_0x2e960f[_0x2c0a46("PvqJ", 989)]](_0x36f2ad[_0x2e960f.LDfBv](_0x2e960f.OZvSU(_0x36f2ad[_0x2e960f.QmRjr](_0x4f37b6(458), this[_0x36f2ad[_0x4f37b6(862)]]()) + " ", _0x1e66d1[_0x36f2ad[_0x4f37b6(661)]]), _0x2e960f[_0x2c0a46("i]Oi", 367)])), this[_0x4f37b6(807) + _0x2c0a46("q(oB", 1847)][_0x2f2950] = true, {
            "success": false,
            "reward": 0
          };
          return {
            "success": false,
            "reward": 0
          };
        }
      } catch (_0x12b4ab) {
        console[_0x2e960f.Xkmvc](_0x2e960f.xlBAa("❌ " + this[_0x2e960f.cIKUr("getAccount" + _0x2e960f.VxcIp, "e")]() + _0x36f2ad[_0x4f37b6(487)], _0x12b4ab[_0x2e960f.DsmNj(_0x4f37b6, 540)]));
        return {
          "success": false,
          "reward": 0
        };
      }
    }
    async [_0x1c8f12("FbMW", 2932) + _0x1c8f12("d420", 247) + "k"](_0xb16f4c, _0x349a2d = 1, _0x5a0039 = false, _0x5551bb = 0) {
      const _0x521bd7 = {
          "hWHlZ": function (_0x234d42, _0x4d1708) {
            return _0x234d42 + _0x4d1708;
          },
          "vsZmw": _0x2f0dd2(1805, "Caa8"),
          "gEpBL": _0x2f0dd2(1785, "#f!g") + _0x2f0dd2(1401, "i]Oi"),
          "UuYDl": _0x2f0dd2(1329, "xb56"),
          "HfXLc": function (_0xde3eea, _0x4a1ba6) {
            return _0xde3eea(_0x4a1ba6);
          },
          "dXvSQ": function (_0x3297a8, _0x2aab5a) {
            return _0x3297a8 === _0x2aab5a;
          },
          "xcdPY": _0x2f0dd2(1652, "l[QS"),
          "cKbLF": function (_0xa70dca, _0x32d4a7) {
            return _0xa70dca + _0x32d4a7;
          },
          "JcgDe": "log",
          "QrENT": function (_0x2502ac, _0x36be44) {
            return _0x2502ac(_0x36be44);
          },
          "yEVRU": _0x2f0dd2(1889, "qZz4") + "es",
          "vABUE": "EjiPR",
          "wvqtT": function (_0x5b3279, _0xca3901) {
            return _0x5b3279(_0xca3901);
          },
          "rpLZF": function (_0x170b1e, _0x5d9024) {
            return _0x170b1e + _0x5d9024;
          },
          "byBzh": "❌ 未授权错误达到上",
          "UIRdr": _0x2f0dd2(744, "2PQv") + "运行",
          "bmoHc": "OQnbB",
          "qxySf": function (_0x3c0768, _0xae2ed7) {
            return _0x3c0768 + _0xae2ed7;
          },
          "OWLgL": function (_0x487e41, _0xd5c6bd) {
            return _0x487e41 === _0xd5c6bd;
          },
          "zHYbi": "vVuLd",
          "YZxVG": function (_0x3434f2, _0x3818a2) {
            return _0x3434f2 <= _0x3818a2;
          },
          "YGduU": _0x2f0dd2(341, "&t&m"),
          "sxHeS": function (_0x3f0224, _0x30f433) {
            return _0x3f0224 + _0x30f433;
          },
          "UfqHf": _0x2f0dd2(782, "l[QS") + _0x2f0dd2(125, "t&mx"),
          "pEmVO": _0x2f0dd2(1087, "X#K!") + "中 ",
          "jxNOi": _0x2f0dd2(2490, "hM!U") + "ewar",
          "fyyOI": "金币奖励！",
          "hJhjF": "isSingleTa",
          "abjxT": _0x2f0dd2(2790, "B)gy") + "控停止",
          "lXnxI": function (_0x50ac58, _0x55eca8) {
            return _0x50ac58 + _0x55eca8;
          },
          "lNlaU": _0x2f0dd2(1994, "G![J") + "wRew",
          "gzFRg": function (_0x196de8, _0x34faa0) {
            return _0x196de8(_0x34faa0);
          },
          "JKoTz": function (_0x67683e, _0x5666de) {
            return _0x67683e(_0x5666de);
          },
          "Tmfqo": function (_0x512b1b, _0x3a4195) {
            return _0x512b1b(_0x3a4195);
          },
          "uqCRP": _0x2f0dd2(618, "Bugr"),
          "PKbId": "taskType",
          "EeGYM": "JlUfw",
          "SMzIz": function (_0x248a63, _0x594f4c) {
            return _0x248a63 === _0x594f4c;
          },
          "rBEES": function (_0x5a3dd2, _0x22c6ea) {
            return _0x5a3dd2 + _0x22c6ea;
          },
          "IPZGD": function (_0x10486d, _0x496c4b) {
            return _0x10486d(_0x496c4b);
          },
          "yVWPw": function (_0x4dd09c, _0x1b9ccf) {
            return _0x4dd09c(_0x1b9ccf);
          },
          "PFMDm": function (_0x1fb9fd, _0x23ce08) {
            return _0x1fb9fd * _0x23ce08;
          },
          "ubDJv": function (_0x17cfd3, _0x4ae70e) {
            return _0x17cfd3 - _0x4ae70e;
          },
          "ScktC": function (_0x541cab, _0x3f165b) {
            return _0x541cab + _0x3f165b;
          },
          "wjEDD": function (_0x535574, _0x2525e9) {
            return _0x535574 + _0x2525e9;
          },
          "AbPKQ": "👀 ",
          "Ncxme": _0x2f0dd2(1102, "z$^9") + _0x2f0dd2(424, "xb56"),
          "iLTJu": "AEnPR",
          "qDjUG": "_追加第",
          "EUWUt": function (_0x18ce1d, _0xfa94a2) {
            return _0x18ce1d(_0xfa94a2);
          },
          "HzFwo": function (_0x252820, _0x4d9c82) {
            return _0x252820 / _0x4d9c82;
          },
          "HCivP": function (_0x39cc8b, _0x30e390) {
            return _0x39cc8b + _0x30e390;
          },
          "FUjYz": "WECTE",
          "UzGzl": function (_0x44f4b9, _0x11f499) {
            return _0x44f4b9 + _0x11f499;
          },
          "lOdIE": _0x2f0dd2(1269, "$r&&") + " ",
          "bkEFW": _0x2f0dd2(1687, "q(oB"),
          "dNYCS": function (_0x2f8ed9, _0x4a8fc9) {
            return _0x2f8ed9 / _0x4a8fc9;
          },
          "amtvd": "tion",
          "NkApX": function (_0x2a8e76, _0x563ef7) {
            return _0x2a8e76 + _0x563ef7;
          },
          "EDQrS": function (_0x4cf656, _0x5d241f) {
            return _0x4cf656 + _0x5d241f;
          },
          "QIhQn": _0x2f0dd2(1125, "yuIP"),
          "SckUz": function (_0x5a4795, _0x15d08a) {
            return _0x5a4795 + _0x15d08a;
          },
          "vaqEg": "retryO" + _0x2f0dd2(-69, "d420"),
          "nhdHP": "success",
          "pjeXN": function (_0x59ed57, _0x59f51e) {
            return _0x59ed57(_0x59f51e);
          },
          "EaBjp": function (_0x8dc14e, _0x4d1e6d) {
            return _0x8dc14e(_0x4d1e6d);
          },
          "vwLSC": function (_0x18977d, _0x5f2fb2) {
            return _0x18977d(_0x5f2fb2);
          },
          "NvjUq": _0x2f0dd2(224, "0qEw"),
          "GFLGu": "KeWpT",
          "aSsXG": function (_0x3cc1f2, _0x1169c9) {
            return _0x3cc1f2 + _0x1169c9;
          },
          "aOILi": function (_0x50e2b5, _0x3f4ce2) {
            return _0x50e2b5 + _0x3f4ce2;
          },
          "WltaC": function (_0x2b1275, _0x519a02) {
            return _0x2b1275 + _0x519a02;
          },
          "uLgvm": function (_0x24600d, _0x4e3d81) {
            return _0x24600d + _0x4e3d81;
          },
          "WdzQf": _0x2f0dd2(2043, "OjOj"),
          "TkmJq": function (_0x101372, _0x580426) {
            return _0x101372(_0x580426);
          },
          "TAWuk": function (_0x541f8d, _0x4573fe) {
            return _0x541f8d + _0x4573fe;
          },
          "KwBIb": _0x2f0dd2(775, "rEA3") + "ount",
          "XpBLh": function (_0x8db654, _0x1f28f5) {
            return _0x8db654(_0x1f28f5);
          },
          "SydnE": _0x2f0dd2(88, "Bugr"),
          "BYMAC": function (_0x3d4086, _0x193145) {
            return _0x3d4086 + _0x193145;
          },
          "Uswpy": _0x2f0dd2(1392, "l[QS") + "！",
          "QqzON": _0x2f0dd2(-86, "&t&m"),
          "FbgXG": "lowRew" + _0x2f0dd2(2246, "h0ri"),
          "mOnSy": function (_0x164b2d, _0x5bed22) {
            return _0x164b2d + _0x5bed22;
          },
          "rWsJf": function (_0x1c8f88, _0x23faf6) {
            return _0x1c8f88 + _0x23faf6;
          },
          "CZchn": function (_0x8ee730, _0x22081e) {
            return _0x8ee730(_0x22081e);
          },
          "CRogQ": "lowRew" + _0x2f0dd2(1680, "rEA3"),
          "scLCB": _0x2f0dd2(1474, "ZyH)"),
          "glhxl": function (_0x2481f2, _0x40a712) {
            return _0x2481f2 < _0x40a712;
          },
          "gKBFf": function (_0x17e028, _0x5a79c1) {
            return _0x17e028 === _0x5a79c1;
          },
          "loCxX": function (_0xb8be61, _0x5a58fe) {
            return _0xb8be61(_0x5a58fe);
          },
          "hkcyh": function (_0x1bb578, _0x4f76db) {
            return _0x1bb578 + _0x4f76db;
          },
          "rGJyx": function (_0x573d32, _0x1ec55f) {
            return _0x573d32(_0x1ec55f);
          },
          "YUrcJ": "⚠️ ",
          "CBcnH": function (_0x43d50b, _0x4f925b) {
            return _0x43d50b + _0x4f925b;
          },
          "ajSUc": function (_0x5a5bd9, _0x323959) {
            return _0x5a5bd9 + _0x323959;
          },
          "pqsPD": function (_0x237a06, _0x43a0fa) {
            return _0x237a06 + _0x43a0fa;
          },
          "ewXsD": _0x2f0dd2(974, "ZVXe") + _0x2f0dd2(1679, "ZVXe"),
          "YiMLF": function (_0x237fba, _0x4b2c33) {
            return _0x237fba(_0x4b2c33);
          },
          "mcyqe": function (_0xe4076f, _0x20618e) {
            return _0xe4076f + _0x20618e;
          },
          "piDPP": function (_0x1de83b, _0x2fb5e3) {
            return _0x1de83b + _0x2fb5e3;
          },
          "tyUBd": function (_0x3a424a, _0x5e6067) {
            return _0x3a424a(_0x5e6067);
          },
          "npbLx": "message"
        },
        _0x19d324 = K,
        _0x29f1bf = {
          "EAksV": _0x521bd7[_0x2f0dd2(1553, "ZVXe")](_0x2f0dd2(2007, "ZyH)") + "nfig", "s"),
          "JlUfw": _0x521bd7[_0x2f0dd2(2438, "G![J")] + _0x2f0dd2(347, "8OI@"),
          "MCuUD": function (_0x306264, _0x416cb6) {
            function _0x752450(_0x5de5e1, _0x538be4) {
              return _0x2f0dd2(_0x538be4 - 839, _0x5de5e1);
            }
            const _0x4db5f2 = {
              "isRff": _0x752450("l[QS", 1444),
              "BFvFn": function (_0x2a70c9, _0x122063) {
                function _0x42761c(_0x11a9bc, _0x104f6e) {
                  return _0x752450(_0x11a9bc, _0x104f6e - -36);
                }
                return _0x521bd7[_0x42761c("PvqJ", 3437)](_0x2a70c9, _0x122063);
              },
              "AHLHP": function (_0x29c87b, _0x13e53a) {
                return _0x29c87b + _0x13e53a;
              },
              "wLYrz": _0x521bd7[_0x752450("h0ri", 2038)],
              "wzVyY": function (_0x77db40, _0x5df271) {
                return _0x77db40 + _0x5df271;
              },
              "jvNCN": _0x521bd7[_0x752450("5ZNg", 1685)],
              "dgLXf": function (_0x5441a0, _0x5c3709) {
                return _0x5441a0(_0x5c3709);
              },
              "LTSzg": _0x521bd7.UuYDl,
              "BmlGv": function (_0xe64b06, _0x28be93) {
                function _0x5df706(_0x1c7513, _0x1e9848) {
                  return _0x752450(_0x1c7513, _0x1e9848 - 88);
                }
                return _0x521bd7[_0x5df706("r#&P", 852)](_0xe64b06, _0x28be93);
              }
            };
            if (_0x521bd7[_0x752450("yuIP", 1672)](_0x752450("d420", 3266), _0x521bd7[_0x752450("z$^9", 1760)])) return _0x306264 + _0x416cb6;else {
              const _0x38c6c5 = _0x23ca16,
                _0x47105a = {
                  "DNLyf": _0x752450("Kd26", 2903),
                  "BIXgX": function (_0x2674b1, _0x175630) {
                    return _0x2674b1 + _0x175630;
                  },
                  "BwTNf": _0x4db5f2[_0x752450("d420", 2699)],
                  "JMjmk": _0x4db5f2[_0x752450("^s2q", 2468)](_0x38c6c5(365), "d")
                };
              _0x491623[_0x47105a.DNLyf](_0x4db5f2.AHLHP(_0x4db5f2[_0x752450("OjOj", 2482)], this[_0x4db5f2.wzVyY(_0x4db5f2.wzVyY("getAcc" + _0x752450("$r&&", 975), _0x38c6c5(388)), "e")]()) + _0x38c6c5(565));
              for (const [_0x2e01df, _0x1b1ba7] of _0x4d8aae[_0x38c6c5(529)](this[_0x4db5f2[_0x752450("hM!U", 1730)]])) {
                const _0x227951 = this[_0x4db5f2.AHLHP("taskCo" + _0x752450("2PQv", 1153), "s")][_0x2e01df].name;
                _0x1fca09[_0x4db5f2.dgLXf(_0x38c6c5, 501)](_0x4db5f2[_0x752450("5ZNg", 3258)](_0x47105a.BIXgX(_0x47105a[_0x38c6c5(693)](_0x47105a[_0x752450("Iw8c", 2218)] + _0x227951 + ": 成功" + _0x1b1ba7[_0x4db5f2[_0x752450("Z@bN", 1767)](_0x38c6c5, 690)], _0x4db5f2[_0x752450("l[QS", 2048)]) + _0x1b1ba7[_0x752450("PvqJ", 2768)] + _0x4db5f2[_0x752450("&t&m", 2926)](_0x38c6c5, 561), _0x1b1ba7[_0x47105a[_0x38c6c5(783)]]), "金币"));
              }
            }
          },
          "AEnPR": _0x521bd7[_0x2f0dd2(874, "8OI@")](_0x19d324, 702),
          "YRUoJ": _0x19d324(601),
          "WECTE": function (_0x25794b, _0x51f7b6) {
            return _0x25794b + _0x51f7b6;
          },
          "SPKfj": function (_0x5d1a44, _0x1c139b) {
            function _0x2b8f5b(_0x4453a9, _0x34ac8f) {
              return _0x2f0dd2(_0x4453a9 - 1248, _0x34ac8f);
            }
            return _0x521bd7[_0x2b8f5b(1711, "0qEw")](_0x5d1a44, _0x1c139b);
          },
          "syEjx": _0x521bd7[_0x2f0dd2(946, "r#&P")],
          "evGfz": _0x19d324(829),
          "YRhRB": function (_0x3bae79, _0x54e3da) {
            return _0x521bd7.cKbLF(_0x3bae79, _0x54e3da);
          },
          "cXyPT": _0x521bd7[_0x2f0dd2(1016, "hM!U")] + "d",
          "IhGfQ": function (_0x513386, _0x174a6b) {
            function _0x381c05(_0x3a10a0, _0xc28ad6) {
              return _0x2f0dd2(_0x3a10a0 - 1356, _0xc28ad6);
            }
            if (_0x521bd7.dXvSQ(_0x381c05(2941, "xb56"), _0x521bd7.bmoHc)) {
              const _0x2f98c7 = _0x1f3480.error || _0x41918c[_0x4942a1(332)];
              _0x28c544[_0x521bd7.JcgDe](_0x521bd7[_0x381c05(3045, "i]Oi")](_0x521bd7[_0x381c05(2327, "cV6N")]("❌ ", _0x2036a5), _0x521bd7.QrENT(_0x146e77, 591)) + _0x2f98c7);
              _0x2f98c7[_0x521bd7[_0x381c05(3370, "%Dq0")]]("未授权") && (_0x36232a++, _0x163cc6[_0x310e99(501)](_0x521bd7.cKbLF(_0x521bd7.cKbLF(_0x22095e(361), " ") + _0x5d0a24 + "/", _0x160a82)), _0x456ad5[_0x521bd7.vABUE](_0x1716be, _0x5b1a4d) && (_0x11a20[_0x521bd7[_0x381c05(1340, "xkwi")](_0xb2e126, 501)](_0x521bd7[_0x381c05(2407, "KgIb")](_0x521bd7[_0x381c05(2987, "qZz4")], _0x521bd7.UIRdr)), _0x20810.log(_0x37fead[_0x381c05(1381, "3ipA")]), _0x4dc8a3[_0x3d1ed3(583)](1)));
              return null;
            } else return _0x521bd7.hWHlZ(_0x513386, _0x174a6b);
          },
          "Heddh": function (_0x33df25, _0x46452e) {
            function _0x19b74f(_0x4ee551, _0x5579f7) {
              return _0x2f0dd2(_0x5579f7 - 214, _0x4ee551);
            }
            return _0x521bd7[_0x19b74f("g1XK", 2965)](_0x33df25, _0x46452e);
          },
          "GcWQM": _0x19d324(501),
          "KeWpT": function (_0x8a4b3a, _0x404a18) {
            function _0x1df127(_0x44a75e, _0x58b2be) {
              return _0x2f0dd2(_0x58b2be - 403, _0x44a75e);
            }
            const _0x31223d = {
              "uWBHm": function (_0x33e0fd, _0x45e412) {
                return _0x33e0fd(_0x45e412);
              },
              "OIrtL": _0x1df127("l[QS", 965),
              "oFVkK": function (_0x10da9f, _0x3212b0) {
                return _0x10da9f + _0x3212b0;
              },
              "YJTUK": " 获取广告异" + _0x1df127("#f!g", 2596)
            };
            if (_0x521bd7[_0x1df127("z$^9", 2892)](_0x521bd7[_0x1df127("l[QS", 2362)], _0x521bd7[_0x1df127("Caa8", 1040)])) return _0x8a4b3a + _0x404a18;else {
              if (_0x4f3045[_0x31223d.uWBHm(_0x44a736, 784)](_0x31223d[_0x1df127("A$(g", 2368)], _0x1247c0(813))) return _0x12c27a[_0x4ba024[_0x50ec54(786)]](_0x1b6d53[_0x3cf54e(780)](_0x31223d[_0x1df127("ZyH)", 1796)]("❌ " + this[_0x31223d[_0x1df127("FbMW", 631)](_0x31223d.uWBHm(_0x4ad198, 412), _0x1df127("g1XK", 1042) + "yNam") + "e"](), _0x31223d.YJTUK), _0x201743[_0x31223d[_0x1df127("2PQv", 2696)](_0x3d0265, 540)])), null;else _0x19f02f = _0xb66526[0], _0x3a4626 = _0x1b5dbf[1], _0x255945 = _0x593ede[2];
            }
          },
          "YCEwf": _0x2f0dd2(1346, "#f!g"),
          "rgjpF": _0x521bd7[_0x2f0dd2(2408, "h0ri")],
          "gxsDh": function (_0x5a34dd, _0x2ad080) {
            return _0x521bd7.YZxVG(_0x5a34dd, _0x2ad080);
          },
          "hsJWw": _0x521bd7.hJhjF + _0x2f0dd2(819, "%Dq0"),
          "viTgB": function (_0x27392e, _0x4967d2) {
            return _0x27392e + _0x4967d2;
          },
          "WlHxv": "🏁 ",
          "onvGR": _0x521bd7[_0x2f0dd2(1066, "yuIP")],
          "TOBgz": _0x521bd7.lXnxI(_0x2f0dd2(234, "$r&&") + "lTas", "ks"),
          "TjJeF": _0x521bd7.lXnxI(_0x521bd7[_0x2f0dd2(2761, "cV6N")], _0x19d324(785)),
          "SjKRb": "immedi" + _0x2f0dd2(879, "68zl") + _0x521bd7[_0x2f0dd2(2209, "i]Oi")](_0x19d324, 689) + "ld",
          "ehPGF": _0x19d324(410),
          "yIglU": ")低于",
          "RPgow": function (_0x920b8d, _0x581688) {
            return _0x920b8d + _0x581688;
          },
          "WGQjz": function (_0xaba91f, _0x12f67f) {
            function _0x151cbb(_0x4a4fcf, _0x3d33e5) {
              return _0x2f0dd2(_0x3d33e5 - 765, _0x4a4fcf);
            }
            return _0x521bd7[_0x151cbb("rEA3", 2783)](_0x151cbb("&t&m", 1106), _0x521bd7[_0x151cbb("5ZNg", 1580)]) ? _0x521bd7.cKbLF(_0xaba91f, _0x12f67f) : _0x1a038f[_0x151cbb("ZVXe", 2713) + "ng"]().search(_0x151cbb("lMAw", 2066) + "+)+)+$")[_0x151cbb("lMAw", 1269) + "ng"]()[_0x151cbb("yuIP", 3459) + _0x151cbb("#uGO", 2914)](_0xa9673a)[_0x151cbb("8OI@", 2218)]("(((.+)" + _0x151cbb("2PQv", 795));
          }
        },
        _0x3ede68 = this[_0x29f1bf[_0x521bd7.JKoTz(_0x19d324, 812)]][_0xb16f4c];
      function _0x2f0dd2(_0x24b561, _0x535641) {
        return _0x1c8f12(_0x535641, _0x24b561 - -306);
      }
      if (!_0x3ede68) return {
        "success": false,
        "reward": 0,
        "hasRewardEnd": false
      };
      if (this[_0x521bd7[_0x2f0dd2(40, "$r&&")](_0x19d324, 807) + _0x521bd7.uqCRP][_0xb16f4c]) return {
        "success": false,
        "reward": 0,
        "hasRewardEnd": false
      };
      try {
        const _0x4bbd09 = {
          ..._0x3ede68
        };
        _0x4bbd09[_0x521bd7.PKbId] = _0x349a2d;
        if (_0xb16f4c === _0x2f0dd2(157, "t&mx")) _0x4bbd09[_0x29f1bf[_0x521bd7[_0x2f0dd2(990, "z$^9")]]] = _0x5a0039 ? 7 : 1;else _0x521bd7[_0x2f0dd2(799, "AeJl")](_0x349a2d, 2) && (_0x4bbd09[_0x521bd7.rBEES(_0x521bd7.UfqHf, _0x521bd7[_0x2f0dd2(2092, "g1XK")](_0x19d324, 448))] = 7);
        const _0x2e675d = await this[_0x19d324(709) + "tion"](() => this[_0x19d324(652)](_0x4bbd09), _0x29f1bf[_0x521bd7.yVWPw(_0x19d324, 358)]("获取", _0x3ede68[_0x29f1bf.AEnPR]) + "信息", 3);
        if (!_0x2e675d) return this[_0x2f0dd2(2040, "%Dq0") + "ats"][_0xb16f4c][_0x29f1bf.YRUoJ]++, {
          "success": false,
          "reward": 0,
          "hasRewardEnd": false
        };
        const _0x337b1a = Math[_0x19d324(451)](_0x521bd7.rBEES(_0x521bd7[_0x2f0dd2(59, "Z@bN")](Math[_0x2f0dd2(2311, "Iw8c")](), _0x521bd7.ubDJv(WATCH_TIME_MAX, WATCH_TIME_MIN)), WATCH_TIME_MIN)) * 1000;
        _0x5a0039 && _0x5551bb > 0 ? console[_0x19d324(501)](_0x29f1bf[_0x19d324(358)](_0x29f1bf[_0x19d324(788)](_0x521bd7[_0x2f0dd2(1180, "#f!g")](_0x29f1bf[_0x2f0dd2(1201, "Bugr")](_0x521bd7.wjEDD(_0x521bd7[_0x2f0dd2(2432, "Kd26")], this[_0x521bd7[_0x2f0dd2(2314, "l[QS")](_0x19d324, 412) + _0x521bd7[_0x2f0dd2(354, "yuIP")] + "e"]()), " "), _0x3ede68[_0x29f1bf[_0x521bd7[_0x2f0dd2(2569, "rEA3")]]]) + _0x521bd7[_0x2f0dd2(640, "A$(g")], _0x5551bb) + _0x29f1bf[_0x521bd7.JKoTz(_0x19d324, 675)] + Math[_0x521bd7[_0x2f0dd2(1615, "xb56")](_0x19d324, 383)](_0x521bd7.HzFwo(_0x337b1a, 1000)), "秒")) : console[_0x521bd7.JcgDe](_0x521bd7.ScktC(_0x521bd7.HCivP(_0x29f1bf[_0x521bd7[_0x2f0dd2(2816, "^R3S")]](_0x521bd7.sxHeS(_0x521bd7[_0x2f0dd2(1518, "t&mx")] + this[_0x521bd7[_0x2f0dd2(1760, "z$^9")](_0x521bd7[_0x2f0dd2(1597, "3ipA")](_0x2f0dd2(2186, "^R3S") + _0x2f0dd2(1981, "%Dq0"), _0x2f0dd2(2349, "hM!U") + "yNam"), "e")](), " "), _0x3ede68[_0x29f1bf[_0x521bd7[_0x2f0dd2(2450, "r#&P")]]]) + _0x521bd7[_0x2f0dd2(1663, "rEA3")], Math[_0x521bd7[_0x2f0dd2(328, "xkwi")]](_0x521bd7[_0x2f0dd2(927, "FbMW")](_0x337b1a, 1000))), "秒"));
        await new Promise(_0x2944e2 => setTimeout(_0x2944e2, _0x337b1a));
        const _0x3ad863 = await this[_0x2f0dd2(186, "ZyH)") + _0x2f0dd2(1653, "g1XK") + _0x521bd7[_0x2f0dd2(2646, "hM!U")]](() => this[_0x2f0dd2(537, "lMAw") + "teSi" + _0x19d324(562)](_0x2e675d[_0x2f0dd2(1361, "5ZNg")], _0x2e675d[_0x19d324(609)], _0xb16f4c, _0x4bbd09), _0x521bd7[_0x2f0dd2(1777, "$]wl")](_0x521bd7.EDQrS("生成", _0x3ede68.name), "签名"), 3);
        if (!_0x3ad863) return this[_0x29f1bf[_0x2f0dd2(1323, "Bugr")]][_0xb16f4c][_0x521bd7[_0x2f0dd2(1132, "i]Oi")]]++, {
          "success": false,
          "reward": 0,
          "hasRewardEnd": false
        };
        const _0x41fff7 = await this[_0x521bd7.SckUz(_0x521bd7.vaqEg, _0x521bd7[_0x2f0dd2(983, "Z@bN")])](() => this["submit" + _0x2f0dd2(368, "l[QS") + "rt"](_0x3ad863.sig, _0x3ad863[_0x2f0dd2(2249, "$r&&")], _0x3ad863.sigtoken, _0x3ad863.post, _0xb16f4c, _0x4bbd09), _0x29f1bf[_0x19d324(840)]("提交" + _0x3ede68[_0x19d324(702)], "报告"), 3);
        if (_0x41fff7?.[_0x19d324(690)]) {
          this[_0x2f0dd2(2647, "rEA3") + _0x2f0dd2(2279, "%Dq0")][_0xb16f4c][_0x521bd7.nhdHP]++;
          const _0x53c27c = _0x41fff7[_0x521bd7.gzFRg(_0x19d324, 705)] || 0;
          this[_0x19d324(829)][_0xb16f4c][_0x29f1bf[_0x521bd7[_0x2f0dd2(1314, "$]wl")](_0x19d324, 662)]] += _0x53c27c;
          _0x5a0039 && _0x5551bb > 0 ? console[_0x521bd7[_0x2f0dd2(431, "lMAw")](_0x19d324, 501)](_0x29f1bf[_0x521bd7.FUjYz](_0x29f1bf[_0x19d324(788)](_0x29f1bf[_0x521bd7[_0x2f0dd2(2182, "2PQv")](_0x19d324, 338)](_0x29f1bf[_0x19d324(642)](_0x521bd7[_0x2f0dd2(2382, "wsz*")](_0x19d324, 681), this[_0x521bd7[_0x2f0dd2(493, "G![J")](_0x19d324(412), _0x19d324(388)) + "e"]()), " ") + _0x3ede68.name, "_追加第") + _0x5551bb, _0x521bd7[_0x2f0dd2(2440, "hM!U")]) + _0x53c27c + _0x2f0dd2(1069, "^s2q")) : console[_0x29f1bf[_0x2f0dd2(1124, "#f!g")]](_0x29f1bf[_0x521bd7.GFLGu](_0x521bd7.aSsXG(_0x521bd7[_0x2f0dd2(1560, "^s2q")](_0x29f1bf[_0x521bd7[_0x2f0dd2(824, "AeJl")](_0x19d324, 697)](_0x29f1bf.YCEwf, this[_0x521bd7[_0x2f0dd2(1258, "PvqJ")](_0x521bd7.uLgvm(_0x2f0dd2(2186, "^R3S") + _0x2f0dd2(1246, "q(oB"), _0x521bd7.Ncxme), "e")]()), " "), _0x3ede68[_0x19d324(702)]), _0x2f0dd2(-27, "2PQv")) + _0x53c27c + _0x29f1bf[_0x19d324(815)]);
          _0x29f1bf[_0x521bd7.WdzQf](_0x53c27c, this[_0x521bd7[_0x2f0dd2(-76, "hM!U")](_0x19d324, 380) + _0x521bd7.TkmJq(_0x19d324, 436)]) ? (this[_0x521bd7.hWHlZ(_0x19d324(833), "ardFlags")][_0xb16f4c] = true, console[_0x29f1bf[_0x19d324(471)]](_0x521bd7.aOILi(_0x19d324(458) + this[_0x521bd7.TAWuk(_0x521bd7[_0x2f0dd2(1431, "#f!g")](_0x521bd7.KwBIb, _0x521bd7[_0x2f0dd2(50, "z$^9")](_0x19d324, 388)), "e")]() + " ", _0x3ede68[_0x19d324(702)]) + (_0x5a0039 ? _0x521bd7[_0x2f0dd2(2779, "h0ri")] : "") + _0x521bd7.BYMAC(_0x19d324(718), _0x521bd7.Uswpy)), this[_0x29f1bf[_0x521bd7[_0x2f0dd2(885, "i]Oi")]]] && (this[_0x2f0dd2(954, "#uGO") + "ardS" + _0x19d324(431)]++, this[_0x521bd7[_0x2f0dd2(747, "h0ri")] + "treak"] >= this[_0x19d324(767) + "imit"] && (console[_0x521bd7[_0x2f0dd2(1820, "5ZNg")]](_0x29f1bf[_0x19d324(405)](_0x521bd7.aOILi(_0x521bd7.sxHeS(_0x521bd7[_0x2f0dd2(1416, "h0ri")](_0x29f1bf[_0x19d324(686)], this[_0x521bd7[_0x2f0dd2(524, "68zl")](_0x521bd7[_0x2f0dd2(2158, "#f!g")](_0x19d324, 412) + _0x521bd7[_0x2f0dd2(497, "G![J")], "e")]()), " 连续"), this[_0x521bd7[_0x2f0dd2(208, "B)gy")] + _0x521bd7[_0x2f0dd2(-17, "t&mx")]]), _0x29f1bf[_0x19d324(378)])), this[_0x29f1bf.TOBgz] = true))) : (this[_0x29f1bf[_0x19d324(475)]][_0xb16f4c] = false, this[_0x19d324(822) + _0x19d324(431)] = 0);
          if (_0x521bd7[_0x2f0dd2(1114, "B)gy")](_0x53c27c, this[_0x29f1bf.SjKRb])) {
            if (_0x521bd7[_0x2f0dd2(1081, "^R3S")](_0x29f1bf[_0x521bd7[_0x2f0dd2(1972, "hM!U")](_0x19d324, 420)], _0x2f0dd2(1083, "ZVXe"))) {
              const _0x5cd10c = _0x5551bb[_0x2f0dd2(278, "ZyH)")](_0x29f1bf[1]);
              if (_0x5cd10c && _0x5cd10c.t) return _0x521bd7.JKoTz(_0x4bbd09, _0x5cd10c.t);
            } else console[_0x521bd7[_0x2f0dd2(397, "lMAw")](_0x19d324, 501)](_0x521bd7[_0x2f0dd2(490, "0qEw")](_0x521bd7.hkcyh(_0x29f1bf[_0x521bd7[_0x2f0dd2(1133, "Bugr")](_0x19d324, 642)](_0x521bd7[_0x2f0dd2(2625, "3ipA")] + this[_0x521bd7.CBcnH(_0x19d324(412) + (_0x2f0dd2(1927, "0qEw") + "yNam"), "e")](), _0x19d324(769)) + _0x53c27c, _0x29f1bf.yIglU), this[_0x521bd7[_0x2f0dd2(1869, "2PQv")](_0x521bd7.pqsPD(_0x2f0dd2(2435, "Z@bN") + "ateS", _0x521bd7.Tmfqo(_0x19d324, 689)), "ld")]));
          }
          return {
            "success": true,
            "reward": _0x53c27c,
            "hasRewardEnd": _0x2e675d[_0x521bd7[_0x2f0dd2(333, "Bugr")] + "nd"] || false
          };
        }
        this[_0x19d324(829)][_0xb16f4c][_0x521bd7[_0x2f0dd2(1813, "Iw8c")](_0x19d324, 601)]++;
        return {
          "success": false,
          "reward": 0,
          "hasRewardEnd": false
        };
      } catch (_0x21324b) {
        console[_0x2f0dd2(636, "wsz*")](_0x29f1bf[_0x2f0dd2(848, "3ipA")](_0x29f1bf[_0x521bd7[_0x2f0dd2(1951, "xkwi")](_0x19d324, 649)](_0x521bd7[_0x2f0dd2(2797, "3ipA")](_0x29f1bf[_0x521bd7.YiMLF(_0x19d324, 866)]("❌ ", this[_0x521bd7[_0x2f0dd2(1934, "lMAw")](_0x521bd7.piDPP(_0x521bd7.EaBjp(_0x19d324, 412), _0x2f0dd2(294, "&t&m") + _0x2f0dd2(1544, "^s2q")), "e")]()), _0x521bd7.tyUBd(_0x19d324, 551)) + _0xb16f4c, _0x521bd7.gzFRg(_0x19d324, 680)), _0x21324b[_0x521bd7[_0x2f0dd2(694, "FbMW")]]));
        this.taskStats[_0xb16f4c].failed++;
        return {
          "success": false,
          "reward": 0,
          "hasRewardEnd": false
        };
      }
    }
    [K(733) + K(513)]() {
      const _0x663e05 = {
        "jqSol": function (_0x45d312, _0x526a6a) {
          return _0x45d312 % _0x526a6a;
        },
        "gUtJA": _0x428aa9(3778, "Caa8") + "n",
        "kkMzg": "feeds",
        "kXiYq": function (_0x4a5661, _0x2ef844) {
          return _0x4a5661(_0x2ef844);
        },
        "lemkX": _0x428aa9(2275, "3ipA"),
        "dvEcO": function (_0x2fc05c, _0x1bcd3d) {
          return _0x2fc05c + _0x1bcd3d;
        },
        "zCFpW": "DCFSh",
        "BLpUl": function (_0x3a3104, _0x56764f) {
          return _0x3a3104(_0x56764f);
        },
        "nxJIj": "adDataV2",
        "vfJtw": function (_0x37b7e2, _0x5d6a1d) {
          return _0x37b7e2 + _0x5d6a1d;
        },
        "DWGcv": _0x428aa9(2704, "KgIb") + "ainR",
        "oeWrZ": function (_0x496cc8, _0x3efa24) {
          return _0x496cc8(_0x3efa24);
        },
        "NvkWm": function (_0x1d8d27, _0x504d2e) {
          return _0x1d8d27 + _0x504d2e;
        },
        "nvgbl": _0x428aa9(1066, "Caa8"),
        "mQpmM": _0x428aa9(2539, "$r&&") + _0x428aa9(3539, "Kd26"),
        "kYxFN": function (_0xc56fc, _0x249483) {
          return _0xc56fc(_0x249483);
        },
        "GnYkb": "creativeId",
        "bRNHG": function (_0x2df26b, _0x276bf6) {
          return _0x2df26b === _0x276bf6;
        },
        "YKYcx": "fhUiG",
        "vcxsp": function (_0x3cd9ab, _0x30d1e1) {
          return _0x3cd9ab + _0x30d1e1;
        },
        "qKwDv": function (_0x497f84, _0x21122a) {
          return _0x497f84(_0x21122a);
        },
        "GnVXq": function (_0x24476f, _0xfc638c) {
          return _0x24476f + _0xfc638c;
        },
        "nWHNR": _0x428aa9(1690, "G![J") + _0x428aa9(1379, "qZz4"),
        "PYFns": function (_0x5de0d2, _0x3aa1f0) {
          return _0x5de0d2 === _0x3aa1f0;
        },
        "MvbuO": function (_0x45cd69, _0x1cf1a0) {
          return _0x45cd69 < _0x1cf1a0;
        },
        "TKhFc": "zGCdW",
        "fYrPO": function (_0x48bd08, _0xb8597b) {
          return _0x48bd08(_0xb8597b);
        },
        "fkbvj": function (_0x2cf528, _0x2aa32c) {
          return _0x2cf528 + _0x2aa32c;
        },
        "kcjBu": _0x428aa9(1122, "FbMW"),
        "SMtKd": function (_0x4c497f, _0x451cf2) {
          return _0x4c497f + _0x451cf2;
        },
        "vzbsZ": "taskLo" + _0x428aa9(2407, "q(oB"),
        "BdBiT": function (_0x3335e7, _0x28ebe4) {
          return _0x3335e7 + _0x28ebe4;
        }
      };
      function _0x428aa9(_0x54552e, _0x1cf93e) {
        return _0x1c8f12(_0x1cf93e, _0x54552e - 650);
      }
      const _0x2b9742 = K,
        _0x26c57e = {
          "zGCdW": function (_0x3190b8, _0x34ac22) {
            function _0x54919a(_0xa253ba, _0x1049f6) {
              return _0x428aa9(_0xa253ba - 102, _0x1049f6);
            }
            return _0x663e05[_0x54919a(3722, "wsz*")](_0x3190b8, _0x34ac22);
          },
          "zkjGE": function (_0xe90525, _0xf44595) {
            function _0x463099(_0x40840f, _0x5622aa) {
              return _0x428aa9(_0x5622aa - -1337, _0x40840f);
            }
            if (_0x663e05[_0x463099("^s2q", 1852)](_0x463099("z$^9", 1064), _0x663e05[_0x463099("^s2q", -186)])) {
              const _0x69bb64 = _0x5607ab[_0x5adcba[_0x463099("t&mx", 1102)]][0][_0x663e05.gUtJA] || _0x5820e5[_0x663e05[_0x463099("ZVXe", 1378)]][0].ad?.[_0x663e05[_0x463099("0qEw", 1341)](_0x5b184f, 865)] || "";
              _0x69bb64 && _0x485517[_0xdf6808[_0x663e05[_0x463099("hM!U", 293)]]](_0x663e05[_0x463099("A$(g", 1725)]("✅ ", this[_0xccc5a4[_0x663e05.zCFpW]]()) + _0x663e05[_0x463099("5ZNg", 1894)](_0x83f134, 655) + _0x69bb64);
              const _0x9f1d6 = _0x26c41c[_0x23924f(607)][0][_0x125925(418)] || "",
                _0x200ee3 = _0x9f1d6[_0x59a705(421)]("/")[1]?.[_0x663e05.kXiYq(_0x263788, 421)]("_")?.[0] || "";
              let _0x4d6237 = false;
              try {
                const _0x145606 = _0x79333b[_0x2a3272[_0x663e05[_0x463099("68zl", 2010)](_0x192f21, 394)]][0].ad?.[_0x663e05[_0x463099("#f!g", -134)]],
                  _0x38367c = _0x145606?.[_0x663e05[_0x463099("0qEw", 1775)](_0x663e05.DWGcv, "ewardInfo")];
                _0x38367c?.[_0x663e05[_0x463099("3ipA", 653)](_0x2278ca, 494)] && (_0x4d6237 = true, _0x3074a1[_0x4d3e03[_0x663e05.lemkX]](_0x663e05[_0x463099("8OI@", 2356)](_0x663e05[_0x463099("FweH", 451)](_0x663e05[_0x463099("z$^9", 872)], this[_0x663e05[_0x463099("Caa8", 1321)] + _0x1f56f9(388) + "e"]()), _0x1a989b(737))));
              } catch (_0x238f48) {}
              return {
                "cid": _0x57a8b3[_0x663e05[_0x463099("G![J", -109)](_0x3c9037, 607)][0].ad[_0x663e05[_0x463099("wsz*", 772)]],
                "llsid": _0x200ee3,
                "hasRewardEnd": _0x4d6237
              };
            } else return _0x663e05.vcxsp(_0xe90525, _0xf44595);
          },
          "PpTQA": _0x663e05.qKwDv(_0x2b9742, 643) + "cute"
        },
        _0x37bcc9 = this[_0x663e05[_0x428aa9(1940, "&t&m")](_0x663e05.nWHNR, _0x2b9742(808))][_0x428aa9(2289, "X#K!")];
      if (_0x663e05.PYFns(_0x37bcc9, 1)) return this[_0x2b9742(643) + _0x428aa9(3284, "xb56")][0];
      for (let _0x119eec = 0; _0x663e05.MvbuO(_0x119eec, _0x37bcc9); _0x119eec++) {
        this[_0x428aa9(1878, "X#K!") + _0x428aa9(955, "#uGO") + _0x2b9742(413)] = _0x26c57e[_0x663e05.TKhFc](_0x26c57e[_0x428aa9(1425, "PvqJ")](this[_0x428aa9(1871, "i]Oi") + "tTas" + _0x663e05.fYrPO(_0x2b9742, 413)], 1), _0x37bcc9);
        const _0x197b13 = this[_0x26c57e[_0x2b9742(817)]][this[_0x663e05[_0x428aa9(1761, "FbMW")](_0x663e05.kXiYq(_0x2b9742, 795), _0x663e05[_0x428aa9(1911, "i]Oi")])]];
        if (!this[_0x663e05[_0x428aa9(3136, "rEA3")](_0x663e05[_0x428aa9(2998, "$]wl")], _0x428aa9(916, "Z@bN") + "gs")][_0x197b13] && !this[_0x663e05[_0x428aa9(2138, "A$(g")](_0x428aa9(3704, "KgIb") + _0x428aa9(3333, "h0ri"), _0x663e05[_0x428aa9(1488, "Kd26")](_0x2b9742, 532))][_0x197b13]) return _0x197b13;
      }
      return null;
    }
    ["allTasksHa" + (_0x1c8f12("FbMW", 2131) + "ewar") + "d"]() {
      function _0x32a334(_0x426e75, _0x2064ca) {
        return _0x1c8f12(_0x426e75, _0x2064ca - 864);
      }
      const _0x59f33f = K,
        _0x586003 = {
          "Pilte": _0x59f33f(643) + "cute"
        };
      return this[_0x586003[_0x59f33f(416)]][_0x59f33f(823)](_0x5022a0 => this[_0x59f33f(833) + (_0x32a334("r#&P", 3094) + "gs")][_0x5022a0] || this[_0x32a334("xkwi", 2605) + "mitR" + _0x59f33f(532)][_0x5022a0]);
    }
    async [_0x1c8f12("l[QS", 2903) + "AdRe" + "st"](_0x283cb9) {
      const _0x31f099 = {
          "Ugouc": function (_0x36ac70, _0x22272f) {
            return _0x36ac70 + _0x22272f;
          },
          "CwYHe": function (_0x31f4d8, _0x163803) {
            return _0x31f4d8 * _0x163803;
          },
          "VBQbd": "azOYh",
          "dEXAB": function (_0x40b24d, _0x4670bc) {
            return _0x40b24d + _0x4670bc;
          },
          "arPWX": function (_0x3783a0, _0x423ec5) {
            return _0x3783a0 === _0x423ec5;
          },
          "DEUbt": _0x413cef("wsz*", 1683),
          "Pxkte": "getAcc" + _0x413cef("l[QS", 424),
          "OyvHv": _0x413cef("q(oB", 2611) + _0x413cef("%Dq0", 1584),
          "WAPWA": _0x413cef("r#&P", 1576),
          "Mxijm": function (_0x5bda20, _0x3467b0) {
            return _0x5bda20(_0x3467b0);
          },
          "TgbCM": "round",
          "LSULX": function (_0x4f6fdc, _0x162778) {
            return _0x4f6fdc / _0x162778;
          }
        },
        _0x449617 = K,
        _0x4a01fe = {
          "CTVZH": function (_0x5b19f3, _0xc9c84d) {
            return _0x31f099.Ugouc(_0x5b19f3, _0xc9c84d);
          },
          "cHJYs": function (_0x33b1fc, _0x59dc0f) {
            function _0x22cfb1(_0x1a4183, _0x54ac68) {
              return _0x413cef(_0x54ac68, _0x1a4183 - 85);
            }
            return _0x31f099[_0x22cfb1(2103, "5ZNg")](_0x33b1fc, _0x59dc0f);
          },
          "EaMfM": function (_0x2305db, _0x5bb754) {
            return _0x2305db + _0x5bb754;
          },
          "VCIYI": function (_0x5d7f8e, _0x4a39a8) {
            function _0x17833f(_0x12ce6f, _0x4d4928) {
              return _0x413cef(_0x4d4928, _0x12ce6f - 379);
            }
            if (_0x31f099.VBQbd !== "azOYh") {
              const _0xd9eb6b = {
                  "UVISQ": _0x17833f(2668, "G![J") + "+)+)+$"
                },
                _0x2c5b89 = _0x15234f(this, function () {
                  function _0x460e5a(_0x5f59d2, _0x1dc3d8) {
                    return _0x17833f(_0x1dc3d8 - 89, _0x5f59d2);
                  }
                  return _0x2c5b89.toString().search(_0xd9eb6b[_0x460e5a("d420", 1119)])[_0x460e5a("2PQv", 308) + "ng"]()[_0x460e5a("wsz*", 2428) + "uctor"](_0x2c5b89).search(_0x460e5a("^s2q", 1866) + _0x460e5a("wsz*", 2604));
                });
              _0x2c5b89();
              return _0x7de43(_0x714453);
            } else return _0x31f099.dEXAB(_0x5d7f8e, _0x4a39a8);
          }
        };
      function _0x413cef(_0x55aed6, _0x35bcec) {
        return _0x1c8f12(_0x55aed6, _0x35bcec - -413);
      }
      if (_0x283cb9 > 0 && _0x31f099.arPWX(_0x283cb9 % AD_APPEND_REST_INTERVAL, 0)) {
        const _0x205866 = _0x4a01fe[_0x31f099[_0x413cef("i]Oi", 1038)]](Math.floor(_0x4a01fe[_0x449617(602)](Math[_0x449617(334)](), AD_APPEND_REST_MAX - AD_APPEND_REST_MIN)), AD_APPEND_REST_MIN);
        console[_0x449617(501)](_0x4a01fe[_0x413cef("z$^9", 411)](_0x4a01fe[_0x413cef("ZyH)", 1805)](_0x4a01fe[_0x413cef("8OI@", 1970)]("⏱ ", this[_0x31f099.Ugouc(_0x31f099.Pxkte, _0x31f099[_0x413cef("Bugr", 2605)]) + "e"]()) + _0x31f099.WAPWA + _0x283cb9, _0x31f099.Mxijm(_0x449617, 399)), Math[_0x31f099.TgbCM](_0x31f099[_0x413cef("X#K!", 2458)](_0x205866, 1000))) + "秒");
        await new Promise(_0x3c25d5 => setTimeout(_0x3c25d5, _0x205866));
      }
    }
    async [_0x1c8f12("t&mx", 2331) + _0x1c8f12("Bugr", 2641) + (_0x1c8f12("qZz4", 2076) + "ppen") + "d"](_0x20933a, _0x2f44de = 10) {
      const _0x35ffd2 = {
        "ZqAPD": function (_0x1a44e, _0x2f88e3) {
          return _0x1a44e >= _0x2f88e3;
        },
        "JrlLP": function (_0x289e00, _0x252bd6) {
          return _0x289e00 + _0x252bd6;
        },
        "CMbIY": function (_0xb094d8, _0x448228) {
          return _0xb094d8(_0x448228);
        },
        "poeul": "TWwUa",
        "khtUi": _0x307608(741, "i]Oi"),
        "vneRK": "❌ 未授权错" + _0x307608(1392, "Kd26"),
        "FUgZP": function (_0x24a26a, _0x269739) {
          return _0x24a26a === _0x269739;
        },
        "kUkHb": _0x307608(1088, "G![J"),
        "OzJJT": function (_0x66f613, _0x1745bc) {
          return _0x66f613 + _0x1745bc;
        },
        "SZdVA": function (_0x1c7b6a, _0x2e5ff9) {
          return _0x1c7b6a(_0x2e5ff9);
        },
        "GWJDy": _0x307608(1863, "xkwi") + _0x307608(1701, "$]wl"),
        "eaJdR": "log",
        "MrhaM": function (_0x4a1ba5, _0x538755) {
          return _0x4a1ba5 + _0x538755;
        },
        "nICrg": "coinLi" + _0x307608(1751, "Caa8"),
        "WdMNg": _0x307608(623, "yuIP") + _0x307608(1424, "OjOj"),
        "kMGMY": "stopAl" + _0x307608(2143, "PvqJ"),
        "ixRHk": "totalC" + _0x307608(879, "hM!U"),
        "DpRLu": _0x307608(2064, "cV6N") + "ount",
        "ctSai": function (_0x217a9d, _0x494f58) {
          return _0x217a9d(_0x494f58);
        },
        "EJpeE": function (_0x59c301, _0x11e06a) {
          return _0x59c301(_0x11e06a);
        },
        "bposk": _0x307608(828, "q(oB"),
        "rdWqq": "map",
        "yvpaL": function (_0x44f46d, _0x1957f9) {
          return _0x44f46d + _0x1957f9;
        },
        "kVDnc": _0x307608(2199, "#f!g") + _0x307608(321, "h0ri"),
        "gzEMQ": _0x307608(1459, "3ipA") + "ld",
        "zDJNS": function (_0x365078, _0xdee6eb) {
          return _0x365078(_0xdee6eb);
        },
        "GTxqQ": function (_0x19e878, _0x4c77c6) {
          return _0x19e878(_0x4c77c6);
        },
        "BqLmI": function (_0x3fb605, _0x1c7f31) {
          return _0x3fb605 + _0x1c7f31;
        },
        "nIcIq": function (_0x4d894b, _0x48bb2b) {
          return _0x4d894b(_0x48bb2b);
        },
        "hkTMO": function (_0x45dd58, _0x5e61f2) {
          return _0x45dd58(_0x5e61f2);
        },
        "msWAc": function (_0x47e2c8, _0x27cf44) {
          return _0x47e2c8 <= _0x27cf44;
        },
        "tPORq": function (_0x255272, _0x5dae97) {
          return _0x255272 !== _0x5dae97;
        },
        "wbhRq": "QfoKA",
        "fHjeC": function (_0x1bab42, _0x455843) {
          return _0x1bab42 + _0x455843;
        },
        "XXVvd": "taskCo" + _0x307608(3018, "g1XK"),
        "NiQFq": function (_0x1fcd53, _0x11b6af) {
          return _0x1fcd53(_0x11b6af);
        },
        "SLTPP": "appendAdRe",
        "jMCaG": _0x307608(933, "aiqQ") + "eTas",
        "VhSqG": function (_0x3f026b, _0x3818ff) {
          return _0x3f026b(_0x3818ff);
        },
        "AxJzP": function (_0x1b2bc5, _0x34aa46) {
          return _0x1b2bc5(_0x34aa46);
        },
        "lzhpz": "ilableTask",
        "UNZtR": function (_0x1855c5, _0x145ae7) {
          return _0x1855c5 !== _0x145ae7;
        },
        "spJvh": function (_0x552672, _0x1a07a1) {
          return _0x552672(_0x1a07a1);
        },
        "WObtl": function (_0x3bb917, _0x22c3ee) {
          return _0x3bb917 + _0x22c3ee;
        },
        "dDKfq": function (_0x402292, _0x54d83f) {
          return _0x402292 + _0x54d83f;
        },
        "LCtpI": function (_0x3e294c, _0x55537a) {
          return _0x3e294c + _0x55537a;
        },
        "oXWTN": function (_0x1d225e, _0x2c7a9e) {
          return _0x1d225e(_0x2c7a9e);
        },
        "xUONp": _0x307608(1003, "KgIb"),
        "XzWJU": function (_0x937b3a, _0x3e592c) {
          return _0x937b3a(_0x3e592c);
        },
        "mcKtl": _0x307608(1483, "AeJl") + "leTa",
        "vFPjE": function (_0x1fbb89, _0x20507b) {
          return _0x1fbb89 + _0x20507b;
        },
        "SACEn": function (_0x28c502, _0x2247ad) {
          return _0x28c502(_0x2247ad);
        },
        "bfYxV": _0x307608(2151, "3ipA"),
        "QOAUT": _0x307608(1937, "Caa8") + _0x307608(1784, "d420"),
        "kSrhb": _0x307608(2769, "ZVXe") + "个任务",
        "WPglv": function (_0x124230, _0x592778) {
          return _0x124230 + _0x592778;
        },
        "AQuqY": function (_0x7c1613, _0x5c128a) {
          return _0x7c1613(_0x5c128a);
        },
        "MvGGD": function (_0x9862a9, _0x56cfe4) {
          return _0x9862a9(_0x56cfe4);
        },
        "KQvzZ": function (_0x448287, _0xb3c9e5) {
          return _0x448287(_0xb3c9e5);
        },
        "TzuWf": function (_0x2dc1db, _0x2ea110) {
          return _0x2dc1db + _0x2ea110;
        },
        "DZnbv": "dyxQU",
        "ljIVo": function (_0x36c846, _0x3881de) {
          return _0x36c846 + _0x3881de;
        },
        "aGUno": _0x307608(1662, "AeJl"),
        "odrsU": _0x307608(1481, "Bugr"),
        "UOAEp": function (_0xe0518e, _0x50ad62) {
          return _0xe0518e !== _0x50ad62;
        },
        "zwrbB": "duObx",
        "KnKml": _0x307608(2104, "0qEw"),
        "wpMrM": "cHUvu",
        "EUJUO": _0x307608(2991, "t&mx"),
        "Sahvc": _0x307608(1213, "i]Oi")
      };
      function _0x307608(_0x4ae00d, _0x2c54d1) {
        return _0x1c8f12(_0x2c54d1, _0x4ae00d - -70);
      }
      const _0x196850 = K,
        _0x1497b9 = {
          "dyxQU": function (_0x42fa28, _0x34710d) {
            return _0x42fa28 + _0x34710d;
          },
          "kwkha": _0x35ffd2[_0x307608(1959, "rEA3")],
          "HEJmg": "env",
          "cHUvu": _0x35ffd2[_0x307608(1410, "3ipA")],
          "tqJYP": _0x196850(690),
          "XdNex": _0x35ffd2[_0x307608(2202, "FweH")](_0x35ffd2[_0x307608(1859, "l[QS")], _0x35ffd2.gzEMQ),
          "ebozc": _0x35ffd2[_0x307608(1740, "G![J")](_0x196850, 370),
          "aoNOV": _0x307608(1638, "#uGO") + _0x307608(2614, "Kd26") + "nd",
          "GVWxj": function (_0x2af33e, _0x339dce) {
            return _0x2af33e < _0x339dce;
          },
          "pBSAE": _0x35ffd2[_0x307608(2455, "$]wl")](_0x196850, 501),
          "TBQyY": _0x35ffd2.CMbIY(_0x196850, 605) + _0x196850(639),
          "lVokK": function (_0x3c1dd3, _0x230874) {
            function _0x36da2a(_0x240a3d, _0x3023bb) {
              return _0x307608(_0x3023bb - 1150, _0x240a3d);
            }
            return _0x35ffd2[_0x36da2a("#uGO", 1464)](_0x3c1dd3, _0x230874);
          },
          "yOwHo": _0x35ffd2[_0x307608(693, "AeJl")](_0x35ffd2[_0x307608(2268, "xkwi")](_0x196850, 412) + _0x35ffd2[_0x307608(1737, "r#&P")](_0x196850, 388), "e"),
          "pFBak": function (_0x391885, _0x284abf) {
            function _0x46c1de(_0x46d5b1, _0x5d4091) {
              return _0x307608(_0x46d5b1 - 613, _0x5d4091);
            }
            return _0x35ffd2[_0x46c1de(1602, "$r&&")](_0x391885, _0x284abf);
          },
          "xgxlZ": function (_0x1d63a8, _0x21262f) {
            const _0x486d4b = {
              "GkKTl": function (_0x33a349, _0x10bb87) {
                return _0x33a349(_0x10bb87);
              },
              "SXEoc": function (_0xddd996, _0x5b1be1) {
                return _0x35ffd2.CMbIY(_0xddd996, _0x5b1be1);
              },
              "bvowU": _0x22a05c(2131, "aiqQ"),
              "lvgJp": _0x35ffd2.poeul,
              "CGKMN": _0x35ffd2[_0x22a05c(605, "B)gy")],
              "cMBjW": function (_0x4970ea, _0x507ddc) {
                return _0x4970ea + _0x507ddc;
              },
              "AfISz": function (_0x176c80, _0xbb1946) {
                function _0x89e33a(_0x59de4a, _0x13cf6b) {
                  return _0x22a05c(_0x13cf6b - 789, _0x59de4a);
                }
                return _0x35ffd2[_0x89e33a("3ipA", 1390)](_0x176c80, _0xbb1946);
              },
              "AJCKl": _0x35ffd2[_0x22a05c(286, "g1XK")],
              "IsNdZ": function (_0x37c006, _0x1ba5ac) {
                function _0x182d71(_0x52ca60, _0x5cd6c6) {
                  return _0x22a05c(_0x52ca60 - 484, _0x5cd6c6);
                }
                return _0x35ffd2[_0x182d71(2809, "lMAw")](_0x37c006, _0x1ba5ac);
              },
              "KbXDP": _0x22a05c(1546, "PvqJ")
            };
            function _0x22a05c(_0x583532, _0x3fc497) {
              return _0x307608(_0x583532 - -696, _0x3fc497);
            }
            if (_0x35ffd2.FUgZP(_0x35ffd2[_0x22a05c(491, "ZyH)")], _0x22a05c(351, "h0ri"))) {
              if (_0x44809e[_0x22a05c(2125, "2PQv")]) return _0x5a73ad[_0x486d4b.GkKTl(_0x4635e0, 684)];else {
                const _0x5436fe = _0x440296[_0x486d4b[_0x22a05c(1478, "aiqQ")](_0x38b75c, 775)] || _0x486d4b[_0x22a05c(442, "0qEw")];
                _0x2ea978[_0x22a05c(176, "wsz*")](_0x40ec5e[_0x486d4b.lvgJp]("❌ " + this[_0x10245c[_0x486d4b.CGKMN]]() + _0x2a9e90(796), _0x5436fe));
                _0x5436fe[_0x22a05c(684, "PvqJ") + "es"](_0x1bd99e(325)) && (_0x5906e8++, _0x52067b[_0x282e1a(501)](_0x486d4b.cMBjW(_0x188ba7(361) + " " + _0x2cff5d + "/", _0x273350)), _0x265302 >= _0x4adfb7 && (_0x587b91.log(_0x486d4b.AfISz(_0x486d4b[_0x22a05c(2305, "$]wl")], _0xfa850(756))), _0x289040[_0x486d4b[_0x22a05c(1387, "h0ri")](_0xf7f310, 501)](_0x14455a[_0x40020b(549)]), _0x127065[_0x486d4b[_0x22a05c(-455, "aiqQ")]](1)));
                return null;
              }
            } else return _0x1d63a8 + _0x21262f;
          },
          "CfLRv": _0x307608(305, "cV6N") + "mitR" + _0x196850(532)
        };
      let _0x13a9d5 = 0;
      while (_0x13a9d5 < _0x2f44de && !this[_0x196850(426) + "ks"]) {
        _0x13a9d5++;
        const _0x5c1963 = await this[_0x35ffd2.EJpeE(_0x196850, 372) + "k"](_0x20933a, _0x20933a === "search" ? 2 : 1, false);
        if (!_0x5c1963[_0x1497b9[_0x196850(636)]]) continue;
        if (!this["isSing" + _0x307608(1730, "yuIP") + _0x35ffd2.hkTMO(_0x196850, 604)] && _0x35ffd2.msWAc(_0x5c1963.reward, this[_0x1497b9.XdNex])) {
          if (_0x35ffd2.tPORq(_0x307608(1873, "hM!U"), _0x35ffd2.wbhRq)) {
            const _0x4c0a15 = this["getNex" + _0x307608(423, "Kd26") + _0x35ffd2.nIcIq(_0x196850, 513)]();
            if (_0x4c0a15 && _0x35ffd2.tPORq(_0x4c0a15, _0x20933a)) return console[_0x196850(501)](_0x35ffd2[_0x307608(2966, "Caa8")](_0x35ffd2[_0x307608(2441, "t&mx")](_0x1497b9[_0x307608(1102, "hM!U")](_0x35ffd2[_0x307608(720, "Bugr")](_0x1497b9[_0x196850(589)], this[_0x35ffd2[_0x307608(770, "5ZNg")](_0x35ffd2.DpRLu, _0x35ffd2[_0x307608(376, "^R3S")]) + "e"]()), " "), this[_0x35ffd2.fHjeC(_0x35ffd2.XXVvd, "s")][_0x20933a][_0x35ffd2[_0x307608(566, "#uGO")](_0x196850, 702)]), _0x35ffd2[_0x307608(2858, "68zl")](_0x35ffd2.hkTMO(_0x196850, 440), _0x196850(422)))), {
              "switched": true,
              "nextTask": _0x4c0a15
            };
            break;
          } else {
            if (_0x263a58[_0x25564a(344)] !== _0x5cc1e8[_0x15660d(407)]) _0x599cc5[_0x35ffd2[_0x307608(1832, "#uGO")](_0x2e2462, 501)](_0x35ffd2.JrlLP("❌ ", this[_0x35ffd2.OzJJT(_0x35ffd2.SZdVA(_0x3ca6c7, 412), _0x35ffd2.GWJDy) + "e"]()) + _0x35ffd2.JrlLP(_0x35ffd2[_0x307608(334, "#f!g")](_0x2d030d, 517), _0x307608(880, "Caa8")) + _0x5860e5[_0x307608(2605, "Iw8c") + "e"]);else return _0x33d2c7[_0x35ffd2.eaJdR](_0x35ffd2[_0x307608(2203, "Bugr")](_0x35ffd2[_0x307608(2638, "8OI@")](_0x35ffd2[_0x307608(1097, "ZyH)")]("💰 ", this[_0x35ffd2[_0x307608(1205, "5ZNg")](_0x30ddfc(412) + _0x35ffd2.GWJDy, "e")]()) + _0x35ffd2.CMbIY(_0x1f4696, 449), _0xc54e66), _0x28788c(750)) + this[_0x35ffd2[_0x307608(479, "l[QS")]] + _0x5698e4(582)), this[_0x35ffd2.OzJJT(_0x35ffd2.WdMNg, "ed")] = true, this[_0x35ffd2[_0x307608(2946, "lMAw")](_0x35ffd2[_0x307608(2556, "qZz4")], "ks")] = true, true;
          }
        }
        let _0x41989a = 0,
          _0x2c8b9b = _0x5c1963[_0x1497b9[_0x307608(784, "5ZNg")]] && AD_APPEND_ENABLED;
        while (_0x2c8b9b && _0x1497b9[_0x196850(782)](_0x41989a, AD_APPEND_MAX_COUNT) && !this[_0x196850(426) + "ks"]) {
          _0x41989a++;
          await this[_0x35ffd2.SLTPP + "st"](_0x41989a);
          const _0x807ff9 = await this[_0x35ffd2.jMCaG + "k"](_0x20933a, 2, true, _0x41989a);
          if (!_0x807ff9[_0x196850(690)]) break;
          _0x2c8b9b = _0x807ff9[_0x35ffd2.MrhaM(_0x35ffd2[_0x307608(474, "A$(g")](_0x196850, 477), "nd")];
          if (!this.isSingleTaskMode && _0x35ffd2[_0x307608(1004, "z$^9")](_0x807ff9[_0x35ffd2[_0x307608(1683, "lMAw")](_0x196850, 705)], this[_0x35ffd2[_0x307608(1327, "g1XK")](_0x196850, 380) + _0x35ffd2[_0x307608(1225, "xkwi")]])) {
            const _0x18c5d8 = this[_0x196850(733) + _0x35ffd2.lzhpz]();
            if (_0x18c5d8 && _0x35ffd2[_0x307608(1886, "A$(g")](_0x18c5d8, _0x20933a)) return console[_0x1497b9[_0x35ffd2[_0x307608(2530, "PvqJ")](_0x196850, 519)]](_0x1497b9[_0x35ffd2[_0x307608(1542, "xkwi")](_0x196850, 669)](_0x35ffd2.WObtl(_0x35ffd2[_0x307608(2426, "yuIP")](_0x307608(561, "rEA3") + this[_0x35ffd2[_0x307608(2017, "PvqJ")](_0x196850(412), _0x35ffd2[_0x307608(1081, "hM!U")](_0x196850, 388)) + "e"](), " "), this[_0x35ffd2.MrhaM(_0x35ffd2.oXWTN(_0x196850, 730), "s")][_0x20933a][_0x35ffd2[_0x307608(1546, "G![J")]]) + _0x196850(759) + _0x41989a, _0x1497b9[_0x35ffd2[_0x307608(1577, "aiqQ")](_0x196850, 739)])), {
              "switched": true,
              "nextTask": _0x18c5d8
            };
            break;
          }
          if (_0x1497b9.lVokK(_0x41989a, AD_APPEND_MAX_COUNT)) {
            if (!this[_0x35ffd2[_0x307608(1636, "t&mx")] + _0x307608(2594, "yuIP")]) {
              {
                console.log(_0x35ffd2[_0x307608(2702, "#f!g")](_0x35ffd2.SACEn(_0x196850, 370) + this[_0x1497b9[_0x35ffd2[_0x307608(2057, "FbMW")]]]() + " ", this[_0x196850(730) + "s"][_0x20933a][_0x35ffd2[_0x307608(3082, "8OI@")]]) + _0x35ffd2[_0x307608(170, "FbMW")] + AD_APPEND_MAX_COUNT + _0x35ffd2[_0x307608(1325, "yuIP")]);
                const _0x48ec92 = this[_0x35ffd2[_0x307608(2606, "xb56")](_0x35ffd2.oXWTN(_0x196850, 733), _0x35ffd2.AQuqY(_0x196850, 513))]();
                if (_0x48ec92 && _0x48ec92 !== _0x20933a) return {
                  "switched": true,
                  "nextTask": _0x48ec92
                };
              }
            } else console.log(_0x1497b9[_0x35ffd2.MvGGD(_0x196850, 349)](_0x1497b9[_0x35ffd2[_0x307608(512, "X#K!")](_0x196850, 472)](_0x35ffd2.TzuWf(_0x35ffd2[_0x307608(2584, "FbMW")]("🔄 ", this[_0x1497b9[_0x35ffd2[_0x307608(2799, "Kd26")](_0x196850, 757)]]()) + " ", this["taskCo" + _0x307608(1222, "h0ri") + "s"][_0x20933a][_0x35ffd2.xUONp]), _0x35ffd2.QOAUT), AD_APPEND_MAX_COUNT) + "，进行下一轮");
            break;
          }
        }
        if (this[_0x1497b9[_0x35ffd2[_0x307608(2846, "X#K!")](_0x196850, 608)]][_0x20933a]) {
          console[_0x307608(258, "0qEw")](_0x35ffd2.dDKfq(_0x1497b9[_0x35ffd2.DZnbv](_0x35ffd2[_0x307608(1653, "q(oB")](_0x35ffd2.ljIVo(_0x35ffd2.aGUno, this["getAccount" + (_0x307608(2404, "FbMW") + "yNam") + "e"]()), " "), this[_0x35ffd2.MrhaM(_0x35ffd2[_0x307608(1750, "r#&P")], "s")][_0x20933a][_0x196850(702)]), _0x196850(566) + _0x35ffd2.odrsU));
          const _0x35fc2e = this["getNextAva" + _0x196850(513)]();
          if (_0x35fc2e && _0x35ffd2[_0x307608(1125, "Kd26")](_0x35fc2e, _0x20933a)) {
            if (_0x35ffd2[_0x307608(1499, "i]Oi")](_0x307608(735, "lMAw"), _0x35ffd2.zwrbB)) return {
              "switched": true,
              "nextTask": _0x35fc2e
            };else {
              const _0x1fcf4c = _0x1497b9[_0x35ffd2.DZnbv](_0x1497b9.kwkha, _0x13a9d5);
              if (process[_0x1497b9[_0x35ffd2[_0x307608(1732, "^R3S")]]][_0x1fcf4c]) {
                const _0xbd8a31 = process[_0x196850(704)][_0x1fcf4c],
                  _0x4a1359 = _0xbd8a31.split("&")[_0x1497b9[_0x35ffd2.wpMrM]](_0x4c51d7 => _0x4c51d7[_0x196850(854)]())[_0x35ffd2[_0x307608(1293, "xb56")]](_0x2c8b9b);
                j[_0x35ffd2.Sahvc](..._0x4a1359);
              }
            }
          }
          break;
        }
      }
      return {
        "switched": false
      };
    }
    async [K(341) + (_0x1c8f12("xkwi", 952) + _0x1c8f12("rEA3", 2162)) + _0x1c8f12("cV6N", 2436)]() {
      const _0x3cc2e9 = {
          "jitKI": function (_0x41586c, _0x3099b5) {
            return _0x41586c === _0x3099b5;
          },
          "kmRsp": function (_0x229228, _0x258163) {
            return _0x229228 <= _0x258163;
          },
          "HRAoB": function (_0x2d80d0, _0x39a7b0) {
            return _0x2d80d0 + _0x39a7b0;
          },
          "bilHL": function (_0x3a3e18, _0x592050) {
            return _0x3a3e18 + _0x592050;
          },
          "SiBuu": "aNyOu",
          "ttFVv": "GolYT",
          "DaFIT": function (_0x20b0c1, _0x8b9998) {
            return _0x20b0c1 !== _0x8b9998;
          },
          "tPXeY": "IsLzG",
          "QeUKk": function (_0x4d07ba, _0x288c19) {
            return _0x4d07ba + _0x288c19;
          },
          "cgtMj": function (_0xc5ddea, _0x42a17a) {
            return _0xc5ddea(_0x42a17a);
          },
          "fJPMK": function (_0x47f54c, _0x21f374) {
            return _0x47f54c(_0x21f374);
          },
          "hQRXH": _0xeee989(1493, "KgIb"),
          "suGYh": function (_0x55e006, _0x1daa33) {
            return _0x55e006 + _0x1daa33;
          },
          "hYjou": _0xeee989(1108, "g1XK") + "h",
          "WFyqP": "log",
          "WsYqq": function (_0x340e85, _0x280db5) {
            return _0x340e85(_0x280db5);
          },
          "IVCwK": "repeat",
          "EWQVD": "cFqAD",
          "rctMX": _0xeee989(1311, "l[QS") + _0xeee989(2952, "2PQv"),
          "Tdhzp": _0xeee989(1625, "^R3S") + _0xeee989(2583, "aiqQ"),
          "KJwNT": function (_0x202d3b, _0x1280c6) {
            return _0x202d3b + _0x1280c6;
          },
          "VqXAC": function (_0x2db8e7, _0x497d16) {
            return _0x2db8e7 + _0x497d16;
          },
          "jbtYa": "taskLi" + _0xeee989(1267, "r#&P"),
          "HRWbX": "eached",
          "wdQXu": function (_0x2c12fa, _0x154331) {
            return _0x2c12fa(_0x154331);
          },
          "PcGze": _0xeee989(1657, "yuIP"),
          "zxyop": function (_0x25a316, _0x4fa4cd) {
            return _0x25a316(_0x4fa4cd);
          },
          "BtndY": _0xeee989(3247, "hM!U"),
          "GaGJi": "name",
          "murWi": "，切换到下一个任务",
          "bQQpD": _0xeee989(1956, "68zl") + _0xeee989(3279, "aiqQ"),
          "LiemB": function (_0x2d0adf, _0x341d32) {
            return _0x2d0adf + _0x341d32;
          },
          "Zdyyj": _0xeee989(2268, "yuIP") + _0xeee989(1184, "$]wl"),
          "KWydY": _0xeee989(2057, "AeJl"),
          "UJOza": function (_0x121c97, _0x41c9ba) {
            return _0x121c97 + _0x41c9ba;
          },
          "jADZV": function (_0x2e30ab, _0x3acb6f) {
            return _0x2e30ab + _0x3acb6f;
          },
          "jalkW": _0xeee989(2480, "3ipA") + _0xeee989(3369, "ZyH)"),
          "UxVok": _0xeee989(3166, "AeJl") + "gs",
          "NnNVs": function (_0x5d4e13, _0x37fbe0) {
            return _0x5d4e13 === _0x37fbe0;
          },
          "wWfjo": _0xeee989(2577, "2PQv"),
          "eLuTz": function (_0x2b9ce7, _0x1c641b) {
            return _0x2b9ce7 + _0x1c641b;
          },
          "jIhTG": function (_0x78cb79, _0x277f6e) {
            return _0x78cb79 + _0x277f6e;
          },
          "BqjrE": _0xeee989(2600, "G![J"),
          "cRTBc": _0xeee989(1917, "#f!g") + _0xeee989(3228, "AeJl"),
          "cPhkG": _0xeee989(2308, "2PQv") + _0xeee989(1991, "&t&m"),
          "trMsa": _0xeee989(1476, "$r&&") + _0xeee989(1499, "Bugr"),
          "yEHpq": _0xeee989(1406, "q(oB"),
          "wvqJl": _0xeee989(1195, "FweH") + _0xeee989(1269, "ZVXe"),
          "HWmYf": function (_0x20fd67, _0x3a57c3) {
            return _0x20fd67(_0x3a57c3);
          },
          "Xzief": _0xeee989(3297, "G![J"),
          "snCbW": _0xeee989(1829, "t&mx"),
          "KVIyA": function (_0x42c272, _0x4148d5) {
            return _0x42c272 + _0x4148d5;
          },
          "ChNol": function (_0x5215f1, _0x59d3b1) {
            return _0x5215f1(_0x59d3b1);
          },
          "mDVah": function (_0x394420, _0x28ad03) {
            return _0x394420(_0x28ad03);
          },
          "PTJwG": function (_0x2b7cfb, _0x1d4543) {
            return _0x2b7cfb + _0x1d4543;
          },
          "ZNqBX": function (_0x929875, _0x13211f) {
            return _0x929875(_0x13211f);
          },
          "jNgnC": function (_0x14c6db, _0x262811) {
            return _0x14c6db < _0x262811;
          },
          "VirNB": function (_0x253983, _0x3c8814) {
            return _0x253983 + _0x3c8814;
          },
          "wVgMI": "stopAl" + _0xeee989(3396, "A$(g"),
          "kDFwL": function (_0x288b05, _0x3a770b) {
            return _0x288b05 + _0x3a770b;
          },
          "WutdJ": function (_0x1070d9, _0x544b28) {
            return _0x1070d9 + _0x544b28;
          },
          "LdEWj": "jqnim",
          "WgCfF": function (_0xe4cc74, _0x162b08) {
            return _0xe4cc74(_0x162b08);
          },
          "nAMKB": _0xeee989(828, "d420") + "ld",
          "RgKHr": function (_0x568ebc, _0x1f26c1) {
            return _0x568ebc + _0x1f26c1;
          },
          "JaPRF": function (_0x7b43e, _0x3a53c1) {
            return _0x7b43e(_0x3a53c1);
          },
          "SbHwk": _0xeee989(3005, "G![J"),
          "wFgyT": _0xeee989(2349, "^R3S") + _0xeee989(1023, "cV6N"),
          "vuJiJ": _0xeee989(3376, "^R3S") + _0xeee989(3709, "A$(g"),
          "wsqFw": "khYoj",
          "xLeBl": function (_0x233ae5, _0xa18a39) {
            return _0x233ae5(_0xa18a39);
          },
          "MsugF": function (_0x1a163e, _0xe6128b) {
            return _0x1a163e + _0xe6128b;
          },
          "pwxqt": function (_0x17ff57, _0x141de6) {
            return _0x17ff57 + _0x141de6;
          },
          "mFvuj": function (_0x2c4525, _0x2bcb3f) {
            return _0x2c4525(_0x2bcb3f);
          },
          "QrAzH": "success",
          "blAEN": function (_0x2cd286, _0xa32358) {
            return _0x2cd286(_0xa32358);
          },
          "AFctQ": function (_0x579def, _0x5c5527) {
            return _0x579def(_0x5c5527);
          },
          "MUwDe": function (_0x3b1d28, _0x331bee) {
            return _0x3b1d28 + _0x331bee;
          },
          "AEVkJ": function (_0xdeae90, _0x24e3b5) {
            return _0xdeae90 + _0x24e3b5;
          },
          "yuCFm": _0xeee989(2792, "68zl") + "低，自动",
          "oUQKf": "切换到下一个任务",
          "YcRdk": function (_0x3d5b31, _0x5deb9b) {
            return _0x3d5b31 + _0x5deb9b;
          },
          "gqqGG": _0xeee989(867, "^s2q"),
          "HSaet": function (_0x31e531, _0x18f19a) {
            return _0x31e531 !== _0x18f19a;
          },
          "LSZFx": _0xeee989(3150, "FbMW"),
          "jKzas": function (_0x24d482, _0x3b4b93) {
            return _0x24d482 === _0x3b4b93;
          },
          "ZKvqr": _0xeee989(1845, "68zl"),
          "WmtLk": function (_0x3b6762, _0x29951a) {
            return _0x3b6762 >= _0x29951a;
          },
          "xjqOC": function (_0x15b0a9, _0x3f7c60) {
            return _0x15b0a9 + _0x3f7c60;
          },
          "JFkOB": _0xeee989(1359, "q(oB"),
          "yMfGz": function (_0x30cf10, _0x404ee7) {
            return _0x30cf10 + _0x404ee7;
          },
          "kVzqO": _0xeee989(794, "FbMW"),
          "dGhwy": function (_0x229b46, _0x463dcf) {
            return _0x229b46 % _0x463dcf;
          },
          "aDtBP": function (_0x5b1b8d, _0x412ce) {
            return _0x5b1b8d + _0x412ce;
          },
          "GGJva": function (_0x456501, _0x5900d8) {
            return _0x456501 * _0x5900d8;
          }
        },
        _0x54eac0 = K,
        _0x5622c4 = {
          "mXkNt": _0x3cc2e9.VqXAC(_0x54eac0(426), "ks"),
          "UCAup": _0x3cc2e9[_0xeee989(2304, "#uGO")](_0x3cc2e9[_0xeee989(2799, "$]wl")], _0x3cc2e9[_0xeee989(1435, "68zl")]),
          "IgRnq": _0x3cc2e9.cgtMj(_0x54eac0, 643) + _0x3cc2e9[_0xeee989(2202, "yuIP")](_0x54eac0, 808),
          "EPBdl": function (_0x32a186, _0x116c02) {
            function _0x1c3f9b(_0x511bcf, _0x154815) {
              return _0xeee989(_0x154815 - -582, _0x511bcf);
            }
            return _0x3cc2e9[_0x1c3f9b("q(oB", 2298)]("WDbLz", "abGcz") ? _0x590fb7 + _0x445277 : _0x32a186 + _0x116c02;
          },
          "ByUBN": "🎯 ",
          "VCGka": _0x3cc2e9.PcGze,
          "hlUsj": function (_0x3bb45a, _0x1febb8) {
            return _0x3bb45a === _0x1febb8;
          },
          "AUaXw": function (_0xe7762b, _0x2e41e3) {
            return _0xe7762b + _0x2e41e3;
          },
          "PGEBD": _0x3cc2e9[_0xeee989(3696, "#f!g")](_0x54eac0, 477) + "nd",
          "jqnim": _0x3cc2e9[_0xeee989(1780, "PvqJ")](_0x54eac0(543), _0x3cc2e9.BtndY),
          "BTfCt": function (_0x1b7a46, _0x1130c0) {
            function _0x5923af(_0x412f4d, _0x245f84) {
              return _0xeee989(_0x412f4d - 475, _0x245f84);
            }
            return _0x3cc2e9[_0x5923af(2227, "$]wl")](_0x1b7a46, _0x1130c0);
          },
          "tjMRC": function (_0x59a81b, _0x3927ee) {
            function _0x1428e3(_0x3fab26, _0x12319d) {
              return _0xeee989(_0x3fab26 - 471, _0x12319d);
            }
            return _0x3cc2e9[_0x1428e3(2024, "Z@bN")](_0x59a81b, _0x3927ee);
          },
          "DSgLG": function (_0x35f0aa, _0x462117) {
            function _0x1c9349(_0x5c424c, _0x30555) {
              return _0xeee989(_0x30555 - -828, _0x5c424c);
            }
            return _0x3cc2e9[_0x1c9349("ZVXe", 1113)](_0x35f0aa, _0x462117);
          },
          "rvPzt": _0x3cc2e9[_0xeee989(2905, "lMAw")],
          "xFCgB": function (_0x2a82ca, _0x9e2284) {
            const _0x228fa4 = {
              "EUsEb": function (_0x2b5c45, _0x172853) {
                function _0x536515(_0x1efaf8, _0x354bc2) {
                  return _0x39e9(_0x354bc2 - -742, _0x1efaf8);
                }
                return _0x3cc2e9[_0x536515("%Dq0", 1663)](_0x2b5c45, _0x172853);
              }
            };
            function _0x45fb44(_0x2d6536, _0xf867f6) {
              return _0xeee989(_0xf867f6 - -194, _0x2d6536);
            }
            return _0x3cc2e9[_0x45fb44("aiqQ", 3395)](_0x3cc2e9[_0x45fb44("^s2q", 1600)], _0x3cc2e9[_0x45fb44("8OI@", 1837)]) ? _0x228fa4.EUsEb(_0x284966, _0x335349) : _0x2a82ca + _0x9e2284;
          },
          "khYoj": function (_0x1735ae, _0x36f062) {
            function _0x1c3e6d(_0x5f40f2, _0x233aff) {
              return _0xeee989(_0x5f40f2 - -952, _0x233aff);
            }
            return _0x3cc2e9.DaFIT(_0x1c3e6d(1302, "qZz4"), _0x3cc2e9[_0x1c3e6d(-168, "cV6N")]) ? _0x3cc2e9[_0x1c3e6d(379, "%Dq0")](_0x1735ae, _0x36f062) : _0x50ea0f >= _0x4fb9ed;
          },
          "JtcVt": _0x3cc2e9.murWi,
          "Geawc": _0x54eac0(412) + (_0xeee989(1571, "FweH") + _0xeee989(3388, "d420")) + "e",
          "ZwLhw": "indexOf",
          "xkkZR": _0x54eac0(633) + _0x3cc2e9.bQQpD + "d"
        },
        _0x9b324a = {};
      let _0x3e0117 = 0;
      function _0xeee989(_0x517801, _0x234373) {
        return _0x1c8f12(_0x234373, _0x517801 - 558);
      }
      this[_0x3cc2e9[_0xeee989(2879, "#uGO")](_0x3cc2e9[_0xeee989(3035, "Kd26")], _0x3cc2e9.KWydY)][_0x54eac0(620)](_0x308956 => {
        function _0x53a7b1(_0x111d29, _0x24cc5d) {
          return _0xeee989(_0x111d29 - -711, _0x24cc5d);
        }
        const _0x4895fa = _0x54eac0;
        _0x9b324a[_0x308956] = false;
        this[_0x3cc2e9[_0x53a7b1(2781, "z$^9")](_0x53a7b1(1343, "5ZNg") + _0x53a7b1(1201, "KgIb"), _0x3cc2e9[_0x53a7b1(566, "#f!g")](_0x4895fa, 785))][_0x308956] = false;
      });
      while (!this[_0x5622c4[_0x54eac0(483)]]) {
        const _0x4e4afb = this[_0x3cc2e9[_0xeee989(2864, "Caa8")](_0x3cc2e9[_0xeee989(3258, "#uGO")](_0x54eac0, 643), _0x3cc2e9[_0xeee989(1451, "&t&m")])][_0x3e0117];
        if (this[_0x5622c4[_0x3cc2e9[_0xeee989(2153, "PvqJ")](_0x54eac0, 818)]][_0x4e4afb] || this[_0x3cc2e9.jADZV(_0x3cc2e9[_0xeee989(1255, "X#K!")], _0x3cc2e9.UxVok)][_0x4e4afb]) {
          if (_0x3cc2e9[_0xeee989(3377, "0qEw")](_0xeee989(3515, "FweH"), _0x3cc2e9.wWfjo)) {
            _0x3e0117 = _0x3cc2e9[_0xeee989(1878, "qZz4")](_0x3e0117, 1) % this[_0x5622c4.IgRnq][_0x54eac0(726)];
            continue;
          } else {
            const _0x45e6f2 = {
                "oEcao": _0xeee989(1078, "%Dq0")
              },
              _0x26c875 = _0x26efd0,
              _0x54e08c = {
                "JVLuz": _0x3cc2e9.suGYh(_0x26c875(365), "d"),
                "qWVgV": _0x26c875(869),
                "JmCWJ": _0x3cc2e9[_0xeee989(1281, "g1XK")],
                "azCaL": function (_0x2c08bf, _0xa5875) {
                  function _0x4d1bc(_0xf6d652, _0x197fad) {
                    return _0xeee989(_0xf6d652 - 461, _0x197fad);
                  }
                  return _0x3cc2e9[_0x4d1bc(2758, "OjOj")](_0x2c08bf, _0xa5875);
                },
                "cFqAD": _0x3cc2e9.WFyqP
              };
            if (!_0x212922[_0x3cc2e9.fJPMK(_0x26c875, 726)]) return;
            let _0x2bf786 = 0,
              _0x2dbce6 = 0;
            _0x203f0c[_0x3cc2e9[_0xeee989(1837, "hM!U")]](_0x347333 => {
              function _0x3d61fc(_0x3653c7, _0x58ad34) {
                return _0xeee989(_0x58ad34 - -501, _0x3653c7);
              }
              const _0x992a40 = _0x26c875;
              _0x2bf786 += _0x347333[_0x54e08c[_0x3cc2e9[_0x3d61fc("X#K!", 1729)](_0x992a40, 322)]] || 0;
              _0x347333[_0x3cc2e9.hQRXH] && _0x328c69[_0x3cc2e9.cgtMj(_0x992a40, 564)](_0x347333[_0x3cc2e9.fJPMK(_0x992a40, 638)])[_0x54e08c[_0x3d61fc("FweH", 2057)]](_0x3c6d84 => {
                _0x2dbce6 += _0x3c6d84[_0x54e08c[_0x45e6f2.oEcao]];
              });
            });
            _0x1cccdc[_0x26c875(501)](_0x54e08c[_0x3cc2e9.WsYqq(_0x26c875, 716)]("\n", "="[_0x3cc2e9[_0xeee989(813, "aiqQ")]](60)));
            _0x13c096[_0x54e08c[_0x3cc2e9.EWQVD]](_0x3cc2e9.rctMX);
            _0x22b3ff[_0x54e08c.cFqAD](_0x3cc2e9[_0xeee989(882, "Z@bN")](_0x3cc2e9[_0xeee989(3189, "B)gy")] + (_0x2bf786 >= 0 ? "+" : ""), _0x2bf786));
            _0x371a8e[_0xeee989(3052, "aiqQ")](_0x3cc2e9[_0xeee989(1125, "hM!U")](_0x3cc2e9[_0xeee989(1674, "KgIb")](_0x26c875, 363), _0x2dbce6));
            _0x10c42a[_0x3cc2e9[_0xeee989(3519, "l[QS")]]("="[_0x3cc2e9[_0xeee989(3006, "^s2q")]](60));
          }
        }
        console[_0xeee989(2275, "X#K!")](_0x5622c4[_0x54eac0(614)](_0x3cc2e9[_0xeee989(1759, "Z@bN")](_0x3cc2e9[_0xeee989(2209, "ZyH)")](_0x5622c4[_0x3cc2e9.BqjrE], this[_0x3cc2e9[_0xeee989(1434, "$]wl")](_0x3cc2e9[_0xeee989(3350, "X#K!")], _0x3cc2e9.cPhkG) + "e"]()), _0x5622c4.VCGka), this[_0x3cc2e9[_0xeee989(3673, "OjOj")] + "s"][_0x4e4afb][_0xeee989(3618, "B)gy")]));
        let _0x164350;
        if (_0x5622c4[_0x54eac0(491)](_0x4e4afb, _0x3cc2e9.yEHpq)) _0x164350 = await this[_0x3cc2e9[_0xeee989(3248, "$r&&")](_0xeee989(1090, "rEA3") + "sTas", _0x3cc2e9[_0xeee989(1087, "8OI@")]) + "d"](_0x4e4afb, 10);else {
          if (_0x4e4afb === _0x54eac0(698)) !this[_0x3cc2e9[_0xeee989(3128, "rEA3")](_0x54eac0, 377) + _0x3cc2e9[_0xeee989(1546, "3ipA")]] && (console[_0x54eac0(501)](_0x5622c4[_0x3cc2e9[_0xeee989(3544, "X#K!")]](_0x3cc2e9.suGYh(_0xeee989(1751, "lMAw"), this[_0x3cc2e9.KJwNT(_0x3cc2e9.eLuTz(_0x3cc2e9.cRTBc, _0x54eac0(388)), "e")]()), _0x54eac0(728)) + SEARCH_KEYWORD + "]"), this[_0x3cc2e9[_0xeee989(2293, "ZyH)")](_0x3cc2e9.ChNol(_0x54eac0, 377), _0x3cc2e9[_0xeee989(2458, "0qEw")](_0x54eac0, 847))] = true), _0x164350 = await this[_0x3cc2e9[_0xeee989(955, "^R3S")](_0x3cc2e9.HRAoB(_0x54eac0(765), _0xeee989(1161, "FbMW") + "ppen"), "d")](_0x4e4afb, SEARCH_AD_COUNT);else {
            const _0xe536f5 = await this[_0x3cc2e9.QeUKk(_0x54eac0(372), "k")](_0x4e4afb, this[_0x54eac0(730) + "s"][_0x4e4afb][_0x3cc2e9.ZNqBX(_0x54eac0, 507)], false);
            if (_0xe536f5.success && AD_APPEND_ENABLED) {
              let _0x13200d = 0,
                _0x3516c6 = _0xe536f5[_0x5622c4[_0xeee989(2866, "^s2q")]];
              while (_0x3516c6 && _0x3cc2e9.jNgnC(_0x13200d, AD_APPEND_MAX_COUNT) && !this[_0x3cc2e9.VirNB(_0x3cc2e9.wVgMI, "ks")]) {
                _0x13200d++;
                await this[_0x3cc2e9.kDFwL("appendAdRe", "st")](_0x13200d);
                const _0x515aed = await this[_0x54eac0(372) + "k"](_0x4e4afb, 2, true, _0x13200d);
                if (!_0x515aed.success) break;
                _0x3516c6 = _0x515aed[_0x3cc2e9[_0xeee989(2572, "B)gy")]("hasRewardE", "nd")];
                if (!this[_0x5622c4[_0x3cc2e9[_0xeee989(1602, "ZyH)")]]] && _0x5622c4[_0x3cc2e9.WgCfF(_0x54eac0, 579)](_0x515aed[_0x3cc2e9.cgtMj(_0x54eac0, 705)], this[_0x54eac0(380) + _0x3cc2e9.nAMKB])) {
                  console.log(_0x5622c4[_0xeee989(1570, "d420")](_0x5622c4[_0x54eac0(820)](_0x3cc2e9[_0xeee989(3210, "q(oB")](_0xeee989(1943, "g1XK") + this[_0x3cc2e9[_0xeee989(1219, "d420")](_0x3cc2e9[_0xeee989(2452, "hM!U")](_0x54eac0, 412), _0x54eac0(388)) + "e"](), " "), this[_0xeee989(822, "G![J") + _0xeee989(858, "$]wl") + "s"][_0x4e4afb][_0x5622c4[_0x3cc2e9.SbHwk]]) + _0x3cc2e9[_0xeee989(2801, "B)gy")](_0x54eac0, 759) + _0x13200d, _0x3cc2e9[_0xeee989(2997, "$r&&")]("次 奖励金币过低，自", _0x3cc2e9.wFgyT)));
                  break;
                }
                if (_0x13200d >= AD_APPEND_MAX_COUNT) {
                  !this[_0x3cc2e9[_0xeee989(1446, "OjOj")](_0x3cc2e9[_0xeee989(1706, "ZyH)")], _0x3cc2e9[_0xeee989(1450, "t&mx")])] ? console[_0xeee989(3394, "KgIb")](_0x5622c4[_0xeee989(2688, "yuIP")](_0x5622c4[_0x3cc2e9[_0xeee989(1542, "&t&m")]](_0x5622c4[_0x3cc2e9[_0xeee989(3339, "l[QS")](_0x54eac0, 820)](_0x3cc2e9[_0xeee989(3670, "^s2q")](_0x54eac0, 370), this[_0x3cc2e9[_0xeee989(3039, "Caa8")](_0xeee989(3562, "%Dq0") + _0xeee989(3641, "z$^9") + _0x54eac0(388), "e")]()) + " " + this[_0x3cc2e9[_0xeee989(940, "h0ri")] + "s"][_0x4e4afb][_0x3cc2e9.GaGJi] + _0x54eac0(760), AD_APPEND_MAX_COUNT), _0x5622c4[_0x54eac0(685)])) : console[_0x3cc2e9[_0xeee989(2168, "Kd26")]](_0x3cc2e9[_0xeee989(2741, "AeJl")](_0x3cc2e9[_0xeee989(1478, "ZyH)")](_0x3cc2e9.kDFwL(_0x54eac0(370) + this[_0x5622c4[_0xeee989(1626, "h0ri")]]() + " ", this[_0x3cc2e9.PTJwG(_0x3cc2e9[_0xeee989(3049, "AeJl")], "s")][_0x4e4afb][_0x3cc2e9[_0xeee989(3370, "FweH")](_0x54eac0, 702)]), _0xeee989(1302, "hM!U") + _0xeee989(931, "lMAw")) + AD_APPEND_MAX_COUNT, "，进行下一轮"));
                  break;
                }
              }
            }
            _0x9b324a[_0x4e4afb] = _0xe536f5[_0x3cc2e9[_0xeee989(3707, "h0ri")]];
            _0x164350 = {
              "switched": false
            };
            !this[_0xeee989(3501, "i]Oi") + _0xeee989(2045, "q(oB") + _0x3cc2e9[_0xeee989(2861, "hM!U")](_0x54eac0, 604)] && _0xe536f5[_0xeee989(3356, "KgIb") + "s"] && _0xe536f5[_0x3cc2e9[_0xeee989(2312, "FweH")](_0x54eac0, 705)] <= this[_0x3cc2e9[_0xeee989(992, "$r&&")]("lowRew" + _0xeee989(2944, "Z@bN"), _0x3cc2e9.nAMKB)] && (console[_0x3cc2e9.WFyqP](_0x3cc2e9[_0xeee989(2808, "#f!g")](_0x3cc2e9[_0xeee989(3667, "aiqQ")](_0x3cc2e9[_0xeee989(1585, "0qEw")](_0x54eac0(370) + this[_0x3cc2e9[_0xeee989(2620, "8OI@")](_0x3cc2e9[_0xeee989(2860, "d420")] + _0x3cc2e9[_0xeee989(1048, "5ZNg")](_0x54eac0, 388), "e")](), " "), this[_0x3cc2e9.jIhTG(_0xeee989(3543, "5ZNg") + "nfig", "s")][_0x4e4afb][_0x5622c4[_0x54eac0(375)]]), _0x3cc2e9.AEVkJ(_0x3cc2e9.yuCFm, _0x3cc2e9.oUQKf))), _0x164350 = {
              "switched": true
            });
          }
        }
        if (_0x164350[_0x3cc2e9.mDVah(_0x54eac0, 496)]) {
          const _0x371eda = this[_0x3cc2e9.YcRdk(_0x54eac0(733), _0xeee989(1186, "$r&&") + "Task")]();
          if (_0x371eda) {
            const _0x532717 = this[_0x5622c4[_0x3cc2e9.gqqGG]][_0x5622c4[_0x54eac0(359)]](_0x371eda);
            if (_0x3cc2e9[_0xeee989(3487, "PvqJ")](_0x532717, -1)) {
              _0x3e0117 = _0x532717;
              continue;
            }
          }
        }
        if (this[_0x5622c4[_0x3cc2e9[_0xeee989(2155, "3ipA")]]]()) {
          if (_0x3cc2e9[_0xeee989(3090, "Bugr")](_0x3cc2e9[_0xeee989(3312, "B)gy")], "jwbfM")) {
            _0x3cc2e9.WmtLk(this[_0x5622c4[_0x3cc2e9[_0xeee989(2859, "Iw8c")](_0x54eac0, 654)]][_0x54eac0(726)], 4) ? console[_0x3cc2e9[_0xeee989(1535, "d420")]](_0x3cc2e9[_0xeee989(2331, "i]Oi")](_0x54eac0(474) + this[_0x3cc2e9.xjqOC(_0x3cc2e9[_0xeee989(2404, "^R3S")] + ("Displa" + _0xeee989(1345, "8OI@")), "e")](), _0xeee989(809, "^R3S") + "控，停止" + "执行该账号")) : console[_0x54eac0(501)](_0x5622c4.xFCgB(_0x54eac0(474), this[_0x5622c4[_0x3cc2e9.JFkOB]]()) + _0x3cc2e9.yMfGz(" 正在执行的任务金币" + _0x54eac0(423), _0x3cc2e9.ChNol(_0x54eac0, 801)));
            this[_0x5622c4[_0x3cc2e9[_0xeee989(938, "d420")]]] = true;
            break;
          } else return _0x2fbeff + _0x2cd56f;
        }
        _0x3e0117 = _0x3cc2e9.dGhwy(_0x3cc2e9.aDtBP(_0x3e0117, 1), this[_0x5622c4[_0x3cc2e9[_0xeee989(2032, "$r&&")]]][_0xeee989(1888, "&t&m")]);
        if (!this[_0x3cc2e9[_0xeee989(1286, "B)gy")] + "ks"]) {
          const _0x3f109f = _0x3cc2e9[_0xeee989(1613, "G![J")](Math[_0xeee989(2844, "Bugr")](_0x3cc2e9.GGJva(Math[_0xeee989(1659, "$]wl")](), 3000)), 3000);
          await new Promise(_0xba4fe2 => setTimeout(_0xba4fe2, _0x3f109f));
        }
      }
      return _0x9b324a;
    }
  }
  function parseAccountConfig(_0x13aaab) {
    const _0x4c2daa = {
        "pqgfr": _0x2753df("PvqJ", 906),
        "ndBiV": function (_0x2ac420, _0x2ed29e) {
          return _0x2ac420(_0x2ed29e);
        },
        "ZvIXF": function (_0x3a1353, _0x45d910) {
          return _0x3a1353(_0x45d910);
        },
        "JubSj": function (_0x31b551, _0x47c174) {
          return _0x31b551 || _0x47c174;
        },
        "wPjuf": _0x2753df("Bugr", 2070),
        "oPagu": _0x2753df("yuIP", 2085),
        "GkUSp": function (_0x1e6b6c, _0x23992c) {
          return _0x1e6b6c - _0x23992c;
        },
        "qNpRu": _0x2753df("^s2q", 1333) + "://",
        "TGkdp": function (_0x54c7de, _0x3d19c5) {
          return _0x54c7de === _0x3d19c5;
        },
        "ldpnr": function (_0x4d9028, _0x32e3a8) {
          return _0x4d9028 > _0x32e3a8;
        },
        "nGfzm": "kEGNc",
        "gRNDn": "includes",
        "wETKk": function (_0x5be8e2, _0x545e84) {
          return _0x5be8e2 >= _0x545e84;
        },
        "qdrpq": _0x2753df("r#&P", 215),
        "lvCIL": function (_0x4947ee, _0x1acaff) {
          return _0x4947ee + _0x1acaff;
        },
        "eyjde": function (_0x2b6956, _0x517e96) {
          return _0x2b6956 + _0x517e96;
        }
      },
      _0xbef769 = K,
      _0x166bab = {
        "IxOXr": "starts" + _0x2753df("rEA3", 935),
        "GRPpL": _0x4c2daa[_0x2753df("Caa8", 54)],
        "pgGYd": _0x4c2daa[_0x2753df("B)gy", -213)](_0xbef769, 726),
        "kEGNc": "join",
        "bhyNt": function (_0x3c4a8c, _0x25d718) {
          return _0x3c4a8c + _0x25d718;
        },
        "ZIBum": function (_0x93b1fe, _0x48da7f) {
          return _0x93b1fe || _0x48da7f;
        }
      },
      _0x2683b5 = _0x4c2daa.ZvIXF(String, _0x4c2daa[_0x2753df("qZz4", -117)](_0x13aaab, ""))[_0x4c2daa.wPjuf]()[_0x4c2daa[_0x2753df("aiqQ", 937)]]("#");
    if (_0x2683b5.length < 2) return null;
    let _0x3010f9 = "",
      _0x4d4780 = "",
      _0xd61a49 = "",
      _0x34821e = null;
    const _0x3286d0 = _0x2683b5[_0x4c2daa[_0x2753df("d420", 550)](_0x2683b5[_0xbef769(726)], 1)],
      _0x122f6f = _0x3286d0[_0x166bab[_0x2753df("Iw8c", 2679)]](_0x4c2daa[_0x2753df("wsz*", 283)]) || _0x3286d0[_0xbef769(659)]("|");
    _0x122f6f && (_0x34821e = _0x3286d0, _0x2683b5[_0x166bab[_0xbef769(595)]]());
    function _0x2753df(_0x161aa6, _0x341416) {
      return _0x1c8f12(_0x161aa6, _0x341416 - -423);
    }
    if (_0x2683b5[_0x166bab[_0x4c2daa[_0x2753df("d420", 2272)](_0xbef769, 445)]] === 2) _0x4d4780 = _0x2683b5[0], _0xd61a49 = _0x2683b5[1];else {
      if (_0x4c2daa[_0x2753df("g1XK", 146)](_0x2683b5[_0x4c2daa.ndBiV(_0xbef769, 726)], 3)) _0x3010f9 = _0x2683b5[0], _0x4d4780 = _0x2683b5[1], _0xd61a49 = _0x2683b5[2];else _0x4c2daa[_0x2753df("cV6N", 673)](_0x2683b5[_0x2753df("G![J", 1293)], 3) && (_0x3010f9 = _0x2683b5[0], _0x4d4780 = _0x2683b5[1], _0xd61a49 = _0x2683b5[_0x4c2daa[_0x2753df("qZz4", -68)](_0xbef769, 774)](2)[_0x166bab[_0x4c2daa[_0x2753df("G![J", 563)]]]("#"));
    }
    if (_0x34821e && _0x34821e[_0x4c2daa.gRNDn]("|")) {
      const _0x166f60 = _0x34821e[_0xbef769(421)]("|");
      if (_0x4c2daa[_0x2753df("yuIP", 2370)](_0x166f60[_0x4c2daa.qdrpq], 2)) {
        const [_0x14718b, _0x2565a2, _0x57a09f, _0x167ccb] = _0x166f60;
        _0x57a09f && _0x167ccb ? _0x34821e = _0x166bab.bhyNt(_0x4c2daa[_0x2753df("yuIP", 324)](_0x4c2daa.lvCIL(_0x4c2daa[_0x2753df("xb56", 494)](_0x4c2daa[_0x2753df("xkwi", 1005)], _0x57a09f), ":") + _0x167ccb, "@"), _0x14718b) + ":" + _0x2565a2 : _0x34821e = _0x166bab[_0xbef769(500)](_0x166bab[_0xbef769(500)](_0x4c2daa[_0x2753df("q(oB", 1080)](_0x4c2daa.qNpRu, _0x14718b), ":"), _0x2565a2);
      }
    }
    return {
      "remark": _0x166bab[_0x2753df("Z@bN", 2044)](_0x3010f9, ""),
      "salt": _0xd61a49,
      "cookie": _0x4d4780,
      "proxyUrl": _0x34821e
    };
  }
  function loadAccountsFromEnv() {
    const _0x585bd2 = {
        "YmGTb": function (_0x20a7b0, _0x310024) {
          return _0x20a7b0 + _0x310024;
        },
        "FfKcK": "hiMuq",
        "GHtta": function (_0x421d70, _0x1a0c66) {
          return _0x421d70(_0x1a0c66);
        },
        "puyvT": function (_0x979eab, _0x736ef3) {
          return _0x979eab + _0x736ef3;
        },
        "oRUcm": _0x57262e(544, "q(oB"),
        "XFMuT": _0x57262e(2766, "Caa8"),
        "xKoii": _0x57262e(520, "ZVXe") + _0x57262e(1594, "%Dq0"),
        "tQAgP": function (_0x542a95) {
          return _0x542a95();
        },
        "EiRvC": _0x57262e(2407, "$]wl"),
        "jaDaX": function (_0x1090e8, _0x49a200) {
          return _0x1090e8(_0x49a200);
        },
        "YITRC": "forEach"
      },
      _0x44a109 = {
        "JnuMd": function (_0x7ec9ef, _0x4acea7) {
          function _0x324680(_0x36ced0, _0x14d2f8) {
            return _0x57262e(_0x14d2f8 - 635, _0x36ced0);
          }
          return _0x585bd2[_0x324680("lMAw", 1129)](_0x7ec9ef, _0x4acea7);
        },
        "vggEB": _0x585bd2.xKoii
      },
      _0x4fa270 = _0x585bd2.tQAgP(getAccountConfigsFromEnv),
      _0x23a791 = [];
    for (const _0x566ced of _0x4fa270) {
      if (_0x585bd2[_0x57262e(2789, "X#K!")] !== _0x57262e(1276, "wsz*")) return _0x535a8f + _0x4f528c;else {
        const _0x506768 = _0x585bd2[_0x57262e(1860, "t&mx")](parseAccountConfig, _0x566ced);
        _0x506768 ? _0x23a791.push(_0x506768) : console[_0x57262e(2917, "$]wl")](_0x44a109.JnuMd(_0x44a109.vggEB, _0x566ced));
      }
    }
    function _0x57262e(_0xbd158, _0x4c59ef) {
      return _0x1c8f12(_0x4c59ef, _0xbd158 - -37);
    }
    _0x23a791[_0x585bd2.YITRC]((_0x1b2201, _0x1a60af) => {
      function _0x1a0778(_0x80c505, _0x7b1301) {
        return _0x57262e(_0x80c505 - -101, _0x7b1301);
      }
      const _0x46c47c = b,
        _0x2f1e61 = {
          "FLMnf": _0x1a0778(2269, "A$(g"),
          "GMhrH": _0x46c47c(481)
        };
      if (_0x46c47c(442) === _0x585bd2[_0x1a0778(718, "cV6N")]) return _0x23a791[_0x2f1e61[_0x585bd2.GHtta(_0x46c47c, 844)]](_0x585bd2[_0x1a0778(1456, "yuIP")](_0x585bd2[_0x1a0778(1206, "g1XK")]("❌ " + this[_0x46c47c(412) + "DisplayNam" + "e"](), _0x2f1e61[_0x46c47c(826)]), f[_0x46c47c(540)])), null;else _0x1b2201[_0x585bd2[_0x1a0778(2784, "%Dq0")]] = _0x44a109[_0x585bd2.XFMuT](_0x1a60af, 1);
    });
    return _0x23a791;
  }
  async function concurrentExecute(_0x43860c, _0x2f08cc, _0x2ee3d4) {
    const _0x50ed81 = {
        "wVCRi": function (_0x4e6cb3, _0x3c8937) {
          return _0x4e6cb3 >= _0x3c8937;
        },
        "ZOizC": _0xd75b92("FweH", 2587),
        "iwrYr": function (_0x531b44, _0x41e1fb, _0x586198) {
          return _0x531b44(_0x41e1fb, _0x586198);
        },
        "mflFh": function (_0x433a9a, _0x4109ab) {
          return _0x433a9a + _0x4109ab;
        },
        "ttjqo": function (_0x13ee13, _0x39ad1b) {
          return _0x13ee13 + _0x39ad1b;
        },
        "iFEza": _0xd75b92("xkwi", 1676) + _0xd75b92("cV6N", 3158),
        "OYpdC": "ndex=",
        "OBDNa": function (_0x540f29, _0x55f223) {
          return _0x540f29(_0x55f223);
        },
        "FJVct": "message",
        "FrbTd": _0xd75b92("i]Oi", 1314)
      },
      _0x4e366f = K,
      _0x349011 = {
        "ePAQJ": _0x4e366f(501),
        "DHQLv": function (_0x15d93c, _0xe35472) {
          return _0x15d93c + _0xe35472;
        }
      },
      _0x40ac78 = new Array(_0x43860c[_0x50ed81.OBDNa(_0x4e366f, 726)]);
    function _0xd75b92(_0x2b4674, _0x25e839) {
      return _0x1c8f12(_0x2b4674, _0x25e839 - 589);
    }
    let _0x7a0862 = 0;
    async function _0x56a6cd() {
      const _0x1c613a = _0x4e366f;
      function _0x41337(_0x51f434, _0x4e8024) {
        return _0xd75b92(_0x4e8024, _0x51f434 - -681);
      }
      while (true) {
        const _0x2cecd1 = _0x7a0862++;
        if (_0x50ed81.wVCRi(_0x2cecd1, _0x43860c[_0x50ed81.ZOizC])) return;
        const _0x3ce157 = _0x43860c[_0x2cecd1];
        try {
          _0x40ac78[_0x2cecd1] = await _0x50ed81[_0x41337(1319, "&t&m")](_0x2ee3d4, _0x3ce157, _0x2cecd1);
        } catch (_0x442f74) {
          console[_0x349011[_0x41337(413, "Iw8c")]](_0x50ed81[_0x41337(336, "lMAw")](_0x50ed81[_0x41337(212, "q(oB")](_0x50ed81[_0x41337(2072, "FweH")], _0x50ed81.OYpdC) + _0x349011[_0x50ed81[_0x41337(750, "A$(g")](_0x1c613a, 676)](_0x2cecd1, 1), "）：") + _0x442f74[_0x50ed81[_0x41337(386, "2PQv")]]);
          _0x40ac78[_0x2cecd1] = null;
        }
      }
    }
    const _0x1b6da2 = Array.from({
      "length": Math[_0xd75b92("KgIb", 1141)](_0x2f08cc, _0x43860c[_0x4e366f(726)])
    }, _0x56a6cd);
    await Promise[_0x50ed81.FrbTd](_0x1b6da2);
    return _0x40ac78;
  }
  async function processAccount(_0x582493) {
    const _0x17c843 = {
        "bORdT": function (_0x5d4855, _0x544a5b) {
          return _0x5d4855 + _0x544a5b;
        },
        "DNiVh": function (_0x50ab31, _0x3e11b4) {
          return _0x50ab31(_0x3e11b4);
        },
        "GIEhA": function (_0x52a015, _0x174b66) {
          return _0x52a015 === _0x174b66;
        },
        "rOute": "omGjG",
        "QgUmd": _0x2222bc("^R3S", 3883),
        "JKGcu": function (_0x4c48a7, _0x3a0392, _0x4059f7) {
          return _0x4c48a7(_0x3a0392, _0x4059f7);
        },
        "kiGtF": _0x2222bc("2PQv", 3358),
        "iJdRJ": "EvDoI",
        "sfDYB": function (_0x3bdcbd, _0x2c17bc) {
          return _0x3bdcbd(_0x2c17bc);
        },
        "DWNjY": "lanxA",
        "hGUZJ": _0x2222bc("PvqJ", 1773),
        "lmofn": function (_0x13ab53, _0x37b1b6) {
          return _0x13ab53 + _0x37b1b6;
        },
        "FpBvN": function (_0x39d990, _0x330553) {
          return _0x39d990(_0x330553);
        },
        "faqZz": _0x2222bc("8OI@", 3257),
        "gBcKi": function (_0x51a288, _0x5833f3) {
          return _0x51a288(_0x5833f3);
        },
        "KDqlY": _0x2222bc("#f!g", 1918),
        "iKFpJ": function (_0x56535e, _0x4edc66) {
          return _0x56535e + _0x4edc66;
        },
        "byFEL": function (_0x375e39, _0x37cce8) {
          return _0x375e39 + _0x37cce8;
        },
        "oohhB": _0x2222bc("r#&P", 3692) + _0x2222bc("g1XK", 2194),
        "FUiaJ": "Displa" + _0x2222bc("q(oB", 2691),
        "bQbLx": _0x2222bc("Caa8", 1075) + _0x2222bc("X#K!", 2949),
        "QllDp": function (_0x5bfe12, _0x154458) {
          return _0x5bfe12(_0x154458);
        },
        "mpSCh": _0x2222bc("qZz4", 2771) + _0x2222bc("Bugr", 2661),
        "wfgJy": _0x2222bc("Iw8c", 3086),
        "ODMjn": _0x2222bc("t&mx", 2896),
        "GGRlD": function (_0x51e14a, _0x8f4853) {
          return _0x51e14a + _0x8f4853;
        },
        "IcoAF": "ohLak",
        "hteQL": _0x2222bc("xb56", 1272),
        "tzzkJ": "UtqEI",
        "QtTuv": function (_0x700450) {
          return _0x700450();
        },
        "fYEAp": _0x2222bc("G![J", 964),
        "yKJpq": function (_0x193d95, _0x478edf) {
          return _0x193d95 + _0x478edf;
        },
        "bvNcm": function (_0x35add0, _0x7335ee) {
          return _0x35add0 + _0x7335ee;
        },
        "WnUbv": _0x2222bc("cV6N", 3043),
        "qiJRt": _0x2222bc("Kd26", 2486),
        "lksaz": _0x2222bc("xkwi", 2598),
        "cyKTX": "aanNa",
        "BUcWl": function (_0x2c48c6, _0x26f4a4) {
          return _0x2c48c6 + _0x26f4a4;
        },
        "lEJRE": _0x2222bc("FbMW", 1351) + "息中..",
        "DGYrt": "proxyUrl",
        "RyMAV": "index",
        "YHJtO": function (_0x300090, _0x1e1e7a) {
          return _0x300090(_0x1e1e7a);
        },
        "LyleF": "totalCoin",
        "oZOym": function (_0x55a92f, _0x3a73be) {
          return _0x55a92f != _0x3a73be;
        },
        "IhaqM": function (_0x5505dc, _0x1f60c4) {
          return _0x5505dc + _0x1f60c4;
        },
        "ZhtYh": function (_0x32b358, _0x262e57) {
          return _0x32b358 + _0x262e57;
        },
        "fYWDH": "，余额: ",
        "WoeiT": function (_0x590cb, _0x2bc539) {
          return _0x590cb + _0x2bc539;
        },
        "YQRtt": _0x2222bc("&t&m", 1795),
        "dcHun": function (_0x1068ab, _0x32b83a) {
          return _0x1068ab(_0x32b83a);
        },
        "qSAKu": _0x2222bc("Caa8", 2446) + _0x2222bc("#uGO", 3195),
        "upsrb": function (_0x3d01c8, _0x205681) {
          return _0x3d01c8(_0x205681);
        },
        "NfRLZ": function (_0xaac06d, _0x3d32e7) {
          return _0xaac06d(_0x3d32e7);
        },
        "jEhdZ": function (_0x1162a7, _0x572ec2) {
          return _0x1162a7 * _0x572ec2;
        },
        "bcxcm": "lUPxy",
        "NWNit": function (_0xe9254a, _0x427e9f) {
          return _0xe9254a + _0x427e9f;
        },
        "ZzLOF": function (_0x63045, _0x33a0ff) {
          return _0x63045 + _0x33a0ff;
        },
        "xQDXu": _0x2222bc("Kd26", 3476),
        "PawsP": function (_0x2e08bc, _0x4de198) {
          return _0x2e08bc + _0x4de198;
        },
        "DvWVC": function (_0xd4e5b7, _0x3a4a54) {
          return _0xd4e5b7 === _0x3a4a54;
        },
        "SzHQi": _0x2222bc("i]Oi", 3307),
        "xqNuz": function (_0x4eb5c0, _0x83beb8) {
          return _0x4eb5c0(_0x83beb8);
        },
        "WScQG": function (_0x55e78a, _0x937fad) {
          return _0x55e78a + _0x937fad;
        },
        "OOsck": function (_0x29f3a8, _0x3a61b4) {
          return _0x29f3a8 + _0x3a61b4;
        },
        "hvKVF": _0x2222bc("#f!g", 1113),
        "nqUtU": "未授权",
        "zEEAj": function (_0xe55122, _0x50caf3) {
          return _0xe55122 + _0x50caf3;
        },
        "PPLkH": function (_0x2f1bac, _0x4290d2) {
          return _0x2f1bac >= _0x4290d2;
        },
        "XzWiK": "zHEig",
        "wquFR": function (_0x4ae266, _0x56c113) {
          return _0x4ae266 + _0x56c113;
        },
        "ZOTde": function (_0x4dcbe0, _0x4357e6) {
          return _0x4dcbe0 < _0x4357e6;
        },
        "KdciH": function (_0x460d15, _0x187c12) {
          return _0x460d15 === _0x187c12;
        },
        "eChKJ": "nzMHv",
        "myvXk": "floor",
        "yHRjM": _0x2222bc("OjOj", 2508),
        "TiuFU": function (_0x1c05b1, _0x3db9a2) {
          return _0x1c05b1(_0x3db9a2);
        },
        "nwgrX": function (_0x2769ae, _0x54abb7) {
          return _0x2769ae + _0x54abb7;
        },
        "TccUz": function (_0x2674f9) {
          return _0x2674f9();
        },
        "NddHD": function (_0x4e408f, _0x8392f3) {
          return _0x4e408f(_0x8392f3);
        },
        "jIoVV": _0x2222bc("%Dq0", 2630),
        "bnOMY": function (_0x1ffcb2, _0x1f707e, _0xf47569, _0x5d2ede) {
          return _0x1ffcb2(_0x1f707e, _0xf47569, _0x5d2ede);
        },
        "rgbtp": "cookie",
        "anWwQ": function (_0x14a062, _0x5dd80b) {
          return _0x14a062(_0x5dd80b);
        },
        "hVnAP": function (_0x30b10b, _0x13bf86) {
          return _0x30b10b(_0x13bf86);
        },
        "viFeg": function (_0x596e26, _0x3bec66) {
          return _0x596e26(_0x3bec66);
        },
        "mzeuF": "AnknJ",
        "uPCtK": _0x2222bc("wsz*", 2591) + _0x2222bc("Bugr", 3712)
      },
      _0x301174 = K,
      _0x20e495 = {
        "wTTEa": function (_0x306dd0, _0x169a18) {
          return _0x17c843.bORdT(_0x306dd0, _0x169a18);
        },
        "qZpOs": "remark",
        "ohLak": function (_0x4e9238, _0x493f71) {
          return _0x4e9238 + _0x493f71;
        },
        "LGxAX": _0x17c843[_0x2222bc("rEA3", 3458)](_0x17c843.lmofn(_0x17c843[_0x2222bc("lMAw", 1444)], _0x17c843.FUiaJ), "e"),
        "udgSQ": _0x17c843[_0x2222bc("A$(g", 3600)](_0x301174, 796),
        "zHEig": _0x17c843.kiGtF,
        "WBPqy": _0x2222bc("68zl", 2689) + _0x2222bc("aiqQ", 2726) + _0x17c843[_0x2222bc("t&mx", 1539)],
        "tMBGE": function (_0x965992, _0x2048a4, _0x2c3627) {
          function _0x1430a3(_0x1d1f4a, _0x4b4582) {
            return _0x2222bc(_0x4b4582, _0x1d1f4a - -727);
          }
          if (_0x17c843.GIEhA(_0x17c843.rOute, _0x17c843[_0x1430a3(283, "KgIb")])) {
            const _0x546d59 = _0xd81e0b[_0x1430a3(3017, "r#&P")](_0x5519e0[1]);
            if (_0x546d59 && _0x546d59.t) return _0x17c843[_0x1430a3(1941, "yuIP")](_0x3aa984, _0x546d59.t);
          } else return _0x17c843[_0x1430a3(2234, "ZVXe")](_0x965992, _0x2048a4, _0x2c3627);
        },
        "UtqEI": _0x2222bc("Z@bN", 3825) + "rl",
        "jgpUM": "index",
        "aanNa": function (_0x4415e5, _0x444be6) {
          function _0x2b58f3(_0x38ab4a, _0x9cf092) {
            return _0x2222bc(_0x38ab4a, _0x9cf092 - -1100);
          }
          const _0x1ee6d8 = {
            "VOUPB": _0x17c843.kiGtF,
            "HVxuj": _0x17c843[_0x2b58f3("qZz4", 2800)],
            "LFJie": function (_0x1ae484, _0x56caa8) {
              function _0x1db1a3(_0x2336df, _0x130fd9) {
                return _0x2b58f3(_0x2336df, _0x130fd9 - -28);
              }
              return _0x17c843[_0x1db1a3("PvqJ", 932)](_0x1ae484, _0x56caa8);
            },
            "dmFbR": _0x2b58f3("FbMW", 2127) + "yNam",
            "ffSUR": function (_0x583e20, _0x2c51ea) {
              function _0x30c153(_0x4f1898, _0x3074bd) {
                return _0x2b58f3(_0x4f1898, _0x3074bd - 561);
              }
              return _0x17c843[_0x30c153("%Dq0", 2664)](_0x583e20, _0x2c51ea);
            },
            "fykyH": _0x17c843.DWNjY
          };
          return _0x17c843.GIEhA(_0x2b58f3("hM!U", 1541), _0x17c843[_0x2b58f3("rEA3", 810)]) ? (_0x47050d[_0x1ee6d8[_0x2b58f3("xkwi", 1414)]](_0x512524[_0x1ee6d8.HVxuj]("❌ ", this[_0x1ee6d8[_0x2b58f3("%Dq0", 800)](_0x5e34ad, 412) + _0x1ee6d8.dmFbR + "e"]()) + _0x1ee6d8[_0x2b58f3("hM!U", 1885)](_0x470565, 824) + _0x1c9f0c[_0x1c927c[_0x1ee6d8[_0x2b58f3("2PQv", 645)]]]), null) : _0x17c843.bORdT(_0x4415e5, _0x444be6);
        },
        "RCfCB": _0x17c843[_0x2222bc("aiqQ", 2222)](_0x301174, 521),
        "DdAoe": _0x17c843.mpSCh + _0x17c843[_0x2222bc("Z@bN", 3690)](_0x301174, 628),
        "pGlfk": "Afjry",
        "dSpUD": function (_0x5b0ad7, _0x127fcb) {
          return _0x5b0ad7 + _0x127fcb;
        },
        "DOsXx": _0x17c843[_0x2222bc("&t&m", 3663)](_0x2222bc("0qEw", 2370) + _0x2222bc("cV6N", 3620), "ts"),
        "xagVj": function (_0x3e6312, _0x49ea5a) {
          return _0x3e6312 + _0x49ea5a;
        },
        "lUPxy": function (_0x2e3a7b, _0x179014) {
          function _0x1a8f09(_0x393d2f, _0x465856) {
            return _0x2222bc(_0x465856, _0x393d2f - 401);
          }
          return _0x17c843[_0x1a8f09(2180, "8OI@")](_0x2e3a7b, _0x179014);
        },
        "CTFqt": _0x301174(745),
        "biZBW": _0x2222bc("wsz*", 1963),
        "tIRrW": function (_0x620828, _0x433106) {
          function _0x10b517(_0x1b296b, _0x2184a6) {
            return _0x2222bc(_0x1b296b, _0x2184a6 - 411);
          }
          return _0x17c843[_0x10b517("2PQv", 3287)](_0x620828, _0x433106);
        },
        "NCXzS": function (_0x2eb708, _0x7e0bed) {
          function _0x17b4a8(_0x444672, _0x480d4a) {
            return _0x2222bc(_0x444672, _0x480d4a - -1513);
          }
          const _0x819a58 = {
            "xZbik": _0x17b4a8("68zl", 1054),
            "zVrdx": function (_0xadd811, _0x29a401) {
              return _0xadd811 + _0x29a401;
            },
            "lLvhy": function (_0x48712f, _0x278f88) {
              return _0x48712f + _0x278f88;
            },
            "EkUAr": function (_0x56ebb6, _0x214b0e) {
              function _0x2b7824(_0x4e830d, _0x3bbac1) {
                return _0x17b4a8(_0x3bbac1, _0x4e830d - 367);
              }
              return _0x17c843[_0x2b7824(918, "A$(g")](_0x56ebb6, _0x214b0e);
            },
            "phkiU": _0x17b4a8("lMAw", 309) + _0x17b4a8("l[QS", 1706)
          };
          if (_0x17b4a8("5ZNg", 2291) !== "gEldK") return _0x17c843[_0x17b4a8("68zl", 807)](_0x2eb708, _0x7e0bed);else {
            _0x3ad87e[_0x819a58.xZbik](_0x819a58.zVrdx(_0x819a58.zVrdx(_0x819a58.zVrdx(_0x358c78(370) + this[_0x3824ac[_0x17b4a8("ZyH)", 1192)]]() + " " + this[_0x819a58.lLvhy(_0x819a58.EkUAr(_0x5d3a58, 730), "s")][_0x2a32b9][_0x17b4a8("t&mx", 1917)], _0x17b4a8("OjOj", 1793) + _0x17b4a8("wsz*", 521)), _0xd57f6c), _0x819a58[_0x17b4a8("h0ri", -75)]));
            const _0x370125 = this[_0x3b9fed(733) + _0x3e5a46(513)]();
            if (_0x370125 && _0x370125 !== _0x1a08cf) return {
              "switched": true,
              "nextTask": _0x370125
            };
          }
        },
        "DyjQr": _0x301174(749),
        "MdvtW": _0x301174(825) + _0x17c843.wfgJy,
        "AnknJ": _0x17c843.ODMjn
      },
      _0x4cd876 = () => {
        const _0x108059 = _0x301174;
        function _0x5a79ec(_0x5c796d, _0x30a7c7) {
          return _0x2222bc(_0x5c796d, _0x30a7c7 - 232);
        }
        return _0x5a79ec("qZz4", 1544) === _0x17c843[_0x5a79ec("Bugr", 3546)](_0x108059, 547) ? _0x20e495.data : _0x20e495[_0x17c843[_0x5a79ec("0qEw", 3488)]](_0x17c843.gBcKi(_0x108059, 714) + _0x582493[_0x5a79ec("B)gy", 2202)], "]") + (_0x582493[_0x20e495[_0x17c843[_0x5a79ec("xb56", 1657)]]] ? _0x17c843[_0x5a79ec("X#K!", 1831)](_0x17c843.iKFpJ("(", _0x582493[_0x20e495[_0x17c843[_0x5a79ec("d420", 3366)]]]), ")") : "");
      };
    console[_0x2222bc("FweH", 2888)](_0x17c843[_0x2222bc("l[QS", 1204)](_0x20e495[_0x17c843[_0x2222bc("d420", 1813)]](_0x301174(700), _0x4cd876()), _0x2222bc("G![J", 3035) + _0x2222bc("^R3S", 2213) + "."));
    const _0x52e397 = await _0x20e495[_0x17c843[_0x2222bc("wsz*", 3435)]](testProxyConnectivity, _0x582493[_0x20e495[_0x17c843.tzzkJ]], _0x17c843[_0x2222bc("#f!g", 3861)](_0x4cd876));
    console[_0x301174(501)](_0x20e495[_0x301174(484)](_0x17c843.fYEAp, _0x52e397[_0x301174(799)]));
    if (_0x582493[_0x17c843[_0x2222bc("Z@bN", 3609)](_0x301174, 512)] && !_0x52e397.ok) return console[_0x17c843.QllDp(_0x301174, 501)](_0x17c843.yKJpq(_0x17c843.bvNcm("❌ ", _0x4cd876()), _0x17c843[_0x2222bc("FweH", 1136)](_0x17c843[_0x2222bc("Bugr", 3314)](_0x301174, 699), _0x2222bc("#f!g", 2528) + "务"))), {
      "index": _0x582493[_0x301174(542)],
      "remark": _0x582493[_0x17c843[_0x2222bc("yuIP", 1270)]] || _0x17c843.ODMjn,
      "nickname": _0x20e495[_0x301174(484)]("账号", _0x582493[_0x20e495[_0x17c843[_0x2222bc("#f!g", 1538)]]]),
      "initialCoin": 0,
      "finalCoin": 0,
      "coinChange": 0,
      "error": _0x17c843[_0x2222bc("KgIb", 1371)],
      "proxyFailed": true
    };
    console[_0x17c843.kiGtF](_0x20e495[_0x17c843[_0x2222bc("aiqQ", 2666)]](_0x301174(335) + _0x17c843.QtTuv(_0x4cd876), _0x17c843[_0x2222bc("cV6N", 2790)](_0x17c843[_0x2222bc("xb56", 3543)], ".")));
    function _0x2222bc(_0x3b636f, _0x204b17) {
      return _0x1c8f12(_0x3b636f, _0x204b17 - 753);
    }
    let _0xd331c2 = await getAccountBasicInfo(_0x582493[_0x2222bc("g1XK", 1953)], _0x582493[_0x17c843[_0x2222bc("r#&P", 1298)]], _0x582493[_0x17c843[_0x2222bc("0qEw", 1521)]]),
      _0x3b6c4e = _0xd331c2?.[_0x2222bc("h0ri", 2170) + "me"] || "账号" + _0x582493[_0x301174(542)];
    if (_0xd331c2) {
      const _0x449f49 = _0xd331c2[_0x17c843[_0x2222bc("FweH", 1785)](_0x301174, 749)] != null ? _0xd331c2[_0x17c843.LyleF] : "未知",
        _0x30c741 = _0x17c843[_0x2222bc("OjOj", 3815)](_0xd331c2[_0x20e495[_0x2222bc("Z@bN", 1716)]], null) ? _0xd331c2[_0x301174(521)] : "未知";
      console[_0x2222bc("hM!U", 2817)](_0x17c843[_0x2222bc("hM!U", 1657)](_0x20e495[_0x2222bc("lMAw", 2130)](_0x17c843[_0x2222bc("xkwi", 1078)](_0x17c843[_0x2222bc("xkwi", 3567)](_0x17c843.ZhtYh("✅ ", _0x4cd876()), " 登录成功，" + _0x2222bc("AeJl", 1912)), _0x449f49), _0x17c843.fYWDH), _0x30c741));
    } else console[_0x17c843[_0x2222bc("2PQv", 2812)]](_0x17c843[_0x2222bc("ZVXe", 2952)]("❌ " + _0x17c843[_0x2222bc("3ipA", 3595)](_0x4cd876), _0x17c843.bORdT(_0x2222bc("OjOj", 1325) + _0x2222bc("^s2q", 1690), "继续执行")));
    const _0x4b4750 = new KuaishouAdTask({
      ..._0x582493,
      "nickname": _0x3b6c4e,
      "tasksToExecute": tasksToExecute
    });
    await _0x4b4750[_0x20e495[_0x2222bc("g1XK", 3758)]]();
    if (_0x4b4750[_0x17c843[_0x2222bc("q(oB", 2009)](_0x301174(401), "ed")]) return _0x20e495[_0x2222bc("t&mx", 1649)] === _0x17c843[_0x2222bc("%Dq0", 3735)](_0x301174, 761) ? (console[_0x17c843[_0x2222bc("z$^9", 3576)]](_0x20e495[_0x17c843.YQRtt](_0x20e495[_0x17c843[_0x2222bc("5ZNg", 1666)]](_0x17c843.dcHun(_0x301174, 681), _0x17c843.QtTuv(_0x4cd876)), _0x17c843.IhaqM(_0x17c843[_0x2222bc("hM!U", 1279)], "，不执行任务"))), {
      "index": _0x582493[_0x17c843[_0x2222bc("Kd26", 2783)](_0x301174, 542)],
      "remark": _0x582493.remark || _0x301174(545),
      "nickname": _0x3b6c4e,
      "initialCoin": _0xd331c2?.["totalC" + _0x2222bc("Z@bN", 3471)] || 0,
      "finalCoin": _0xd331c2?.[_0x301174(749)] || 0,
      "coinChange": 0,
      "stats": _0x4b4750[_0x20e495[_0x17c843[_0x2222bc("ZyH)", 2658)](_0x301174, 478)]](),
      "coinLimitExceeded": true
    }) : {
      "ok": true,
      "msg": _0x17c843[_0x2222bc("i]Oi", 3301)](_0x17c843[_0x2222bc("#f!g", 3199)](_0x301174, 740), _0x2222bc("xkwi", 2286) + _0x2222bc("rEA3", 3709)) + " " + _0x4cd876,
      "ip": _0x52e397
    };
    for (let _0x318714 = 0; _0x318714 < KS_EXECUTION_TIMES_FINAL; _0x318714++) {
      const _0x157c6e = Math[_0x2222bc("G![J", 3701)](_0x17c843.jEhdZ(Math[_0x2222bc("g1XK", 1700)](), 5000)) + 3000;
      console[_0x2222bc("OjOj", 3085)](_0x20e495[_0x2222bc("ZVXe", 3117)](_0x17c843[_0x2222bc("^s2q", 2016)](_0x20e495[_0x17c843[_0x2222bc("OjOj", 2558)]]("⏱ ", _0x4cd876()) + " 第", _0x318714 + 1) + "轮，等待 " + Math[_0x2222bc("d420", 3144)](_0x157c6e / 1000), "秒"));
      await new Promise(_0x1350d9 => setTimeout(_0x1350d9, _0x157c6e));
      console[_0x301174(501)](_0x17c843.WoeiT(_0x17c843[_0x2222bc("2PQv", 2624)](_0x17c843[_0x2222bc("xkwi", 2912)](_0x2222bc("B)gy", 2294), _0x17c843.QtTuv(_0x4cd876)) + _0x17c843[_0x2222bc("G![J", 1015)](_0x301174, 729), _0x318714 + 1), _0x17c843.gBcKi(_0x301174, 732)));
      await _0x4b4750[_0x2222bc("lMAw", 2214) + _0x2222bc("h0ri", 2649) + _0x301174(534) + _0x17c843[_0x2222bc("%Dq0", 2139)]]();
      if (_0x4b4750[_0x17c843.PawsP("stopAl" + _0x2222bc("l[QS", 1309), "ks")]) {
        if (_0x17c843[_0x2222bc("l[QS", 1095)](_0x20e495[_0x17c843[_0x2222bc("yuIP", 1220)](_0x301174, 578)], _0x20e495[_0x17c843[_0x2222bc("Z@bN", 3337)]])) {
          const _0x32c315 = _0x44ddeb.error || _0x17c843.xqNuz(_0x301174, 613);
          n[_0x17c843[_0x2222bc("%Dq0", 1791)]](_0x17c843[_0x2222bc("AeJl", 2534)](_0x20e495[_0x17c843[_0x2222bc("Z@bN", 2545)](_0x301174, 484)](_0x17c843.OOsck("❌ ", this[_0x20e495.LGxAX]()), _0x20e495[_0x17c843.hvKVF]), _0x32c315));
          _0x32c315[_0x17c843[_0x2222bc("8OI@", 1764)](_0x301174, 659)](_0x17c843[_0x2222bc("xkwi", 3129)]) && (w++, x.log(_0x17c843[_0x2222bc("g1XK", 1080)](_0x17c843[_0x2222bc("%Dq0", 3513)](_0x17c843[_0x2222bc("A$(g", 2334)]("🚨 未授权错" + _0x2222bc("yuIP", 2441), " ") + y, "/"), z)), _0x17c843[_0x2222bc("d420", 1966)](A, B) && (E[_0x20e495[_0x17c843[_0x2222bc("G![J", 3222)]]](_0x17c843[_0x2222bc("#uGO", 3154)](_0x17c843.NfRLZ(_0x301174, 623), _0x2222bc("FweH", 2219) + "运行")), F[_0x20e495[_0x301174(553)]](_0x20e495[_0x2222bc("ZVXe", 1021)]), process[_0x301174(583)](1)));
          return null;
        } else break;
      }
      if (_0x20e495[_0x301174(381)](_0x17c843[_0x2222bc("5ZNg", 2916)](_0x318714, 1) % REST_INTERVAL, 0) && _0x17c843[_0x2222bc("z$^9", 1049)](_0x318714, KS_EXECUTION_TIMES_FINAL - 1)) {
        if (_0x17c843.KdciH(_0x2222bc("#f!g", 2933), _0x17c843[_0x2222bc("$r&&", 1594)])) {
          const _0x2da2e5 = Math[_0x17c843[_0x2222bc("Kd26", 2822)]](Math[_0x17c843[_0x2222bc("A$(g", 3426)]]() * (REST_TIME_MAX - REST_TIME_MIN)) + REST_TIME_MIN;
          console[_0x17c843[_0x2222bc("B)gy", 2310)](_0x301174, 501)](_0x17c843[_0x2222bc("FbMW", 2458)](_0x20e495[_0x2222bc("2PQv", 2271)](_0x20e495[_0x17c843.dcHun(_0x301174, 596)](_0x17c843[_0x2222bc("PvqJ", 2054)]("⏱ ", _0x17c843.TccUz(_0x4cd876)), _0x17c843.NddHD(_0x301174, 586)), _0x17c843[_0x2222bc("wsz*", 1616)](_0x318714, 1)) + _0x301174(391), Math[_0x17c843[_0x2222bc("aiqQ", 2019)]](_0x2da2e5 / 1000)) + "秒");
          await new Promise(_0x2e98f6 => setTimeout(_0x2e98f6, _0x2da2e5));
        } else return _0x17c843.byFEL(_0x3c4025, _0x3ff8ff);
      }
    }
    const _0xe781d1 = await _0x17c843[_0x2222bc("^s2q", 3501)](getAccountBasicInfo, _0x582493[_0x17c843[_0x2222bc("OjOj", 3331)]], _0x582493[_0x2222bc("FbMW", 3488) + "rl"], _0x582493[_0x20e495[_0x2222bc("i]Oi", 2547)]]),
      _0x2398aa = _0xd331c2?.[_0x20e495[_0x17c843[_0x2222bc("%Dq0", 2353)](_0x301174, 353)]] || 0,
      _0x12e8aa = _0xe781d1?.[_0x17c843[_0x2222bc("t&mx", 2808)]] || 0,
      _0x44ddeb = _0x12e8aa - _0x2398aa;
    _0x4b4750[_0x20e495[_0x17c843.hVnAP(_0x301174, 809)]]();
    return {
      "index": _0x582493[_0x20e495[_0x301174(538)]],
      "remark": _0x582493[_0x17c843[_0x2222bc("&t&m", 1234)](_0x301174, 425)] || _0x20e495[_0x17c843[_0x2222bc("X#K!", 3798)]],
      "nickname": _0x3b6c4e,
      "initialCoin": _0x2398aa,
      "finalCoin": _0x12e8aa,
      "coinChange": _0x44ddeb,
      "stats": _0x4b4750[_0x20e495[_0x301174(478)]](),
      "coinLimitExceeded": _0x4b4750[_0x17c843.uPCtK + "ed"]
    };
  }
  function printAccountsSummary(_0x4c1017) {
    const _0x2369be = {
        "YAjgg": function (_0x112796, _0x1d10a6) {
          return _0x112796 + _0x1d10a6;
        },
        "nYmMO": function (_0x3b4059, _0x28ad2a) {
          return _0x3b4059(_0x28ad2a);
        },
        "TMnVf": _0x55328f(3549, "Kd26"),
        "qnsFA": function (_0x58f3b5, _0x48db85) {
          return _0x58f3b5(_0x48db85);
        },
        "xjoCN": function (_0xe0b6ed, _0x2d015d) {
          return _0xe0b6ed(_0x2d015d);
        },
        "vJRel": _0x55328f(1715, "d420") + "h",
        "YfPxX": "log",
        "ErVmY": function (_0x409469, _0x223d65) {
          return _0x409469(_0x223d65);
        },
        "kQDKC": _0x55328f(1972, "h0ri") + _0x55328f(3376, "h0ri"),
        "fbUnY": _0x55328f(2804, "i]Oi"),
        "GfRdy": _0x55328f(2259, "FbMW")
      },
      _0x6f8842 = K,
      _0x5e07b3 = {
        "JVLuz": _0x6f8842(365) + "d",
        "qWVgV": _0x2369be.xjoCN(_0x6f8842, 869),
        "JmCWJ": _0x2369be[_0x55328f(3627, "g1XK")],
        "azCaL": function (_0xfdb3d6, _0x3dc2bd) {
          function _0x5a1fc7(_0x1e4637, _0x403f77) {
            return _0x55328f(_0x1e4637 - -1502, _0x403f77);
          }
          return _0x2369be[_0x5a1fc7(1991, "Iw8c")](_0xfdb3d6, _0x3dc2bd);
        },
        "cFqAD": _0x2369be[_0x55328f(2693, "t&mx")]
      };
    function _0x55328f(_0x492a9a, _0x1e5c98) {
      return _0x1c8f12(_0x1e5c98, _0x492a9a - 863);
    }
    if (!_0x4c1017[_0x2369be[_0x55328f(2065, "xb56")](_0x6f8842, 726)]) return;
    let _0x3bfaa7 = 0,
      _0x1d3707 = 0;
    _0x4c1017[_0x2369be.vJRel](_0x4b2113 => {
      const _0x2b9bc6 = _0x6f8842;
      function _0x27152c(_0x103305, _0x4aeb5f) {
        return _0x55328f(_0x4aeb5f - -1319, _0x103305);
      }
      _0x3bfaa7 += _0x4b2113[_0x5e07b3[_0x2369be.nYmMO(_0x2b9bc6, 322)]] || 0;
      _0x4b2113[_0x2369be[_0x27152c("PvqJ", 2418)]] && Object[_0x2369be[_0x27152c("Caa8", 1520)](_0x2b9bc6, 564)](_0x4b2113[_0x2369be[_0x27152c("Z@bN", 1275)](_0x2b9bc6, 638)])[_0x5e07b3[_0x27152c("G![J", 2518)]](_0x138636 => {
        function _0x81583(_0x2d3485, _0x4e5fef) {
          return _0x27152c(_0x2d3485, _0x4e5fef - 302);
        }
        _0x1d3707 += _0x138636[_0x5e07b3[_0x81583("^R3S", 1380)]];
      });
    });
    console[_0x2369be[_0x55328f(2895, "#uGO")](_0x6f8842, 501)](_0x5e07b3[_0x2369be.ErVmY(_0x6f8842, 716)]("\n", "=".repeat(60)));
    console[_0x5e07b3[_0x55328f(2578, "z$^9")]](_0x2369be[_0x55328f(3429, "d420")]);
    console[_0x5e07b3[_0x2369be[_0x55328f(1565, "h0ri")]]](_0x2369be.YAjgg(_0x55328f(1154, "q(oB") + "化: " + (_0x3bfaa7 >= 0 ? "+" : ""), _0x3bfaa7));
    console.log(_0x2369be[_0x55328f(3048, "wsz*")](_0x6f8842(363), _0x1d3707));
    console.log("="[_0x2369be.GfRdy](60));
  }
  typeof global !== _0x1c8f12("^s2q", 1173) + _0x1c8f12("68zl", 3139) && (global[_0x1c8f12("OjOj", 1376) + "ami"] = {
    "version": _0x1c8f12("g1XK", 733),
    "compatible": true
  });
  function _0x1ec9() {
    const _0x400ee3 = ["W550DNvPdW", "WPb2W4CXfmkE", "wSk+WRhdTLS", "W68pD8kJpa", "WPa6fxnlWPi", "oCoeimkL", "W6m9qK9oca", "h8oIESkyzq", "ow1QW4i8lG", "W5jNFLz0", "jNtdUSoC", "AwxcNH90", "WPpdMWldRYS", "x07cNrjhWPu", "WRb3BCkHW4S", "WRyTW6u", "mCokFmkFEa", "qbvzla", "AmodWQhdMfNdPq", "W4xdSJDV", "gMv6W7eC", "WRtdMcdcPCog", "WRC8fNK", "ouTTWOy", "huToWOG5", "dSkTWQOzpG", "WRhdKqBcQSoy", "p1FcIHVcVri", "pmonwW", "rxfPamkm", "W4lcGYpdOGG", "xsdcJe3dQG", "W4mLb8onW7/cNa", "bSomdmk5WODb", "W6DawW", "c31qWRmq", "kazLW5mxW60", "t8oitmoYW5S", "tSkEWQ7dLfRcNW", "W73dTSoWW67dRCok", "brX/oCoi", "f3DOWPe/", "yhtcShD0W4i", "W6inqSkVWONcNW", "m0zQWOy", "WRanjx9n", "odb4d8oqWO0", "xSoTCSo0W44", "AtXEEK3dQa", "kHxdLJFcMWK", "W4ddJqXnWRO", "W5qMECoaW48", "5P2U55+86zA16k2j", "W47dRZxdNrr1", "W6j7xmk3oa", "lWrlW5KSCG", "WQj+W60F", "bWxcJLRcJG", "gZneW6m8W5O", "W6ddKZ1QWQ4", "f3nJWOO", "jwRdUmoceG", "z/cVOyaD", "htxdR0/dLG", "W6RcNrpdQtW", "W7DcDL5R", "WO5IcSoOW5BcNmkgWQir", "oaldKhlcIq", "6zIS77Yz5ygC5Q+R6iwC5PYY", "bMJdJdH0", "iZjzW4q2", "WRpdQWlcOmoX", "c15tW4WplG", "WP7dTYpcQmoh", "vSkIW6dcNrW", "fHZdG2y", "W67cGtpdTW", "W4i9oYxcJa", "W5rLvGP8ua", "fmoIC8kAza", "DCkaWPFdTeK", "h1raWPOEDa", "lSkrWOldTCkR", "nfNdRIfD", "ww9Mm8kE", "E8orW7RcQCoJ", "gmkoWOddHCkX", "WRDPW7OiimkD", "WQ4hlKLTWPK", "WRldQG3dNt0", "WQPGW5tdMq", "W4bSDmkmnqW", "FuhcUq1F", "WQFdIsVdSt8", "oulcLWxcVr0", "EwTpoSkW", "WP4ijM9DWOK", "WPHGW7uohG", "krH3W63cJGC", "B8k9WPldIKC", "o8ofk8kqWQm", "5yE36lwR6yEJ5BQh", "6k2v6l+S5yIc5lQm", "aH3cIu/cLW", "hrxcUXtcP0W", "oMtdJqvyWPy", "A8kRBmonW64v", "dc7dVKVcJW", "W5/cRGtdGY5T", "rbzY", "W7xMJ6RKUR/KUlNLIj3LV7e", "5y2iWOyNWPi", "WQKMW68htq", "W7jcEmkth1O", "W6vitSkd", "sr5vW5SN", "lqvnW7Cc", "W49fESkYgLG", "dfe3WRRdNWW", "W6i3qCoJW6q", "WOeeWPOtWPK", "WPpdJLJdPGtdQq", "W6JdIb1nWO8", "sqP8FG", "WRHBB8kHW5q", "dhKrWRek", "gmkgjSozWP0m", "W4dcVc/dJty", "W4ybbc/cHW", "lHZcPxFcRW", "qCorW6RcKmodyG", "kKrUWOmysa", "khCeWR8", "W4nyBLrE", "W4q1WOFcVW7cUa", "nCoYuCkkDW", "W6jOpdhdLq", "W7WdaGlcKq", "WQDCW4SIomoB", "W60wySk+mq", "W5jracJdVtS", "WO7dRbdcHmox", "qe7cL3fcW6G", "hCkeWQiQ", "WPhdJIxdGGFcRa", "tdS5", "lKBcKtFcUW", "hNGHWPGk", "W5X9bq/dHdW", "WRRdJaNdVaq", "A2zuf8kD", "WPD0W6K5emko", "W79GeSot", "sGdcJuRdQmoL", "W4JdU8o7W7e", "W65ae8k0WOro", "cK/dS0S6WOW", "gv1xWP0M", "W79JwCkRlaa", "W4OkgGFcGIe", "W4RdP8otW5hdQq", "WQq9fqinw8kNuSoYW4xcKG", "lfVdTY8", "rCkDuSo6WPi", "o0/cRGVcMW", "WR8cfxfxWOW", "WQFdKstdPdW", "W4aQESokW4xdOG", "WPODWRrIWOeO", "W4SjWQVdPbm", "rtr4vgq", "mwDOW6Gl", "sXZdLxpcUmkp", "W4LuxCkVgW", "hJFdUftcHCk3", "ySorW7hcKmoI", "W6K+o1b0WOi", "gCk5WRaSfve", "W77dOSofW5JdMG", "EcFcRNhdSCoS", "BZHNC2e", "W4nGjaFdSq", "DCkfWRNdIuddHG", "W5nLqbtdOG", "s31rjSk8", "xmo+zmoXW5PO", "lNddMmoTmW", "WO7dRJRcHCoL", "u3z2WOn4WPm", "WR5jW7BdLG", "kJjGhCoP", "WRmUEGrr", "AxBdQYHeW5a", "WRNcJ0izW5vN", "z8o8qSoCW5PQ", "8lY2H8kY5Bwm5lMcWO3cJW", "ewTHW5ujWRi", "6i2N5y2v5O+P5P+w", "hCkQWQOjgW", "iCkBWRqkpa", "WPddUdBcK8og", "W4FdK8oMW6tdHa", "j8oVESkt", "pZr6W7WiW5i", "uhjdbmkLkG", "W6uohs4", "W7f3cYtdLG", "psj0cSoh", "lg/cNXWaW4K", "W44ZqCoTW7dcUa", "kSkVWPChlG", "W7XmysRdTmk8", "W7/dU8oRW63dQG", "BmkQwSoyW6WJ", "W48AWPZdQbdcKW", "mmoaDSkB", "DSkSD8oOWQ0/", "CSobz8ogW4i", "WQNdGbldGJG", "W59pC05n", "BSoZqCozW5S", "WPavW5NdUsVcQW", "WRaHdNLn", "WR5NW47dKqq", "BgtdRXfdW64", "ySoLW5ZcJCoW", "AtnwvK8", "ANhcTt5pW7a", "ouXaWQBdPW", "oMbgWPqBsW", "W5rSwH3dKSkx", "smknyCkVWQu", "fsldR1NcVq", "dmk8WR3dQSkz", "W4nihmkPWOi", "ArnFCKS", "WR9WW68", "w8k+WPNdON/dQW", "WR/dTG/dOq", "DxBcMZy", "umolW5BcTSof", "cINdVSoHlcu", "Agm2WP8aBa", "W6ddPCo7W5K", "fCoNiSklWOG", "st9WW5KWBa", "p1HIW4aF", "WOS3WPuLWPD7", "jKlcK3xcNe0", "WOZdJWVcJmobWQS", "oCoCdmkyWOa", "5Q2/5l+V5Awn5yMp77YF6AoI", "aIiDWRdcOqG", "yMH7W5jo", "W6PUfSkpWOm", "W48AWOBdJahcKq", "cIH+mmoY", "DtfxW48u", "a8kcWR/dP8k4", "W6PerCkmoee", "wSo8w8owW7W", "W4bIs1fy", "WO4Qm01DWRi", "j2HAWPBdMW", "cuZdM8oIhW", "W741c8k2W4xcPG", "kNWQvG", "FbjpgSkQ", "W4b7xCkJpW", "5PEm5Qov5P+L", "ACoPzComW44", "gK7cKdtcSH8", "WRG5fuHn", "WPiSW4CGAW", "EIDai8kw", "zmkxWPtdRKNdLG", "bCk8WR7dSSkbmq", "ncJdNv4e", "WPVdPZBcGSoZ", "cJmOk8oHWP8", "W4S0WRJdMJy", "WPldT33cHCoVWOS", "j3BdHCoinJy", "WPi+rH1XW54", "W7RdJsL8", "pXtdJwaA", "W7egWRtdNYm", "DmozW6hcNConyG", "k8kHWPhdQaBdRa", "lard", "ifBdVSkrpbi", "cmkoWQdcJCk6pG", "zmkCu8oDWPS", "dgr3WOZdNq", "i0RdUG", "DCkREmoZ", "W5PoWOJdTsFcLq", "W655wdFdTG", "cK9dW54", "W5GnWP3dTrVcPW", "pM7dUmobfYK", "f35TWOFdIb0", "omoJcSkGWQq", "w8kyWQ/dHgu", "uSoaW7pcOSoi", "bLDrW4GT", "CSkvWOZdGq", "e8kzWQ8Zha", "mNLiWQNdMa", "br9cW63cUa", "lthdVKO3WR0", "W419r0nQ", "pufhWP0nzG", "ib/dSuO6", "mmofwCkxrq", "rfhdHG", "W7a9suXDvG", "W4fAu29E", "buTiWPyd", "wCkMWPFdKh4", "Eqz1W68T", "iv1CWQC", "k8kpWOJdJSkvbW", "W5m6sW", "W71+BM1i", "hHddOfNcVG", "WOaMW7yzEuS", "gwPjWRKS", "W49vhtldIcC", "W7lcUdZdRZy", "WQG/oN1b", "WQldMbPzWOX8", "fg8oWOqLW5e", "W4i8x8okW7q", "kcldIfFcMW", "fKhcUWJcVq", "m33cKNxcMWy", "W6hdKHW", "W58jahtcKGK", "zmowymkkW5Sv", "WR9jW7qLiq", "WP0ZWO4O", "q3jve8oAcG", "WR4NeKj6WRK", "WOnEW54+aq", "zvHwamk5", "dCoBwSkhxq", "r8o4W4pcJCo6oa", "sZLmW4a", "WQKBW4avCNq", "WR/cJuWyWPONWOldH3ldOa", "WOGcWP06", "kKdcV0ZcPXC", "WO4gW4GkvG", "AcjrbCkz", "uUMgRow6TUMyJ+wbGUMGPW", "W5BdP8oQW5NdJG", "pYTkd8oxWPC", "z8owCmoPW61O", "du/dR8ormq", "WPLcW4BdKJ8", "W6S1z8oRW5G", "6i6Q5y2n5O6G5P+8", "WQbiW54CymkN", "xNtcLG1mW5m", "Fuvmi8kl", "id/cJ3BcJq", "papcILNcIG", "ebdcLuVcPHa", "pfZdUc1w", "E3hcVGbAW4q", "W4RcVrpdRHf4", "WPLdW7ddIta", "kSozFSkQFa", "WOuKWPK6WPPW", "W5ehWPddMIdcLq", "W6PkcCkuWPLB", "W6bagCo6WQHv", "rq1enW", "jMJdJq98", "W5mbnWJdHgq", "W6WVFSkfpXu", "fYDbW5m/W40", "A+IpS+w+JG", "oSoisCkeEb0", "WQJdJtBcVSoR", "ucz/", "gCoWpCkxWOS", "fHVdTf8k", "m8k+WPeAhq", "wmkwW6xcTGSL", "ASkvWOVdIq", "W48VWOpdGJC", "y8kMv8oFWOO", "W443zmkFba", "8jcsHmo95Oc66ywm5BQm5yYV", "gmkhW5eSlMO", "ucP8W5OOva", "zr/cPhxdLW", "b8oai8k1", "WORdJdxdSrq", "W6fCzGhdPW", "tfzevG", "mGP9lCoY", "rH98EG", "DGzsW5OOra", "W6GvAmo1W4u", "zrzVDe/dKG", "sdRcT3ddSG", "W615yZe", "g8oCdmkHWOq", "z8kUvmoZWR94", "A3BcUGZdQXi", "yGzebCkQ", "wfxcQIrJ", "d3VdTmoIkG", "FwlcSGT5", "W6bSC8k1dG", "5P6e772Z5B+Y5Awg", "p1pcKa", "vCkpW6xcSbW", "B8khWRlcLuNdMa", "W4DIm8kSWQCk", "WPuqpIW", "WObdW43dOqq", "kLPGWPCg", "5OUN6icl57onoeNNVju", "ch3dJCoSkq", "AxBcNr9E", "W5Sor8kpba", "WP9TW6FdMYq", "W7tdHSoxW7/dPG", "W4qqWPu", "bHZdHgW9WOy", "W7ZcHsFdPdC", "dmkCWQhdL8k0", "W59FhSkOcMu", "W7tcVbBdHaK", "fcDJW6ux", "WRLKW74cjSkb", "yg0YuSkoW5O", "W49axxfZ", "WP1UB8oZW7JcNq", "ex5HWR8q", "o8k8WPhdICk+", "W40DucG", "pJvJW5ar", "W5/dR8ovW53dOq", "ifVdQXL8W5i", "W7VdMWfyWQmy", "CvbPW4Ds", "EmkLWPxdTfu", "BIz9iCkY", "kdFdONqcWPisW5JcVLufW7rM", "h3ldVeRdMSkN", "v2ZcOc9AW4K", "DSkHq8owWP8", "dYZdRKq", "exrxWOmM", "p8onlmkBWRG", "WOJdSYpdMrK", "8jIXKCo46k2x5QoZ5P2lWPu", "uM92dmkp", "aW3dM2tcRq", "a3HPWRddVa", "DeddN8oRmIu", "hhakWOKEWOu", "kgRdRYjG", "CbVcMxNdMSk6", "sKxcLWjB", "lNFcKbxcIq", "WQNdOYdcJq", "y3jdjmkVfG", "WRmjW5auAG", "WOVdGb/cQCoU", "WOr8W5egh8ka", "bGtcQwhcKa", "5yUC5QY05PwW", "ngZdN8oo", "WQGoexnuWOG", "dgvSW6W", "W7ZNLBdMIBlNRABLKjxLV6m", "WOO9WR89WP0", "hCkdWOW/aW", "WOyaWOy4WR0", "eXD/dmol", "D8oaW7/cQ8oH", "WOqgW5yFra", "W4nCqXldLq", "W6vlACkdla", "o8oKgmk8WQ9c", "bdGgWOK", "auZcHJ0", "uqnux2ddUG", "wg5IymkdaG", "ySoaW5BcJa", "W7xdJH9MWQSs", "zc9jp8kskW", "W5NOV5dLIOS", "mxzVs8orWRm", "jf9fWRyn", "iINdVxa5", "WQ8odMW", "yNfxhSkyka", "m1WiWPuW", "WRf0W4CuDq", "ltn0c8op", "W7uexSk0W6JcIW", "nvfSWQRdTa", "eKP5WRpdUa", "fHZdHf8q", "su18EhVdRG", "kez2WOqhDG", "eCkRWPy2", "W58YW4pdVW/cVG", "W7SdbG3cUq", "Awztb8k/", "hGPoW40I", "uM7cJ2q", "cCoGg8kIWP4", "8yofKHy", "WQqmo2H5", "W5WIz8k7oq", "D8oqW4RcL8ow", "ySkXW5FcIY0B", "W7CqumoeW4W", "DqnHW5uo", "iHn2W7eEWO4", "CXBcPeRdMCk5", "W4XbxmkehW", "W64hWPVdGG", "c8kvvCk9", "exnSW48U", "nvjGWRpdR0K", "m2eqWO4RW4W", "zmkwEmo5", "W7DkDWddSW", "WRHdkmoWW4vf", "ChDaW4XC", "WQ8UW709Aa", "rSk/WPRcK13cNG", "W6esBmkyAfm", "z8kaW6pcLYS", "WRLkW7pdIq", "5BQTnWq", "xdDDEvNcJG", "sKHHW4i", "dhnUW6al", "W6hcSs7dScFcNmoRW4S", "jxfpW5aS", "nsRdVumh", "W5jvCSktgq", "W55Cxx9y", "DCoDzSoVW5u", "W7ihq8kjaq", "pqrMW6Ow", "W5jkuGVdQa", "mmkqWOJdQmkbiq", "osK0dSoxWPi", "AmkMFSo5WQWO", "W554lmkU", "sbtcLwBdVa", "ASksDSo1WO8", "ifjSWQVdGq", "pSoqW7G", "WPZdJZlcJSoy", "WQfmACk6W68", "y8kGESoUWQSL", "kwxdUbbc", "5lU25lQu5yUd", "W7baxCkbvey", "W75joCkEWRi", "cv9rW5eh", "aSkBWQjngMu", "W5rLALr9", "W4GKr8onW4BcVW", "WRLyW7epmmkr", "lg1pWRpdQq", "W4iKWPK6WOyW", "d2ldKGPqWPq", "5P2C5PAd54Mm5P+E", "WOeUuq9Q", "dq5pgmor", "wsbjW6Cd", "WPpdMHlcSSod", "W6nKyL9y", "iXtdVhRcMq", "WPb2WQyHlmkE", "W5xdNXreWRS", "nCkJWQldJCk6DG", "B8kfWR7dP14", "pe0nWQy2", "W414tZRdHCk3", "bSoZsmk1zG", "W4vxbW7dLa", "W4D9eIVdPG", "W7/dMa9zWPSC", "khjYWPm", "6lw0776L562c", "5P+B5O+x5P21", "EqT6W5a8", "bmkvWRBdUq", "W7WhD8ooW6S", "lKRdLSortXu", "WQjJW7yfiCk9", "CIPpcmkJ", "j2NcGIK", "DJHYW7iT", "W4aGD8kSkG", "wrLzW4yS", "WPqXqa", "WRWvFdXzW54", "W5CybbdcPa8", "mua5W4evsG", "aIRdPhe", "WQfVWO/cIW", "umoXW6VcNSoQ", "mGBcPwFcHW", "hCoZDmkzqG", "W6f/hHhdJG", "cZLLW44k", "W5PbkmkLWOy", "g1PAWQBdOG", "r8kUW4BcMd0", "W6C5iJpcMW", "W60iwmkU", "W6n2naVdTX4", "DLeXpCoblW", "AeVcKaNdQWC", "W4OXASoqW5a", "hbddI3BcNG", "re1/W4byWPC", "cmoLlCk3WRO", "hmk6WPe3aa", "5Q6jx+InHEw8MG", "jxHhW50K", "W5VcVrJdIXHQ", "FmkQBmoDWO0", "WR1xW4KahG", "W782w8oNW6y", "pfdcSalcIG", "h2JdHdnO", "wmo4W5uegxm", "E8kLW7lcUJqJ", "vKLGW4z8WOK", "jeFdPW", "duNcQI3cQrC", "nHRdKv0/W5K", "wCkKWQddKwi", "gMdcUJBcQG", "WQjWW60yma", "W7LIqW", "4PYsb+AyL+AxToAGNUAEMW", "faP3W7q1", "W6JdRmoGW7VdRCoo", "WQKUW5yPtq", "W5C7xa", "ggreWQRdHW", "D8kFWP3dLx3cHq", "bxbGW5ruWOK", "fHDvW7u", "4P6ciEI2HUwnJ+AHTEw8RW", "CvpdRSkusG", "i8oeamkMWRK", "W4FcLrJdRrS", "8jUkVcFORQhPHkFML5pOVyW", "uSkxW63cSa", "FY5uW4iCsG", "WPH9W6GijW", "zCo4W7pcUq", "WQPKW4pdQX0", "jGNdVxpcVW", "agL4WRddRZu", "W5RdHmo5W5RdVa", "q3bhW5xcMe0", "W7ZOJ5JLJRtLUAFLKzlLV6m", "pEwDOEACHos9NUAdGoIpRa", "FsLKzfO", "k0RdOCoufW", "CSoys8oVW6i", "kaPwW7C", "jeddQqXDW7m", "dYJcNMBcQW", "bGBcG3xcSq", "D8kGB8oDWQSU", "vsdcUwtdPq", "WRBdKYxcNmoA", "WP7dRspcN8ogWO8", "W73dNaLyWOC", "W4qYWPRdTay", "W6xcIc7cNq", "W7rabSksh18", "WRKbfa", "ac95WQ/dNZa", "WPScsYFcHZy", "bq/dMKFcQCkC", "zCkWyCkqW7KE", "W75BeSk3WRfq", "WQurW7Cqta", "WO9PW67dLGS", "WRrjW6ONj8kA", "WQKbfG", "W7lOJQBLJyNOTy3LJQlKViG", "ntTLW5tcOG", "W5fKv0Ptwq", "aSoOWOtdR8k4Dq", "j8k0WPOAngK", "WRLgW7yFpCkO", "a1LOW4RcOIC", "q8kss8osWPe", "ixFdMG", "wZBcQxJdVW", "cYZdUfa", "WQf8W5ebla", "kmodtmk8Aq", "FxhdTSoGqZy", "B2tcVhz3W4q", "gCkAWQfpgKG", "gZnDWQG3WPa", "6kYH6l6/5yQq5lQY", "rsW5W5pcNeRcL8kKWORdP8otqG", "WRn0vmkrW4u", "W5y5qCoNW4y", "brXyhCob", "jsjWha", "ydj1mSkrWQS", "peT2WRldJW", "of17WRxdGG", "cmoju8kyvq", "W4DktSkjgq", "rZXTEa", "hCk5W5vmfI0", "tffUW5rrWOa", "F1v/zSk+bq", "WPpdGaVdPWm", "8lwNI1C", "rH9MC2K", "wXrLaW", "W5SQumkTbW", "dN7dQJldPCo5WRq8WQ/cHa", "W5DeuWtdOa", "WQGwW60hAh0", "mKlcJspcQHy", "W6nAC8kukq", "Cmo7WOFcMSonjq", "WQ0GW6Kw", "WOGyWRySWQa", "lHZcG1dcQq", "j8k0bW", "acjvW5mw", "WOSkd3Pa", "W71/B0jt", "mSk3WPVdHCkE", "8kI2RdS", "55gA6l+T5O6H5AEd", "WPJdOYFcRCop", "W6tdSb5rWRG", "bCkPWRqehhG", "kcrUW4mb", "FxuTtmkCW4ObEcKyW5HasG", "hWjEW64y", "l8k9WPVdGq", "z3q2W6D+W5C", "agaxWPKc", "W4nmbCkQWPu", "WRSNWQqiWRe", "WQNdTrVcGmop", "W605jM8TW5e", "W4/dSa19WPmK", "hqPxaCow", "lCooEmkvyae", "Aq4GvLNdHG", "W65BuIG", "xY1pAeq", "4P+cWQpOTRtLJyNdLW", "W5uKE8kmjaO", "EmkNW7xcSYe", "4P+zlEACJUAoSUADVoMuOq", "kczeW6K", "W6idnXRcJXK", "bqlcLuNcGHe", "W73dPrzDWPG", "Edzgsq", "WPWHWROFWOC", "j2RcHr7cPaK", "kZVdVwZcGa", "gqCcW615W4G", "rbX7ELFdLG", "Emo1xG", "C8oAW5NcSCov", "WPuKrmkO", "fCoKiSk5WPrc", "WPaAzHb1", "hIxdReRcRG", "dMvvWPaU", "e3POW6ee", "WQLiW6JdQZ4", "W65afmkPWRve", "W4a6WR3dVby", "W7CPB8k8ia", "W4izWOtcVqtcGq", "WPFdOZ/cJCox", "BmoTr8ofW4y", "W4jOBCkMoh8", "W6eDmYJdPCkF", "puJcIIRcKHC", "zCoqW6FcTSoz", "ehPdW7eE", "wYVcQuddVSoU", "j2RdNmojlW", "f0yYWOWt", "vCk3W7dcSZe", "W7BdOmorW5pdQa", "m07cLXy", "dHHnW5K/vG", "WR5XW4xdLG", "W4LEecBdVZm", "W6mllXlcRq", "u1LDeSkE", "utnPW5SU", "6kkc5lUK5l+F55Aq", "W45Ic8kDWRrl", "EefoqSo7jW", "fxT6WQ7dHW", "ECkcW77cRmo3EW", "DLFcUZu", "W57cMaddOsS", "W6BdMSo4W5hdUq", "W63cRstdHH4", "iqDi", "xHPLsNy", "mwDtW4yf", "kCo3FmkZwG", "pSoSfSkx", "sSkTW6xcSG", "vmk1WQ/dQ2ddQW", "WPTHW7yk", "WR/cRCkI", "zZnYjCkshW", "W4ZcLrldOaG", "W6vxas41WOu", "khHMW7GP", "cYVdVMFcKG", "je7dHZr8", "fhVdMJPI", "ASoPqColW4OD", "uCokASoLW4e1", "gNbmW40H", "tEI/VEwkUUACVEwNJoI8Rq", "W74uAmoXW7i", "nYbGW6pcPbC", "W6fzpSkoWRW", "mZpdG2ao", "W6nsiGVdMq", "BWbsg8kj", "W6qoWOVdTqJcUG", "kmo7wmopywq", "8kgVIHtLH67PGRRKUyxLI5C", "vSknW6FcSa", "W5ToWOdcVHFcLW", "W4RdObBdIWLW", "z8k6WRBdI17dIW", "EbhdRdq", "effgW6CiWOK", "4PYbd+AEToApIoADKUMwVW", "wwVcSbz0W6S", "aXtcKG", "WPDlv8kVW7u", "hwfPW6y", "WPu0zWDq", "ab5uaSoT", "ihddRSoRlG", "W7OgWR/dJdq", "W4aOWRRdOtG", "fghdTSo/ea", "BddcOZ5CW64", "WQ0TW5uBBG", "W7WkoW3cIG", "f8kAWP3dSCkm", "A1DTeCkV", "arvala", "W5GVWOT7W4DZ", "xmkNt8omWP8", "WRj9gCkkbfW", "W6PiyZddSSkW", "WQBdMsxdSX/cIq", "W7SLASooW4xcNa", "W6nvsG7dQmoR", "uCoWW7ZcNq", "b3veWRhdMq", "CSkuECoqWRa", "eSkcWOeq", "xSoqE8kk", "EX9mC0O", "W6bLqCkclG", "EGBcNhddRq", "WRaBAsHiW6e", "emokuCkZxbG", "v8o1rCoMW4m", "C8kaWO/dJ0e", "W7SCWPNdMbG", "W6fID05nuq", "hSkcWQHjfwG", "bZRcHgZcOW", "awpdNrC", "EYVcVhBdVG", "oa3dOwJcUW", "kHlcNK3cGa", "yvr8W4zrWOq", "ggbpW6S+", "WR1KW4hdIIPi", "W7FdJSoGWO3dJCoA", "W441WRpdQHC", "CmoxW5pcQSoJyG", "chPtW700DW", "oqPgW4pcMG", "W4WBESkGaq", "gCo8j8oDWQbG", "AeHPi8kj", "h8o5jCkzWP4", "tHHYxeC", "W6PatcJdQa", "h1auWQqT", "dWLvdSoFW44", "oh5wWPKbtG", "WQJcTwBcN8orWQ4", "ymobg8kgWObf", "4P+bd+ADL+AnJ+AES+MuPq", "WPxdOIZdSZW", "B3rgW59+", "W7r1f8kuWRrk", "WOeGWQ84WR4", "deagWRSx", "q2dcJIbu", "p3JdRqP3", "WP7cHZxdNWG", "xJr7mSk5ca", "bWtcKKu", "DMLaW6zIWRe", "W4fdbtpdUq", "pSoEbSk3WOu", "ftzAW7i", "hN90WQCf", "nCoigSkt", "W4b4gsBdVq", "qh5NW713", "uCkYWPZdRLi", "g3bUW6W0FW", "W5C4bJFcGa", "EM9VoCkDdq", "WPtdIrxcLSok", "WPeIW7emfmkr", "uchcSMO", "W73dT8oZW4RdUCoE", "W70+W7yB", "WOq5WOScWQfA", "WOS5WO4mWPn8", "WRnHW68DmmkB", "W4DFpqZdQa", "hXJdHhqFWO4", "WPOjkxTt", "shHXiSkW", "BhBcTcrYW50", "kZ/cQLhcVW", "DgtcRWru", "bqJdVxqP", "iSkuWOqFcq", "phioWPeG", "W6JdQuRdLcdcUG", "x8onwmoDW7O", "WOWYWRGOWOz+", "C3VcVYi", "pc9nW54B", "qmkgW6xcRrSL", "WQW1WOSZWRa", "xmkwW6RcQW", "WO3dUGNcR8oq", "WP1vW4tdGbm", "xMtdOZjYW40", "j2ZcUY/cTq", "sHb5vw8", "bx3dIsjj", "WQOtWP0zWOa", "kSoaW6ddJLNdO8k8WOpdHq", "W40rWOq", "EddLR5pPKRG", "W5JdTmorW7NdRG", "imkaWQ0Zi00", "W48uuCkniIO", "WOnJW4tdQbm", "5lMg6l2s5PMQ5PEWp8ki", "W7RcId/dGYS", "tCopySoiW6G", "edVcJeRcOaK", "eKJcM3tcHHq", "ghbJW5Os", "uSkXDCo4WPe", "W55Axv5M", "tGpcR2ldNmo4", "umkkWPNdQxG", "ymkcD8o6WQm", "zwtdLHq", "vZ3cVMO", "W4VdRIdcQ8k1WP8", "u8oHACo2W6q", "gqPXgSol", "WQD9v8kjW5JcGa", "W40Esmo1W5lcPG", "jcVdQ0ZcPG", "W7rGFSkIaa", "WQxcSXFdTWtcKG", "WOiMW5WfqW4", "DCoWW77cL8oU", "jGXapmoV", "ys5cd8kq", "wMmu", "WRrkW4BdGtXT", "W79HitFdIG", "CdnWW6m1", "WPVdPtBcGmob", "WQ96W7vo", "vSkAW67cUX0", "uvX8W51+WOO", "aKfadG", "W73dIGnAWPy", "caFdV3aY", "mxtdHSoXhq", "cSoPWOhdKCkViq", "W6nmsmkpcfC", "xYBcVhpdNSoI", "WRaPW6SglL8", "W6/dKYLhWOe/", "EcrxoCkylG", "pIrsW5WtWO8", "W6tdJSo1W7FdPq", "WRLsahDSWPu", "WOGrvWq", "WPGpW4qrWP9v", "W6awWR/dGJG", "W4KMu8oYW48", "hgVdLZDs", "5y+95Awq6lsZ772N", "5Q+VlCka5AAj6lwS", "juddQ25YW4K", "W6b5lSkUWRe", "W6HlqSka", "cMCL", "WOSxBWTX", "v1aIW4npWOK", "W4RdQSoHW47dOmom", "B8k0WRldTxq", "W7ZdOSo8W5RdO8oa", "W7qBAmoKW4y", "aIRdPa", "6lEuzry", "W74nWPtdLZa", "W60GzSkaiYa", "cgKVWRS", "W6udbH/cPa", "W7rHhmkQ", "vCkNWRFdLfBdUq", "p0zVWOFdGG", "sbT/l8kc", "aW5RW4FcOq", "kquSECox", "eHrXlSoK", "W59CzqRdHW", "sedcVav0", "WQbCW4OUoa", "lXZdTIy", "WOzOW4COnG", "WQJcSZNdVWxcRa", "bSkIWPJdTmkk", "eXdcLetdIHi", "WR1qW5Giiq", "W5Pgwc/dUG", "aLzKWPNdQda", "WQO9WQKAWOi", "qSoxyCoY", "cvT+WQuO", "dIDEW4Gq", "WROqWOu4WQi", "W5jracJdSJ0", "n3NdUanB", "asBdP1BcSW", "xSk7W7FcIGi", "WOHthwW", "WOD2W4NdKra", "W6j+vxXi", "WRG1wqaTW5a", "cJBcGfRcIa", "ys9FA3a", "gCkHWPVdG8kD", "vYb9W54iwW", "EffI", "W44OrSkeese", "lt1YaSoT", "jw9AWO/dUa", "ruRdRMPlWOu", "uLhcMYL0", "WQBdMZFdSXK", "veG6W5niWQ4", "udPwW4yl", "WRbNW7KZiG", "WRXHW70Nlq", "W484E8kUfG", "W5zJDuHv", "iwhdICofdYS", "FSkNW5hcQdCA", "hKpdUXbu", "ctDbW7aLW4y", "fJ8lWRm", "W4BdHtvHWRO", "W4ZcSbZcG8owWQpdGmov", "W547xSkDia", "hSk8WPmpdG", "WPK8WReBWRe", "WOCOW7CdBf0", "i3HbWQq", "javCW4NcSW", "WRHoFSkxW5lcTa", "W5GtFCojW6O", "ocDbW63cSq", "WQjFx8kQW6q", "AvTrd8kP", "W4CExCkVleS", "la1rkmos", "W5y+vNj7ua", "W7NcQtZdRde", "ihaRWPe", "b8kHWO8BaG", "W6aTWRpdOIa", "dufJW68q", "WRmMeKbx", "yeZcRtehW5C", "jaLNW67cUG", "WPOjW44htW", "WR9xW4CHbW", "WOJdTZhcVmop", "W6OFyColW44", "jgdcTb7cQW", "bmkHWRZdOq", "W4ygktlcPW", "W4WDWRddNJu", "ebdcLuVcLIS", "aqNcKLlcHbW", "W7fEvg97", "rmo2hSouWOrO", "W4hdMt58WOG", "hNpdOfNcN8oJ", "WOasW7uPzq", "W4HhbmkLWPW", "6lARWRNcSG", "W5bjhbtdVa", "6zIB772i5ygf5QYz6iA/5P+s", "WRJdOHi", "W7JdRCo3W6ZdHW", "rCoqW5xcGmoh", "nSkYWPBdOq", "prlcTetcJG", "5Q+I6yAm6k2rxs4s", "l2/dSrmdW7u", "sCkQWOddUhG", "B09JW7PT", "WQq1WPmiWRq", "WQjJW7at", "EZn6imkz", "sbDCgmkV", "WRGaWRuAWQm", "WPeDahX/", "W5WGWPhdOq", "8koYT8kx5Oc86yAV5BUO5y6a", "rmoxW5pcR8oJ", "772W5yIs5O2I5yQ55lMn5lIE", "5AAa5AA65lQgbComFq", "u8kXWOddV3ddOq", "vZBcIMRdKmo6", "W5qZx8oJ", "WR3dSdBdLbi", "WQuhWQqDWQq", "FSkTDmoKWOqg", "6i+35y695O6S5P+h", "gSoni8kEWOa", "AaLtcmkt", "W5jeaqldIdm", "W4ZcQGpdQr56", "W442FSoCW7e", "FUImLUwpJEEUGowqNUwKNq", "WQyMW60qwq", "zmoSwSo0", "emoajCkDWQTH", "4P+1yEw5O+wmUUAiT+IGRG", "cczfW7m3W40", "WRKxc2W", "j8oWfmkd", "W6G2kr7cTq", "W6K8yCoKW4W", "yHzBl8kEuW", "FHr6omkqW4K", "WPzjW5azpG", "WRaleNzQ", "tCoZW4FcJSoV", "W40GyCky", "WQ3LVk/LPRBMIQdOORWC", "crdcLG", "wHH7EuZdKW", "W4vGeSowl34", "xHTGEg3dSG", "omkyWQ8Tm0K", "WOz3yCklW4y", "xNpcVHa", "z1LomG", "DCkRBq", "8j+8U8ks5yAW6ygO5lUX5yIb", "WPCQfsXFWQq", "WRr6W70DpW", "pH7dSazJW5a", "W4revMT5", "o1pdNHhcIJG", "lLpcGYbFW4O", "W5WyySolW7C", "sSoeW5tcOSoU", "xH3cNhBdS8of", "kvFcRXhcMYO", "pMhdHSo/ogW", "W793fZBdQW", "wgKPWQC", "W4ddKs1gWQC", "WQ12A8kiW5S", "W54eiYNcHsC", "oeHlWRe", "DSovW4tcV8oYrW", "W4TxcSkwWPS", "W7G1c8k1W4NcNa", "WPbVtmkxW4G", "WQtdLalcOCod", "lvpcGJdcQW0", "p8kBWRCKcG", "WRtdHsldGZy", "WQKXWPOtWRmV", "WOXKW5BdKqy", "mb7cIxlcQG", "WO03W68KBq", "W6L3c8kuWQe", "fshdSLZcJq", "WOVdIXFcP8oU", "WPutybnOW70", "WPddTb3cQSo3", "uJXAWQCqcq", "W4lcQ0RcMG", "W5OaCCknhG", "W6ePjc/cHa", "W7VdIdfcWQG", "aqNdR2JcHSkK", "C2H4W4D3WQa", "lG7dQhtcSG", "W4f1aWhdSG", "xqzbW5a+", "e8klWPxdICkm", "FulcSq5f", "WRm0W7CB", "W4pcIcldSJC", "patcL07cQW", "6yse5BI7iCoI", "jCkNWOKTia", "zNb5W655WPi", "yqyOECoytq", "Eqfmwey", "W5VcUX3dOard", "b0z+WQZdNG", "WRRdK8kGW5pdPCoc", "W4FdJXDNWRi", "C3RcUuZdK8k7", "BbzgW6bXWQa", "ECokW77cS8oeoW", "W7DAqgW", "ctRdSMZcVG", "xG9YdSk9dW", "W5ldOZC", "ssNcKvldMCoQ", "chVdIbvMW5C", "jfLaWQddTa", "tIHha8kr", "l8oQv8khAr0", "hmk6WPejoa", "W4FcOba", "DXHlW54+", "W7XRxq", "ddFdUq", "lfVdUXm", "WRqUFI4", "kcRdU2Gu", "EY1XzxK", "W7n9rCkVaa", "aWHgWRyOW7u", "erPEW4VcRG", "eMrvWRCO", "8kcuMca", "qXrhBLm", "cxXfWRCz", "W4RdKJPTWRiw", "bZxdHh7cPq", "aYBdQeJcH8kX", "W693rItdV8ks", "W63dRmo9W5xdPCoi", "uuNcRqHI", "xCk6W6NcKJC", "W5JdSXb+WRi", "W7rvpmkfWRn4", "a0uoWRy+", "kCkqWRJdRmkz", "e1LbWOu", "W4OjWP3dUJC", "q23cPa", "lgOZWQ4V", "W5WBaHtcLG", "khvCWOyo", "WR0gWRaIWRO", "W6FdTrvXWPGy", "adxcSMtcHSkh", "cHyUWRC", "n8opF8kBAW", "bHZdHgWYWOa", "smoRW7/cRCoT", "W71mjCkrWPW", "iX5wW7BcHq4", "r01Ff8kP", "aJ0QnCoSWOC", "xr3cS3FdPq", "cvJdV8o/fW", "W6jAiSkM", "WQJdOaxdHsG", "WP7dTYhcLmoLWOG", "BqHNW7POWOW", "W45Ic8kFWRrl", "W4nypGZdUW", "fcRdTgaMWQu", "WRzFW4yObG", "FMtcLH5q", "WQypWP0OWRu", "EaHuhSkU", "WRWHW6ytj8kZ", "a0v4WQ3dVte", "osfOh8oeWOO", "EflcMqPd", "W4WDb2K", "cg0TWP8lW5K", "zmovxSoLW64S", "ECkQuSoZWPXM", "nxDbWOZdGG", "iIP9hSoD", "WRtdLGVcJSon", "W59QlSktWQ9X", "h8oKvCkF", "eWS9gmkufq", "vCo8ECo5W4u", "lMlcJHlcKq", "eedcGIRcRa", "W7HaANT4", "keJdTYq", "ucpcSMFdSW", "W6BdQbbJWOa", "cLeHWPCk", "b1tdISoZadG", "W7vcDrddTmkV", "kWHoW4BcLq", "W74VWPG", "Fa5ZaSkp", "sCkHW5ZcQce", "p1xcGIK", "lLddG8oWla", "W4rcl8k3", "WOiJWQmN", "W6uqWOJdPa7cNG", "iIrJW604", "uCkqESoeWR8", "5OMs6ign57gxW7CR57+7", "DtP9W4ZdLsi", "ceCaW60qW5q", "W6TcgYldSW", "mG/dG3a", "WR8KafrE", "b1xdUCoioa", "brRdOflcNG", "WQzGW5pdQIXx", "5yUg5QYP5PsY", "W7DIrmkrWOPD", "mb5xW6W", "CG3cMNJdQW", "dsbtW6hcPq", "ACo6w8ouW70+", "j1JdVczC", "dGFcN2ZcOq", "E27cRJbs", "W5jJCMjo", "WRJcJKmzWRafWRxdUwxdGq", "BCouW5VcVW", "uIX6W6ikxa", "cJZcNbhcKGG", "W547umkMaq", "WPxdPIBdJdW", "iv/dV8owfa", "W65otSk0nW", "ludcQ2tcP0y", "6k+k6l6d5yI/5lQ8", "zK1Yemk4", "xCk8WORdKvy", "WRCWW6JcJtXg", "WQ1wwSkgW5G", "Brn8txe", "bCo2i8k7WQa", "yLPdd8kO", "WRzxW5W9eG", "W5fSufS", "jg/cOaNcLsG", "BCkwWPZdUxe", "54If5PYdW6HY", "l0CLWR0C", "m8kUhSkrWP8", "a8kvWPZdVmk6mq", "W5DosqFdGW", "kSkVWP7dH8kX", "WPqmW68aCG", "W4C/laVcOG", "nmoLg8kMWPq", "WRXWq8kSW40", "bZVdHhlcGG", "W5ZcMJ3dHZXW", "t2ZcJJfx", "WPmCEt13", "W6XzzXFdVmkS", "WQSHcx55", "W4ddKGfcWO4/", "yvn3", "W7LOsL1lua", "4P23xEAENEMfIUE8Kos4IG", "6k6v6k+I5PweWRW", "mWbPW6VcHau", "jX52pSod", "sZNcJu/dS8oO", "Db9TW78c", "mvldMSojc24", "zCouWRFcKZeC", "W613FhXL", "lSk+WQxdLmkH", "4PUX77QMtG", "W6WhrCo3W7BcLa", "W6LJk8k9WObW", "W5FdRSovW6RdRG", "W6fzh8kSWPXx", "C8k6WPhcLmkACq", "w8owW7ddQSomxW", "zmkhW63cKG", "WPrKW4uzWRbu", "W6hdKmouW6BdJq", "kCkvxmk7wGm", "y395W4jC", "neDWWOiAoq", "W40av8oX", "W7LIs1e", "uSkiBCoPWO01", "W4GIFSoCW7O", "W7ZcPGpdGa", "exL6WQldJHG", "k0NdJCobdW", "jCkykSkaWOba", "WOrUvavIW7W", "DSk2W47cIJC", "b8kJWOC", "gdnKWPddGHu", "wmovBmoG", "c8kPWP7dQSkR", "ymkLW6ZcPWi", "jWfFcmoF", "WRDhW6hdTIG", "nCojB8kREG", "W6Xnf8k/WQq", "tciJoSoPlW", "lxFdJ8okdZS", "6yE65BMG5Awa5yUA77+A", "s8kSqSomW4uY", "e31mW6GT", "hGtcSLJcP00", "WOecWP06", "lbVdM3JcKG", "WRqqWPiaWQi", "sf5UW7L8WPm", "WOztW6hdLWS", "WQe3W6iRDW", "8lY2H8kY", "W5u+kH7cLa", "ftBdTuey", "eqXMAbldMa", "WPXBW6NdKWy", "W6VdRCoK", "W6WJAmoHW64", "j0ddMq1y", "5Q+CWQlLUkZLKQZMT4/OPk4", "WP9iW5ldQq8", "W6z8d8kVWPi", "WQb0W68onmkD", "W4/dU8oyW4tdNa", "o0RdKI9MW7q", "hZeKbSkYcq", "W4SgWQddHHC", "8jwtMdxOR6RMO6pMNzSv", "W4Xhd8o3WRny", "WOzNCtXVWOu", "WPKxgc1CWPy", "xxxcOIr8", "Bmo4W4lcI8oq", "WPvzbLbsW5a", "WPtdQHldPr3cUa", "zCo1xSoLW6O", "z8kxxSoTWOu", "W7X6vMnn", "aSoyjSkNWOC", "W5q1Fmk8pGy", "f2HNWOW", "W77dLqPMWQ8", "W5GwimkfmIu", "BCoBW5hcS8oUAW", "W4ldKSorW5RdRSoN", "gIPYW7tcTG", "oConC8kgFW", "pCojESkmuem", "fajqW4m", "aYxdGuil", "W6xdHmouW5ZdHq", "ACoDW5VcTG", "WRjVdXTDW5y", "FCklW77cIaG", "W4GpzCk5jq", "WQ8dc3T9", "mx9zWRldOa", "W6TofmkRWPvy", "aN19WOJdRHq", "W6XdrvC", "W59zd8kSWP0", "Ab5TW4eL", "W7DoCqRdPq", "zMvWo8k9", "esjmW5xcJG", "W7rQyCkEfq", "y3bpjSkCbq", "W6hdTSo8W4O", "WO4IWQ8OWPS", "mCozx8kSxq", "xqtcLuBcJXK", "mLbGWRldMeK", "W4WNrCkSeG", "jeRdSdq", "WPbCwdlcId8", "W596CcBdHq", "EfjKoSkFbW", "bc5XW6BcLa", "FtBcS07dN8k+", "E3FcQq", "WO0qW7yYsG", "n3f9WRm", "WRaLkLvD", "W6WSWQVdUWu", "bxTMWPxdIW", "iwyBWRue", "5O+x5lMqWPKP", "gw1LW6OZAG", "6k6Z6l6n5yI05lU4", "WPruvmkHW4G", "CSkRW5hcQaa", "u3zMW5nk", "6zQt772n5yoy5QYr6isA5PYq", "uGz8W74H", "gs/dH205", "fxxdGmoIcG", "gILwW4hcIG", "WQnHW7Weia", "ESoRuSo0W6q", "h8k4WQyRgG", "qKX+W7f6", "W6WCFmo8W48", "uG9lmmkRlq", "n8k8WPtdVmk6Dq", "crldKHxcIrW", "obFcMJu", "m8k/WQxdL8kk", "hxrmW5KGvq", "umoTrSoXW64", "v3vDW6n5", "WRubaxrTWOu", "W4rDktu", "jx9LWPFdRG", "ucVcIwa", "xmkuWPRdIwC", "W5LyuxrfqG", "rSk3WOJdMNO", "hGe0WQqqmq", "4PMx77IoWOdPH7xNVkFLJ6lMLOC", "4P6HDUAFLUApGEAESEMuHG", "FSo+tCoB", "cCoOxCk3", "W5jracJdSJS", "W6KyWPtdLXFcVW", "mJjuW7u", "WRzpB8kN", "DGapW5i", "lvjYW44a", "W7VdLCo/W4RdUSol", "wtFcT2xdUa", "WO8DF8oiWORcUG", "DCobW6JcTCo3", "AGzoiSkTvW", "W5v9ymkbbW", "W5TQpmkfWQrt", "W74PcWpcKa", "WQfaW7RdUJK", "WQ/dSslcGmoZ", "CxTDW5G", "FYpcLruwWPq", "W7vEtbpdVa", "nHDNW7W1", "WQyiW6a", "aSoSl8kGWQ19", "pbbnpSoe", "caxdJuS9WQC", "WRFdJttdKrW", "W6hcULpcPeddQCoDW6BdGCkwDmoW", "qCkjW4hcJbm", "WP48vb1HW4y", "jHLlW4NcSW", "W4SzbcJcIG", "5PEt5AEK5RgS", "WQ3dKsNcK8oiWPu", "WOq5WReHWRLA", "kCkPWPFdLCktkq", "lSoiECkyAW", "FvnG", "ibxdLdu", "5lMA55gh5Q225BUt772C5yAy", "ocVdU3ie", "W6D+jHhdRG", "kNVdRSoEea", "WQzWwSklW6G", "wqrMdSk6eG", "W7euu8o/W48", "W6XCthjT", "8kI4OtS", "WRC1W7yjDG0", "CGPZBMy", "8k2RHdNOHAhMNONLUA0n", "WO7cTHRdJCojW58", "ixVdVZm", "DvbuaCk7cG", "gCkPWO0ChNy", "dXNdIvlcUG", "xmo+EmkmW50T", "5lQg5lIh5lUq5yMg", "uZVcS3u", "WRXjsmkRW5lcLa", "prxcQxNcJW", "W6ncrLju", "WPiWw0z/W5q", "cSoiBSk4rG", "DwDAW4nT", "WR7dTqBdTX0", "eIhcT2/cRa", "WRu6EHPBW70", "C8oBW63cQ8o0nW", "WQhdTGtdPWJcIq", "rLbZn8kP", "EtfKzuS", "WOnPW6RdVqb2", "l2ddJcrf", "W7VdLb5CW40X", "bJ5dW57cSa", "WQNdLsBcSmod", "g8oRA8kBvG", "WRP0W74pmmkB", "iuRdScDLW44", "W5pcIJZdUtW", "bEw5GUwrHEA3UEINTEs7Ia", "W5xdJXRdHSkXW5C", "x8obWRBdR3hcNq", "W7yqW507nva", "B8kbW5JcLmodoq", "CCkZySo6WOq", "v8kyWRNdKx4", "gdn2W47dMGW", "dJb/eSo9", "W5fDxCkeoq", "WRyZrqHS", "bCkJWPddRCkcpG", "W5rvoZhdIJW", "W7v0yqVdVq", "rSogW5tcSCoy", "5QYP5QYo5lML5yUH", "gHRdNhFcMG", "Ce5QymoE", "W5vUASkkiW", "W71AbmkXWQq", "rK9Ej8kB", "rZbLrwW", "dCkiWQJdOmkd", "WQdNV7Smsq", "W40rWPhdQqpcHG", "W4WbothcSa", "guXlWOhdQq", "ACodrCkhWQzw", "WQqeWPK", "WR0cWROcWRG", "W4GmbsNdIgi", "pxrsWOy", "vd0OWQDTnW", "faL2WRuKW6S", "exn3WO7dHq", "c3v9WOm5", "mNv9WPpdGrO", "W4OXx8kDoa", "lIPV", "W4lcOdldNtmY", "WRiCxbTQ", "hctcQw7cLq", "W48AWOBdMqpcGq", "5y6t6lwx5yYr", "mCokFSkqyeu", "wbnWrw0", "W6u/ghK", "cfzVW6y", "W77dMb1/WQyD", "W5zFBsxdSa", "jCk+WPhdTCkV", "WPxdOYhcLq", "WOVdUaRcKSok", "W5uoWPi8WODh", "W6nBBmkbfW", "cefHW7O", "6zA06k6a7720", "hrdcHgFcNW", "WPyit8kSW77dGq", "W7iWFSkIgG", "5QYsW4/cPowNRUI1Nq", "frRcQvJcHa", "svDQimkj", "WOu+rqjlW4u", "WPhdPZ3cGCo0WO4", "A1Tld8kOlG", "k8k8WPVcK13dHa", "jmk4WOddOSkT", "W68JaaRcOGW", "W7PllmkFWOu", "cSkUWOmzcxS", "cvFdSaXsW60", "hgpdU8oSlW", "gCk5WPKfaK8", "nCoLpSkiWQX5", "4O2Ct+I+K+wlPUs/SoAaRq", "W6FdTbn/WQu", "8kkYRc4", "W65uaaxdQq", "WRS2xWbx", "FsPVW60K", "WOJcRbRdPGKJ", "W75AuXRdHW", "peKLW5VdPXq", "txvyW7T0", "W47cJGLJWQy7", "DCksW7ZcNI0", "x3bdW6v5WOi", "WR93W4ldItTv", "zSkgDSo9WQ8", "dghdQIDH", "WO1uW6pdUW", "W4vzfW", "W5miCSkYha", "teBcMYr5W7a", "W6nvqSkt", "oZNdK1eF", "WPVdIapcQ8ol", "WRzPW7RdJcm", "rJvVomkS", "DI3cNCkEqG", "W4azySkNgaK", "WOTIa8k+WO7cSSk2WPykW7OH", "hvPkW7GG", "dI/dO1JcHCkK", "W709aG3cOW", "BsJcN07dLa", "mCkvWRCEpG", "W6PAuHxdV8oO", "WQG4W4iNsG", "FJ5mW5Ka", "WPGgWPibWP8", "aWXcW4RcMHu", "6k2I6k6o5PsnW70", "W4DykSkGWOi", "u3etWPftW48", "WO8pWQOgWOG", "nHRcJMO8W5O", "W5hLIylLP73PHRJLUjNLTym", "ytrywgFdTW", "ugLfe8kS", "mSoQkmk0WOS", "W6DVx8kXpa", "5lMa5lYn5AwI5yI35lQP5yIF", "W6ldUY1aWQK", "WOGhW6ukCW", "BWHLg8k3bW", "va5oW4Cn", "WOSWDWbuW7W", "8jUETsFOHRZLIylMMPFMLkW", "WRXMW7Gzdq", "FCkMumoOWQq", "ir9x", "W7fmCrddTmkV", "mSk8WOtdRCkbiq", "W7LodSkSWOnO", "cxNdUWL5", "zab6W5WY", "kgv9jW", "oejfW7Wp", "WRpdHrddLdu", "cbtcIeFcKrC", "WPhdRtq", "W59+ECkcpG", "WQldPq/dMWxcVa", "W6bYwCk1W4K", "frHHW7lcMq", "BSo9W5ZcI8o5", "sGJcJwVdMa", "cHLiW4JcSa", "WOjlW5NdGdTW", "bcZdVxBcUmkv", "pIRdR0W5", "WRBdUqRdTJW", "pu/cHIFcTt0", "W5zLuMb+wq", "A23cQqb3", "8yQeVJS", "nLr0WQCK", "W4zJmmkjWR9S", "W4BdQZjsWQm", "v8oBWO7dTudcMG", "b2r3WRddIW", "WRibWR0a", "vCojACoqW60", "uHZcM2ldMq", "W40GzSkahaS", "WRG1rL5rW58", "fKJdOSo2fG", "6kY66l6e5yIR5lUi", "W64kWOtdRIy", "W49CwGpdKG", "CCkfWQRdGW", "hsNdJKRcMG", "WOu9WPqdWQm", "dY1Qc8ojWP8", "WOddKbldOJC", "W4VdSCo1W6RdTG", "kN1tW7Gb", "WOihW6Chuq", "B8o6rSoBW4a2", "wa51amkOuW", "sXZcUhy", "W7FdRqizWPC", "gmkPWOepd3u", "DmkSwCorWPW", "W68oqmk7eG", "WRSZqqPQ", "p8oAgSkDWOvq", "gConAmkFzW", "cJnkfmoSWPS", "iWddN28", "ECkpq8oYWRK", "ohXZW7KQFW", "ECknW5tcPtq", "ivK1WRen", "utD0Ca", "estcNXldNcS", "mX5JW53cIa", "baTvcCoD", "5OIr6kgq6k+R6lEf5y2A5lQa", "WRfFFW", "WQjLW4hdSbm", "WOTmW6FdRdas", "W7vEz2q", "W6tdKbjF", "WOjPEmktW7S", "5lMl55g56lYS6ykx5Ogf5QcY", "W7tdI8oDW47dRG", "CSkTySosWRW", "FmkSCmo5W6Ga", "itNdK0JcPq", "WOxdJqRdGce", "dIbvnSoqW40", "DSkeq8ooWQS", "n03dUfijWO8", "5yUA5yM65O+v5yI35lM15lUP", "s2/cTGjg", "lH/cTLRcQq", "kGXuW5hcRq", "ruvFfCkj", "zmk2WQdcKaBdMG", "WQHvW5tdLaa", "W4bMnmkcWOa", "WRRdIGBdJd0", "W6fkkCkM", "ggDsWOOX", "orpdVgOs", "W4n+DsS", "laXTpSo9", "F8o4umoCW4i", "irddMgyR", "hwRcGq3cHW", "oCo7CmkwxG", "W7FdKCoHW5hdHG", "hJxcRg7cTG", "a0K+rCoWtW", "revMW5Lo", "d2vSW6aY", "iuddUq", "jIfQcmoeWPK", "eX/dLgmBWO8", "kmoNd8kF", "WPddHaVcRmos", "zv10pCk5fW", "bN/cTtlcUG", "WPW2qG", "W78Nc8k1W4/cTG", "W6zRxLrlxG", "uCkNs8oxWPK", "WQCJW7LDjSkC", "x8k+WQZdH0m", "CdXZAgq", "nXDXW6md", "eYFcT3tcOq", "sCkJs8oKWPa", "CfjwgSkD", "W50bWPe8WOrL", "W6bBfmkDWP5M", "W7HkhSkqWRG", "W53cVsldGW4", "suBcK3zMW6a", "W65PctVdKbS", "bwCRWRaJW44", "omohcSkxWPz6", "aL/dHHvK", "oq4eW5iwW4y", "mmoaamkG", "WP5JW4KWW5LM", "BCkvWOddRuFdIW", "5lMA55gh6l+l5O2o5AwH6lwh", "es/dO0uD", "W5KPWRhdHfVcUG", "oYubW4DKWOS", "usWNW7Gsra", "uI93bG", "W6RdLJHFWO0", "5lM7fWS", "eCoQA8krvG", "5yMn5Q235PAm", "ibBdN3FcKXG", "tCoVt8omW74", "rJxMRkhML7K", "W7W7qSopW4u", "WR15W6JdNrO", "W4aRWOVdTdy", "qSkcW7BcTmocAW", "4PYDWONOTyJLJixMO5lLVlO", "W4KogIC", "yIrxhCkscq", "bWpcG0hcKry", "sI5Fj8kY", "Ev10", "W4tdU8oKW7JdHq", "ExtcLXzm", "W5zLrMLftG", "brnxeSor", "W5ShWOJdVXBdGq", "hszaW4CXW50", "W4Gbga", "fuz0", "DSoCWPZcU8oU", "W58agYJcHq", "WPDSA8kGW6K", "WQiAtSoWW54p", "mSk9WQldGmkm", "hHldKa", "W6rcuW", "WRhdSsldUHxcVa", "W5r9sSkRW4VcPG", "W4ONqCoU", "of9xWQu4AG", "rJxMR48", "gtddS0xcNW", "qLH7W7DEWOy", "WOifW5SYugW", "ACkPW5FcTr8", "WROgwr1+W7G", "WQJdOZlcKmol", "jYldMM/cRq", "jmktlSk2v0q", "zSoZW57cTa", "ESkKx8o9WPa", "A1THzSkteG", "WPZdTJBcTq", "W4u7WQtdRaO", "W59FnNdcL3i", "W5PGyaVdIa", "mmkJWOVdTCkD", "WQKgDZP9", "W7JdJqHzWOa", "WR4Jivn2WQK", "oZvAWRy", "W6LerCkR", "abdcKKe", "hqJdMxm", "WPnKW4TEfSko", "WRZdRay", "j2ddP8oYiG", "AcXGp8kIhG", "W4LHfmkrWPG", "WPpdOdlcQSoK", "WRFdQWJdVXRcTq", "xZP8W50T", "rYq5WQldIr/cSSkvWOy", "b8o4n8kL", "DSk2W5pcIGW", "nCk6WOhdJCk3kq", "xqn+o8kU", "WPqUWP4EWRzs", "af0pWOOa", "ECo8rmkf", "W5LoBLi", "WRL3CCkkW4xdGq", "ervWW6GX", "WPRdQGxdJt/cQq", "WQKJi35S", "jCkklCosW796", "W70OzSkBpam", "WOjuC8kKW64", "AsDGlCk1", "8kYcJSk+6k635Qor5P2dgG", "m8oqlmkiWOy", "rqdcVgW", "Bd1xW5a", "ECoFW7hcNSom", "iY1vW4xcPa", "W6v9nXldVte", "gaNdS03cJG", "ouxcTZxcNa", "5PgC57wj5BMB5zoo", "WQWkx3i", "WPFdLaldOIq", "W6bJyY8", "ASoxCConW5u", "k1pcHxW", "W7SLb8owW7JcTG", "W7tdSGXJWO0", "o3fcWRm", "ifxdVmonpba", "W61FwIG", "s8k+WOldLge", "k3RdKXr3", "cs5WW4iX", "W77dPSoGW58", "W5NdHdbdWQa", "WPj5x8kegqO", "dsXPW4NcOG", "W41Vs1vM", "uxL+W4jT", "sGdcNZpcQCoB", "Dmk8W6hdPKFdOG", "jSkAWPZdL8kq", "l8kYWORcLSkDiW", "W4FcGbpdOtG", "hZjRW43dHG4", "dItcK1FcQq8", "luzHWOaquW", "ffdLRARPKim", "pCkzWPCmjLG", "fwCGWReb", "WOaXrs9z", "W4/dSmogW7ZdHa", "ngTOW5pdLeK", "Aa9Ty8kPcW", "WOanW4SduW", "BazlW4m", "W6zGALbg", "W4bFfIhdMG", "WRJdPJRcH8oA", "WQ9ZW4tdVq", "W4RcVrpdPa", "ov1Y", "odnaW7lcSW", "FUw3LEI8NUwlPa", "sSo2W5BcJSoH", "khGYWQSm", "wa5KhW", "tIhcQg/dUq", "g8kRWPyIhgS", "iYbgW4JcPG", "n8oaqSkkFG", "W5qHdYS", "WQ8KW6OuDfq", "WOnwW5NcPeNdLG", "WOKSW4CKsG", "W4RdMtXIWOS", "pWJdUKi3WR8", "WOBNLk/MIApMI6BLK7tNRkO", "F8oOx8oMW54", "W4DkFKLg", "vu3cLJDS", "W5hOV6hLIiBMNANLPl/OVyW", "WPWorGrv", "WQauW68gr1m", "WRGXDt5U", "jCkYWRddQ8kV", "D10wW7xcUdOdWQ3dGW", "W5mDhCklrNy", "cCouB8kAwq", "av90Bq", "W7i0q8k3W4RcPa", "vdLXW6iX", "mSobc8krWOv2", "isnYd8oO", "tvXKW6zr", "WRXZW6vzi8k8", "cwBcTWFcLIe", "ne0rWOO5W7S", "W6C9tL4", "5y2si8km", "W5PxkrpcLNy", "wsZcIgtdUG", "W4mNWPVdLbm", "W4NcVXJdMXy", "kun3WOal", "WQtdJHdcO8ou", "W6fhBqhdNW", "A0DKW4W", "k1WdWQy", "W4WAnZVdGmkq", "eJPLW5qF", "WP46au90", "pvRdRsG", "C1bqdSkD", "WQ11ESkRW7m", "gY7dGMFcNG", "jGJcS2lcQW", "W7bCpWddTgq", "nmockmob", "WO9tW67dOs4", "W6jdo8k9WOi", "e3HFW64", "EYj5W5uS", "e8kaWPOuiG", "W4P4n8kdWOK", "k8oMCmkBr0u", "tfj8WOfYW44", "fqzIW7y1", "W5u8uCoJW73cTG", "xmk8D8o5WO4", "W6fagG", "W6j7tNvkCW", "nCo7DmkUqW", "ic1Ed8oJ", "cblcGMZcRt0", "sH1HW74j", "aCknWQqNoG", "nWZdV1i/W5G", "asZdRq", "WQvQW63dGI4", "WOxdUsBdRX0", "W4SKEmkkiGK", "W40UWQldQaO", "muPYWQOc", "WQXmECku", "g3THW70ZBa", "rmopBmofW5W", "W6jbhYxdLG", "WP54W6FdLbe", "iv8UWPqdW6e", "oSo+b8kgWOz0", "aZjjW6lcGLm", "W4iBjGpcUq", "8lslR07OHzZMN43LU5fS", "gYvTeW", "W5aenYBdMgy", "kGxdV2ZcUq", "zHjuBxS", "x8kmW6m", "WQXrW5xdNWf2", "j3BdG8oneZO", "xx9ZjSkJ", "DqpcMf4", "W6f/tvq", "W79HAmosaeq", "aN19WOJdVG8", "kmoXwmkurW", "dGLvW4FcSW", "fKjUWPCI", "6k6X6lYF5yIR5lU0", "jvWuWOqU", "agVdN3nFW6i", "WR8adxnXWOq", "jM52WPhdNW", "WQq1nKLn", "nCkwWQldP8kniq", "u8kLWPNdO2hdGq", "C25JgSke", "ag0NWROv", "WQxdSbhdVt0", "W4xcQaldQH8", "W69dt8kcfxW", "W5XIC8oN", "dgZdJXvqW4K", "kdxcGglcKW", "W7VWQko8sq", "mrXEW5xcOY4", "W69cxmoFkLW", "WPT/W7KeASkA", "Dfn4W4jL", "mKJcHa", "5BU7E8kK", "WQxdJ8kKW4tdV8ox", "zsbvW5SG", "e3j4", "WQqVW48hWRTM", "ugr4W4jxWO8", "da1Ce8oK", "qGDV", "WPFdGYNcG8oeWO0", "W6XtfaFdMW", "WRb3W4ytaW", "W7r9vfzwwW", "omkwWR7cKmkoDq", "W7vPpSkGWRi", "WQr0W5meiSk7", "WRXkW7JdLGTT", "WPygc3fx", "WRSkfLL7WOi", "WQ8UW6m", "W61qmmk3W7BcKa", "WOfmvSkbW6G", "WRaVW5ycAa", "W6PywIe", "W7vuhI3dVa", "W6nxfSk2WRW", "f3ZdVdHI", "5PEW5AEc5RoZ", "WQxdSWxdTaxcVa", "D2DbW5L+", "uKZcLGi", "W7GWWPtcJ3auW4eqWQVdSCk1sSoM", "eu9UWRSoBa", "dNVdMYDz", "bx4hWOCc", "W78sESkcbW", "W695u8kpaa", "sSobW7ZcVmoA", "e2vVWRG9wW", "r8kNW7xcQYG", "W4yMAu9TBq", "WQjUWRfD", "W6nLrSkvna", "W6m7wCkKfG", "fWxdIu7dIHe", "5OMk6igN57o/WQm4576N", "W5lcNWxdGq", "W5fbbGxdRa", "WQOhW4ejyq", "WRVcJu4fW5n9", "WOqLWQ4VWPq", "wZNdH0ZdNmoN", "qtzNomkv", "ugHccq", "W7WMhbFcPW", "qXXS", "FrLehCkr", "W4yzWPVdQG", "W6a6WRJdOau", "kI5klSog", "WOXMWPNcIZXT", "AwjWW4iTDq", "gxTJW6y", "nJ7dSvqw", "ggzdWQVdMW", "W6FdOSolW4RdOq", "hhhdImoulW", "WPHjBSkLW7O", "pG9Va8ouWOG", "p0KOWRKb", "WO02lKHZ", "sxLvWR5ZzW", "ltFdRWr6W5bVW7ZcOa", "bWDmf8oD", "fvZdPSo0oq", "W7TeztldTG", "wSoox8klW7O4", "fHtdVLqB", "uIH1W7i", "omohdCkEWPTr", "6i2k5y2u5O+B5P6L", "muBdK1NcTdC", "vSoTq8o8W5O", "WPLUW4xdKr0", "demrWQ8a", "mYz0W4/cLWu", "W6nGzbVdKmkR", "5P+W5y6y772U6lER6l+F5PIv", "W6aAv8o0W4O", "erbaW6C", "sSkcW6lcNCkRmG", "r8oBW4hcQmoSAW", "WOrkW6FdMZW", "ySkWlSo+WRKg", "WQRcU2xcQG", "WO1mW7JdLd0q", "ASk2tSoq", "FwHMjq", "W7/cKdRdOtm", "WPLVFmkGW64", "W48gaG7cRq", "C8ohW4hcSa", "W5VdVJjYWQS", "rdbSBvC", "W5m1DSo/W74", "omkuWOxdRSku", "W7CyW7aetfe", "W70coX7cGa", "AZBdJCow", "W6FdPmkH", "WO4yw23cLx0", "kSkUWRxdHCkFeq", "lhzNWPSm", "W6DFW54Cl8oC", "p1xcHWlcSH8", "bIVdO2Wr", "cYxdMwJcUq", "W6WwWOhdVq7cKW", "BEwLUEwiR+MgKEw4KoI9Oq", "D11UoSkpbW", "W74RWQVcVW", "FwBcTdi", "svjO", "omkIWRhdImk4", "exz5W7GJ", "qHTHrei", "6i+r5y+E56Y85zot", "jmozySkryW", "f0hdQCojgq", "ha/dKe4O", "WOW7W445va", "W4eBW5ldRaFcLq", "W4TKzq", "WOS3qHfqW4q", "jKHeWPtdQG", "5PAT54Ut5PYe", "W4KCW5ldGG", "jCkGWRKLjNC", "WRPUW7pdJdTj", "nKm6WP8P", "WOrOW4NdKqy", "W547u8k5nW", "cSkZWRpdRmkr", "W6qhwWNdKWS", "W5m9E8oPW6JdUG", "hYjxW643W5O", "xSkgtSoo", "cxT0", "d8kpWRFdTa", "aaTTW6q7", "EHTSALu", "x8k/FmojWPe", "ve1OhCkF", "gNn5WRhdIaW", "WO0uW5CzqG", "uCk5WQRdLh8", "WRO3W7qsta", "W4TFq8kgia", "W6aQWQxdHZi", "umklW6xcRtK5", "WR4oex0UW5u", "eCouCCkACG", "pdhdJ3pcVW", "wCksWRhdRMm", "i0ygWOe", "dX/cJvJcLq", "roA0UUISS+s7G+EtO+I+Oq", "W6KQuYW", "WQFcSdldGdJdSG", "jeddKYHAW6m", "W6bbrmkihW", "W4iAadi", "W7fgzmkIgGS", "W5PpWP7dGWtcQG", "WQ4kd3LQWOO", "ASoxzmoQW5GW", "WObYW7i5Eq4", "WRJdUCoBW5FcUCou", "Aa4+bSkOka", "WOOlW4S5vW", "W6PDeSkQWPm", "ofPgWR89", "EtT/W4mC", "W6DfxM0", "ebdcLuVcQra", "xY5SW5Om", "WO4eWQGlWPe", "dY/dI3JcPq", "WRxdIJddVtS", "WR5UW5pdSs0", "WQqvErn5", "BvrcW7LN", "EYztkCkF", "W4RdPmo0W6tdJCkC", "8jIbVqJLTy3LIRtLUQhLP4K", "v3nil8kWlW", "DerUiG", "W7NdNaHaWQe8", "nh3dG8onpW", "eM17WQyEWOC", "acRdVG", "mcVdNwii", "WO9IW5FdGGS", "duDZWR4D", "W5qQobtcTa", "W5vezY/dKW", "vIFcQuRdLa", "oSoFW5dcICoguSog", "W4/cLWhdUYW", "W78Fc8kY", "WOuWzr1QW5G", "W6W+WOpdJWO", "p2LwWPVdOW", "WOiOFGfIW70", "WP9vBmoXW6/cPG", "ymk3Dmo/WQ0+", "CCo0tW", "scHSW6q", "dglcTaxcJdO", "FgRcTcDAW6y", "Eu1Dg8kS", "WRKIfhTV", "W5CiDSkIiq", "hGeXW4aBmG", "CSo1b8km", "emoramkgWQ9c", "exddO8ompYW", "W5XBfdBdKa", "FsX+cCkW", "W6tcPqtdMr4", "W5Kohs3cSJy", "o3rhW4mV", "xGn3BNK", "ESoJw8o7W4C", "CeX3oSkdaa", "WOD+W5mOla", "WRxdQdHtWOCg", "d2fYW6aOEq", "zmkGy8oOW6CL", "dYD2W7efEa", "kYNcL0BcLG", "BSo0s8ouW5XU", "W68UWOxdOGK", "WOuQwfHUW4q", "hYDwW6e", "WQj2W6BdIrS", "W49YBmktoIK", "WPlcGJBdKbDd", "WRzGW4FdRIm", "W6WzcaNcPcO", "W4fjDgnS", "mu8aWRKQW6q", "W5mky8oKW7e", "jSknWRmKaq", "mfXJ", "pchcPfFcQu8", "jCkVWQddImkm", "bwCSWQ0sW4q", "4O2zx+IKSoEEHUAwLoMuHG", "dKfcW6OskG", "W5CWqmkFbq", "WPyal3bsWQq", "FrfVsMi", "ahfcWRyJW4K", "xSkRW7FdPvv+", "WQysWO0LWQS", "ac3dNKiS", "lSkTWQ0Biq", "cmkkBmkmwNK", "WQGKWPSDWOG", "E3hcVHi", "amk0WQldO8kmdq", "W5DaqM5fsq", "oXZdPZH7W60", "ESo+xmoRW44O", "WP85WOKNWPy", "fWZcLa/cLHe", "W5DGsh1j", "5A+h5OMuoa", "qSorW4ZcHJP/", "WQGoexnkWOq", "z03cLWJcRbG", "W4FdK8oiW7NdIa", "z8kosmozWOf9", "v8kIsCowWOK", "W45+yrpdLG", "DSoIW7pcImoc", "W5HMsf9T", "mtn/mCoKWPK", "hwvWW6uVFq", "puhdISouaa", "CSkFWR8", "x8kCxSo7WPa0", "zIDsW6eeAW", "pmowFSkRrW", "qmoUmmkKWOiI", "ESkgWP3dG3W", "nSovB8koyby", "WOiPW7zdq1q", "WQapWRnewv4", "rmkfW4xcHt4", "r3TSW4ju", "fLroW6ii", "eeCUWPWj", "aLxdJ8oeoW", "WQXYW5FdOtG", "s8kWW6FcPs8", "W64hbbdcMha", "DCkRF8oiWQeG", "lWjAlCoI", "cCkvWRyYfG", "W5v8cmklWPm", "sGiTW7GJCW", "xmkkW6O", "kwW7WQWW", "W6vhkGVdMW", "l10hWRa/", "WRXJW7ldMta", "WOjsW5aVfW", "WPrEW7y9ga", "WRmDc2XH", "hJX/gSor", "gKRdVaT4W5i", "qhf6W6jh", "5B+o5OM25P6o6ykP54M1", "gKvzWOVdOG", "6lsC6l+Q6zIk5yg+", "W4BdUaWFWQuw", "ytzYFLK", "bvldPmorodG", "ohPCWQ/dTW", "fGFcTLRcKq", "yJDvhmkq", "WQOUW4uctLm", "W54jkH/cOW", "kazNW5inW7C", "o1/cLZBcVX0", "W4/cGJNcNGvw", "W5/dMZbVWQ4", "W6XoDI3dOW", "WRJdJqpdNX0", "W5Hhs3fi", "nLb3WR8kFW", "W7PfyZddKSk3", "W5/dLmodW5FdG8od", "m2WbWQ8a", "W54zWRJdUru", "dw7dHCopiW", "nuzTWOVdGW", "FUIoKowmTEESUUwtK+ADSW", "5lMq5lQ45yQv", "qeRcMdnB", "W6ldRmo1", "paVcSuNcRG", "4PYOuEAFJoAoQoAEPUMvPG", "zKHZgSkZ", "ksbaW7eu", "vmoEACovW7Ko", "WPz4W6WBoCki", "hw1XW6y2", "W6nCqCkIcG", "bLD9WOSd", "oxbwW5utW4y", "nSo2uSktuG", "WRJdRcjJWOS8", "WROjFXbz", "erNdKK4j", "W7RdH8oiW6NcUCkD", "bueXWR0ovq", "W71vDejf", "W7JcGGpdOXK", "W519eCkmWRi", "dIvBeCov", "rIfuWQmtsW", "lComamkrWQPu", "WQfivSkXW50", "frJdG0yDWOO", "W7jFqSkk", "khBdIW", "ws/cVMNdUmoP", "W6LRnSkHWOe", "WO7dJrZcOCoV", "hZS0WOCLW7S", "5BMojI4", "W5NdHcnOWOe", "r8oAW5tcS8o3Fa", "dNeuWPqs", "W44EWOpdLXG", "hmkyWRq4dq", "W7NcPaddMHW", "bgldMX8", "WRZdMXVdHdy", "W75FeCkUWOq", "EKLMpW", "W7eatCki", "wSk3D8oqWPG", "dmoKvCk9sG", "5A6p5OQIWPm", "WPZdUuxdMsvdeqmX", "jXfIW5BcHW", "caRdS1CeWOG", "CMP/jSkf", "rJTrx8k1pa", "W7H6emkEWPf7", "ocnXdCod", "W5pcS33dL8k1W4y", "WPPwW7FdOs8", "dIj+W6BcMG", "mrRdU0e9W5O", "BY1TBhi", "gSkeWOWtlG", "W6jOseXi", "W6HNE8kDfq", "WP3cPHJcKuHj", "f3T0W50v", "cqT7W5nqvG", "W6XMuCkghG", "pLVdQZzMW54", "W4XAxMb6", "W6NdU8oMW4FdRG", "dGxcVgpcLG", "Dmo8W7VdS8ofwq", "WOCPW65cEK0", "stnyi8kC", "mLfgWOOd", "WR1avZy", "h1NdRdjt", "n8ofo8kFDKS", "xrNcHrpcTZu", "fCkuWP7dLCkI", "FHVcQZLKW4G", "W7HKc8kZWOzA", "ksbIW7tcQG", "tsfPW7DnWPi", "vsVcS3xdGSoK", "l2W5W5tdTbe", "ySoaW5BcIW", "pEI8PEwiMoAEV+wMIoI+PG", "iGj+W4BcTW", "vLrOWOu", "WQCbWOqyWPa", "ea7dGf4p", "W4aYWR7dJWpdHa", "W48zyXRdG8ks", "W6fNedtdQW", "W4bDACkriW", "df43WQ0P", "gmkgomk3WPLE", "W7bkmq", "WQCeWPuGWRy", "WOyhWRGcWRe", "W7jJxSkJjq", "WPitW5CNvwO", "5B+E5BMx772QCq", "W6pcMbRdSrS", "WR1QW6/dIIi", "D8kmu8opWR8", "W48kWRhdHYW", "rmk2ECoKWO0", "W7JdVcTaWOa", "us/cRq", "zMX4W4zj", "B8o8sSolW58", "fCobbmk+WPDc", "W5bEq8kkkq", "W6r8aXBdKG", "pc9xumoSWPe", "W6WYWQpdIty", "sxNcKHDF", "W4WBhq", "W4qFlCkcW5Se", "ttRcS3VdMmob", "dMJdHSodmq", "W5r6D1S", "W7zRWOVdIa5t", "WOtdUJNdLHi", "WQP6W7qXbW", "wCo1s8oT", "bSkyWPKUgW", "W6u/nGFcGW", "f37dHSoQha", "sCk/EmkT", "W7JdLCoiW5JdPq", "pHnBm8oi", "uernlmk6", "WQldPHFdSGdcRW", "WRX0W4SsjCkm", "xSoIqCowW6y", "W7fkz8kVlWe", "jYT+", "xsfmAfa", "hdpdUxq2", "WRriF8keW5dcKG", "d3KtWQ8o", "FrRcP3eKWP4", "W555pSkkWOzR", "rCorW7lcLGT/", "tCoWW6lcVSoK", "z8obWQRdMKddHG", "xtjVuvxdIG", "kXP4W5y5", "tIH2W7mjua", "WP0rwSkSW7pcPG", "vszVWQq1Aa", "htLYW5q1", "wYfXW70nuq", "W500WOddQcdcLW", "iahdU27cIa", "kmkbWPznl1m", "xSkkBSoWWQe", "oSoKkCk/WRC", "FZHhwq", "A8oyW7/cNW", "W594rWRdHG", "zqHYW7ab", "cSofC8keyW", "mGP4fG", "W5yKxmoVW5a", "umkwW7dcUG", "W6qtWPhdNZy", "ASk7WOddHKFdIa", "uJ/cNMxdKSoz", "mSowxCkpqq", "ASkUFSkuW5GP", "qZLge8kH", "W7v5sSku", "WRbiW50BiW", "WQVdJtBcIG", "ovfXWP4", "WR4tWReHWRLA", "jWRcGMSRW54", "8jcsV8o96lsN5y2Q5PE96ys4", "b1DwWOxdNXO", "xb7dMsG", "BmoUtConW5yO", "aCo1u8kSvN8", "BINcLKNdRW", "a21AWPxdNq", "WRzvW5qnja", "ksRdUu3cH8kX", "EwZcSYH1W40", "WQLKW5tdUsPd", "sCoGW4lcMSoy", "aSo9fSkGWPW", "WQJdTrlcSSoh", "rCocACoSW4O", "W4LbFmkFoa", "W7GCWPBdJcO", "W75emmkOWPrz", "W4pcUWpdMa5y", "zYjCeCk/mq", "wSowCmofW6S", "ddjDW6i", "WOxdJtu", "WRPpDCk2", "WRL3W7pdUsO", "mCkoWQldH8kj", "z8k4WORdIN4", "xw/cQsDc", "usXRW6qhwG", "zmkZW6pcSW4", "FSkKDSo5", "W6zHuxzP", "8ycgJ3pMK7RNTQlLUPNLK5a", "WO/dKddcI8o0", "tSoEyCkpW78V", "dNWNWO8Q", "BSoBW4BcIG", "pufGWRC", "W5iWyCkPmq", "l0DLWOyA", "WOP3W60k", "eh8oWO0L", "hIJdH1lcJ8k1", "AvrQW5T/", "W4yEpH/cHG", "lflcHrBcNu8", "kLddKH7cRti", "WQGoithdPSku", "WOmYWR4GWQq", "W5bcDdldUW", "d2pdRHv9", "W4dcMc3dNIS", "WQSUW5ldNq", "W79NuG/dMG", "W5qDsmoXW40", "tfNdJG7dJLy", "WPZdMJVcISoAWQu", "6lAW77Yb6lEx6l+9", "W4NcGcxdJcK", "xSoPt8oXW6O", "rCkqxSkRWOnM", "jSk+WOGCiq", "A0rpbSkUaG", "WROpW7iGEu8", "wSkyWRldShhdNW", "wZfAaCkvkq", "mfBdPSo0pbm", "zColW4VcL8oj", "h05mCbBcIq", "W6e4jGZcSW", "W7rxuCkqda", "DwRcTa", "yHzuDgJdNW", "WRnJW7SToCki", "iw7dJCou", "W6POFmkpga", "m0fTWOyq", "WOWbWO8UWR5U", "W6D4pWVdRG", "W7zeBa", "WQaUW60Dtfu", "W6GxzCohW67cLq", "k0KA", "atxdMuZcPW", "lCkcWPhdR8kx", "dv7dMSoLdq", "WP47WRGnWPe", "kHBcH07cLW", "WQjJW7atlmk8", "v211W5C", "W7RdQsfEWOu", "hvfuWRK4", "dYlcJK/cKHe", "hZCjW5mgW7G", "C27cTYnsW4W", "kK7cJcO", "t2FcTrv6", "mrFcL2JcGW", "ob/dJHzRW6G", "iZxdOgJcMG", "W7/dSrDMWRij", "sq9zjSkc", "W6mXWOpdMW", "WOtdOIpdRYK", "5BQvvu4", "bqfBlSoPWR8", "WPNLVjlLIzJPHlRLUzhLTPa", "bmoQBCkpyq", "qmkfW7BcSqWU", "n2VcTW7cQW", "whFcJYjb", "bmoNbCkNWR4", "WRS5WPCMWRq", "W7CviGNcPW", "e8kEWOeQca", "WRqZW47dUt5R", "jXjRl8ox", "W7JdICoaW5VdOa", "cI1wmmoZ", "psldVLu", "FJ5UWQCNwG", "W6fDA1XM", "WRrkESkhW7i", "aSkGWOuU", "CmowrCo2W6G", "afPEWONdQa", "W7lMM6xMLk/LIzT1WP8", "mJK7WQKQW6W", "xSkrvSoK", "WOPXW7xdNr8", "oKtdJqvCW44", "DGrwW7WXcW", "W5HaeSkSWPC", "mx9xa8okcG", "aG9rW4q+", "W7XgtmksaW", "nehdOSowmG", "jmkPWOddICkj", "Bmo7W4tcQCoy", "qLlcQt5m", "W5ZcVJ3dRqPs", "kYxdPw83WOm", "WRqBWOuNWPa", "x8kMW47cJt0", "W6ZdJ8oIW7xdLG", "WP7dKaFcPmoJ", "W7PQkCkmWPS", "W6bFrmkklLS", "WP/dLc3dSJ0", "gsZdVLZcH8kc", "WP7cOYldOKGS", "W4KNuCoLW5NcOG", "WPyExsfR", "sNW1W5L0EG", "W4ugrsriW7a", "iCoChCkA", "WRSXqYr8", "hCo8W5KohNW", "W73dMdHJWOW", "wSkSW6dcNqi", "bmkqWRRdGmk6mq", "E8kGFSoSW6uS", "yfTFW5XlWQK", "k07dTYX0W4i", "W7RdRX5C", "WQ4hW7igAG", "odf7fSomWOO", "W7SuDSk8pa", "dxBdMSowea", "gZRdPwRcQq", "W75KsHhdPG", "gW7dPg4qWO4", "W6yrWRZdMXe", "l8k9WOhdImkX", "5A6w5OItW6bM", "lCk0WPu", "WRVdQIBdOtC", "lsboW54iDa", "zmk3FSosWQa", "WRJdQWhcKmod", "lrVcIuK", "x2uGWO8GW658", "sGi2ja", "WPqyWP0K", "EWTZs1i", "kh4UWPO8", "W6zIsG", "pJldOfGSWQW", "tY9gAeK", "W5y9vq", "W6qWWQxdKJdcTW", "CSkKWRNdKW", "77+c5yIg5O+c5yQi5lMc5lIG", "nSk+WP7dKmkm", "rLzTmftdIq", "emkVWQBdK8kn", "tfT2", "W7LVprddOsC"];
    _0x1ec9 = function () {
      return _0x400ee3;
    };
    return _0x1ec9();
  }
  function _0x1c8f12(_0x4c8ed7, _0x189da1) {
    return _0x39e9(_0x189da1 - -189, _0x4c8ed7);
  }
  (async () => {
    function _0x38ac22(_0x467264, _0x3201bf) {
      return _0x1c8f12(_0x3201bf, _0x467264 - -664);
    }
    const _0x2acaf8 = {
      "vPCjT": function (_0x4121f0) {
        return _0x4121f0();
      }
    };
    await _0x2acaf8[_0x38ac22(1428, "B)gy")](main);
  })();
}();