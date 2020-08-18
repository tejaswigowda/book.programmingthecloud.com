# Development Environment

ESP32 is a low-power system-on-chip (SoC) that integrates Bluetooth and
Wifi capabilities on a single board. It is made by Espressif and has
been deployed in working IoT products. It is a good choice to learn to program to
learn basic IoT concepts.

## ESP32
The ESP32 chip has the following features:

- Processors:
  - CPU: Xtensa dual-core (or single-core) 32-bit LX6 microprocessor, operating at 160 or 240 MHz and performing at up to 600 DMIPS
  - Ultra low power (ULP) co-processor
- Memory: 520 KiB SRAM
- Wireless connectivity:
  - Wi-Fi: 802.11 b/g/n
  - Bluetooth: v4.2 BR/EDR and BLE (shares the radio with Wi-Fi)
- Peripheral interfaces:
  - 12-bit SAR ADC up to 18 channels
  - 2 × 8-bit DACs
  - 10 × touch sensors (capacitive sensing GPIOs)
  - 4 × SPI
  - 2 × I²S interfaces
  - 2 × I²C interfaces
  - 3 × UART
  - SD/SDIO/CE-ATA/MMC/eMMC host controller
  - SDIO/SPI slave controller
  - Ethernet MAC interface with dedicated DMA and IEEE 1588 Precision Time Protocol support
  - CAN bus 2.0
  - Infrared remote controller (TX/RX, up to 8 channels)
  - Motor PWM
  - LED PWM (up to 16 channels)
  - Hall effect sensor
  - Ultra low power analog pre-amplifier
- Security:
  - IEEE 802.11 standard security features all supported, including WFA, WPA/WPA2 and WAPI
  - Secure boot
  - Flash encryption
  - 1024-bit OTP, up to 768-bit for customers
  - Cryptographic hardware acceleration: AES, SHA-2, RSA, elliptic curve cryptography (ECC), random number generator (RNG)
- Power management:
  - Internal low-dropout regulator
  - Individual power domain for RTC
  - 5μA deep sleep current
  - Wake up from GPIO interrupt, timer, ADC measurements, capacitive touch sensor interrupt

 <img style="display:block;margin:auto" src='../../../imgs/pinout.png'>    
 <figcaption> Fig: 11.1 ESP 32 pinout</figcaption>               


## T Watch

T Watch is a wearable *development module* that integrates ESP32 along
with many sensors. It has a USB-C interface using which it can be
charged and programmed. It has 2 free GPIOs that can be used to hook up
additional sensors.

 <img style="display:block;margin:auto" src='../../../imgs/header.jpg'>    
 <figcaption> Fig: 11.2 T Watch </figcaption>               


## Arduino IDE
Even though we are not programming Arduino chips, we can use their
Integrated Development Environment (IDE) to program ESP32 chips. The
Arduino IDE includes:

1. Code Editor
2. Code Compilier
3. Binary Loader

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


## Arduino C++

The code in this section will be written in Arduino C++. Since this book
has introduced JS, it should be easy to transition into Arduino C++,
since both languages have borrowed syntax from C.

Please take a look at the <a
href='https://www.arduino.cc/reference/en/'>Arduino C++ language
reference</a> for details. The code will be explained when first
introduced.
