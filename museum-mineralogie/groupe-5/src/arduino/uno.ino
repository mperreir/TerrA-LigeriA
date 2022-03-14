void setup() {
  Serial.begin(9600);
  pinMode(4,INPUT_PULLUP);  
  pinMode(5,INPUT_PULLUP);
  pinMode(6,INPUT_PULLUP);
  pinMode(7,INPUT_PULLUP);
  pinMode(8,INPUT_PULLUP);
}

void loop() {
  delay(100);
  Serial.print("a4bc");
  Serial.print(digitalRead(4));
  Serial.println("d");

  Serial.print("a5bc");
  Serial.print(digitalRead(5));
  Serial.println("d");

  Serial.print("a6bc");
  Serial.print(digitalRead(6));
  Serial.println("d");

  Serial.print("a7bc");
  Serial.print(digitalRead(7));
  Serial.println("d");

  Serial.print("a8bc");
  Serial.print(digitalRead(8));
  Serial.println("d");
}
