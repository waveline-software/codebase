#include "Arduino.h"
#include "ArduSeriLog.h"

ASL::ASL(Stream &seriObj) {
    _seriObj = seriObj;
}

ASL::doMsg(String tag, String msg) {
    _seriObj.println("[" + tag "]" + msg);
}

ASL::warn(String msg) { doMsg("WARN ", msg); }
ASL::state(String msg) { doMsg("STATE", msg); }
ASL::error(String msg) { doMsg("ERROR", msg); }
ASL::data(String msg) { doMsg("DATA ", msg); }