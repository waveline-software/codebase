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