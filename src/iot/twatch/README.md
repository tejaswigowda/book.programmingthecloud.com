# T-Watch 

The TTGO T Watch comnines ESP32 and other sensors onto a single board.

 <img style="display:block;margin:auto"
src='../../../../imgs/watchPinout.png'>    
 <figcaption> Fig: 12.1 T Watch Pinout</figcaption>               

 <img style="display:block;margin:auto" src='../../../../imgs/peri.png'>    
 <figcaption> Fig: 12.1 T Watch </figcaption>               


Let us now write our first program, compile it and *run* it on the T
Watch.

## Hello World


1. Download and install Arduino:

  <https://www.arduino.cc/en/Main/Software>
 <img style="display:block;margin:auto" src='../../../imgs/arduino.png'>    

2. Add this to your boards (in `Arduino`-->`Preferences`):
   
```js
https://dl.espressif.com/dl/package_esp32_dev_index.json
```
   

 <img style="display:block;margin:auto" src='../../../imgs/aPref.png'>    
    
*more instructions:* <https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards_manager.md>

3. Install USB to UART Driver:
   <https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers>
 <img style="display:block;margin:auto" src='../../../imgs/driver.png'>    
4. Install T-Watch library
   <https://github.com/Xinyuan-LilyGO/TTGO_TWatch_Library> 
(Clone this
git repository into your `Arduino/libraries` folder).
5. Clone <https://github.com/tejaswigowda/PtC-tWatchHelloWorld.git>

```sh
git clone https://github.com/tejaswigowda/PtC-tWatchHelloWorld.git
```

6. Open `helloWorld.ino` in Arduino IDE.
<iframe style='border:1px dashed;width:
100%;height:400px;background:white'
src='https://www.onlinetool.io/gitoembed/widget?url=https%3A%2F%2Fgithub.com%2Ftejaswigowda%2FPtC-tWatchHelloWorld%2Fblob%2Fmaster%2FhelloWorld%2FhelloWorld.ino'
id=''></iframe>


7. Connect watch via USB cable and **choose your port** in Arduino IDE.

8. Compile and run!


