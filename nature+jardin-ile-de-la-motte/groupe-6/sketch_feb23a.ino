const int btn = 2;
const int led = 13;
void setup() {
  pinMode(btn, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  delay(100);
  const bool valBtn = digitalRead (btn) == LOW;
  Serial.println(valBtn ? "1" : "0");
}
