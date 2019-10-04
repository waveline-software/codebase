# ArduSeriLog
Arduino logger library. Part of the Waveline codebase and under the GNU GPLv3.

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