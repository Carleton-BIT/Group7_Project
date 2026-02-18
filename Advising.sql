-- This is basically created as a back-up to make sure that if anything goes wrong in the console, I can have a back-up to fall back on.

CREATE TABLE academic_services
(
    service_id       INT PRIMARY KEY,
    service_category VARCHAR(100),
    service_name     VARCHAR(100),
    description      VARCHAR(400),
    contact_email    VARCHAR(100),
    location         VARCHAR(100),
    operating_hours  VARCHAR(100),
)