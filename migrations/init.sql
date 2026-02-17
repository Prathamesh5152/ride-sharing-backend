CREATE TABLE passengers (
 id SERIAL PRIMARY KEY,
 name TEXT,
 rating FLOAT
);

CREATE TABLE cabs (
 id SERIAL PRIMARY KEY,
 capacity INT,
 available_seats INT,
 luggage_capacity INT,
 available_luggage INT,
 status TEXT
);

CREATE INDEX idx_cab_status ON cabs(status);

CREATE TABLE ride_requests (
 id SERIAL PRIMARY KEY,
 passenger_id INT,
 origin_lat FLOAT,
 origin_lng FLOAT,
 dest_lat FLOAT,
 dest_lng FLOAT,
 seat_count INT,
 luggage_units INT,
 detour_tolerance FLOAT,
 status TEXT
);

CREATE INDEX idx_request_status ON ride_requests(status);
