# ArduSeriLog
Arduino logger library. Part of the WaveLine codebase.

---

### Example
```cpp
#include <ASL>
ASL Logger(Serial);

void setup() {
    Serial.begin(9600);
    Logger.state("Serial connected.");
}

void loop() {
    Logger.data("Hello, World!");
    delay(1000);
}
```

---

*More documentation coming soon.*