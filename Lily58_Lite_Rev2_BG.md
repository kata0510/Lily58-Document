### 組み立て方は動画を閲覧ください。(キーマップの書き込みの情報が古くなっています)  
[![](https://img.youtube.com/vi/t6HLQvqlsVM/0.jpg)](https://www.youtube.com/watch?v=t6HLQvqlsVM)  
  
## OLEDを取り付けない場合
OLEDを取り付けない場合はファームウェアのOLED機能をOFFにする必要があります。  
以下のOLED機能をオフにしたファームウェアをダウンロードしていただき、QMKToolboxで書き込んでいただく、   
もしくはご自身で環境を作っていただきファームウェアをコンパイルして頂く必要がございます。  
‘qmk_firmware/keyboards/lily58/rules.mk‘と  
‘qmk_firmware/keyboards/lily58/keymaps/[キーマップ]/rules.mk‘の‘OLED_DRIVER_ENABLE = yes‘をnoにしてコンパイルし、書き込んでください。

OLEDオフにしたデフォルトキーマップhexファイル  
[ダウンロード(lily58_rev1_default.hex)](https://drive.google.com/uc?export=download&id=1yPxZlVRVBfqq0-pEKkJZc93vqW6Jdboj)
  
## 次へ:[キーマップの書き込み/編集](firmware.md)