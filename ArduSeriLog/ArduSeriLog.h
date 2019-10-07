#ifndef arduser

#include "Arduino.h"

class ASL {
    public:
        ASL(Stream &seriObj);
        void warn(String msg);
        void stat(String msg);
        void error(String msg);
        void fatal(String msg);
        void data(String msg);
        void info(String msg);
    private:
        void doMsg(String tag, String msg);
        Stream &_seriObj;
}