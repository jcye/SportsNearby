create table Event(
	eID INTEGER PRIMARY KEY, eName TEXT, eCategory TEXT, eDescription TEXT, 
	eHostID TEXT, startTime TEXT, endTime TEXT, eLocation_a TEXT, eLocation_b TEXT,
	eLimit INTEGER, 
	FOREIGN KEY(eHostID) REFERENCES User(uID)
	);
create table User(
	uID TEXT PRIMARY KEY, uName TEXT, uPhoto_URL TEXT, uLocation_a TEXT, uLocation_b TEXT
	);
create table Request(
	eID INTEGER, uID TEXT,
	FOREIGN KEY(eID) REFERENCES Event(eID),
	FOREIGN KEY(uID) REFERENCES User(uID)
	);
create table Going(
	eID INTEGER, uID TEXT,
	FOREIGN KEY(eID) REFERENCES Event(eID),
	FOREIGN KEY(uID) REFERENCES User(uID)
	);