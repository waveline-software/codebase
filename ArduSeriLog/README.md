# ArduSeriLog
Arduino logger library. Part of the WaveLine codebase.

---

### Example
From [Example.ino](Example.ino):
```cpp
#include <ArduSeriLog>
ASL Logger(Serial);

void setup() {
    Serial.begin(9600);
    Logger.state("Serial connected.");
}

void loop() {
    Logger.info("Hello, World!");
    Logger.data("2 + 2 = 4");
    delay(1000);
}
```
This should output to the serial console:
```
[INFO ] Hello, World!
[DATA ] 2 + 2 = 4
```

---

### Usages

- **`warn(msg)`** is used to warn the user of things that may cause errors.
- **`stat(msg)`** is used to update the user on statuses and states.
- **`error(msg)`** notifies the user of a non-fatal error.
- **`fatal(msg)`** notifies the user of a fatal error that causes the program to quit.
- **`data(msg)`** is used to output data and results.
- **`info(msg)`** can be used for general messages.