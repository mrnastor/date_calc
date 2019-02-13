# date_calc

A simple date interval calculator

Usage: date_calc date1<Format: DD/MM/YYYY> date2<Format: DD/MM/YYYY>
e.g. date_calc 02/06/1983 05/06/1983

## Installation:
1. Install Docker
https://docs.docker.com/install/

2. Build application
```bash
docker build -t date_calc .
```

3. Run application
```bash
docker run date_calc 29/12/1989 04/01/1990
```