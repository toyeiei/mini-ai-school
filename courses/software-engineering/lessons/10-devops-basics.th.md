# พื้นฐาน DevOps

DevOps เชื่อมระหว่างการพัฒนาและการดำเนินงาน มุ่งเน้น automation, continuous delivery และการ deploy ที่เชื่อถือได้

## Continuous Integration (CI)

รัน tests และการตรวจสอบอัตโนมัติเมื่อโค้ดมีการเปลี่ยนแปลง

```
# .github/workflows/test.yml
name: Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
```

## Continuous Deployment (CD)

Deploy โค้ดที่ผ่านการตรวจสอบแล้วไปยัง environments อัตโนมัติ

```
# Deploy to staging เมื่อ merge เข้า develop
# Deploy to production เมื่อ merge เข้า main
```

## Environments

| Environment | วัตถุประสงค์ | สิทธิ์การเข้าถึง |
|-------------|---------|--------|
| Local | พัฒนา | เครื่องของนักพัฒนา |
| Development | ทดสอบการรวมระบบ | ทีมพัฒนา |
| Staging | ทดสอบก่อน production | QA, Stakeholders |
| Production | แอปพลิเคชันจริง | ผู้ใช้งานทั่วไป |

## พื้นฐาน Containers ด้วย Docker

Containers รวมแอปพลิเคชันของคุณพร้อม dependencies

```
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

```
# Build และ run
docker build -t myapp .
docker run -p 3000:3000 myapp
```

## พื้นฐาน Monitoring

ติดตามสุขภาพแอปพลิเคชันใน production

### Metrics ที่ควรติดตาม

- **Response time** - แอปตอบสนองเร็วแค่ไหน?
- **Error rate** - request ล้มเหลวบ่อยแค่ไหน?
- **Uptime** - แอปพร้อมใช้งานไหม?
- **Resource usage** - CPU, memory, disk

### Logging

```javascript
// Structured logging
console.log(JSON.stringify({
    level: 'info',
    message: 'User logged in',
    userId: user.id,
    timestamp: new Date().toISOString()
}));
```

## Infrastructure as Code

กำหนด infrastructure ในไฟล์โค้ด ไม่ใช่ทำด้วยมือ

```
# docker-compose.yml
version: '3'
services:
  app:
    build: .
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

## แนวปฏิบัติที่ดีในการ Deploy

1. **Automate ทุกอย่าง** - ขั้นตอนด้วยมือมักผิดพลาด
2. **Deploy การเปลี่ยนแปลงเล็กๆ** - debug ง่ายกว่า
3. **มีแผน rollback** - รู้วิธีย้อนกลับ
4. **Monitor หลัง deploy** - จับปัญหาได้เร็ว
5. **Feature flags** - เปิด/ปิดฟีเจอร์ได้โดยไม่ต้อง deploy ใหม่

## Deploy Pipeline

```
Code → Build → Test → Stage → Deploy → Monitor
  │       │       │       │       │        │
 Commit   │       │       │       │        │
          ▼       │       │       │        │
      Compile     │       │       │        │
                  ▼       │       │        │
              Unit Tests   │       │        │
                          ▼       │        │
                       Build      │        │
                                  ▼        │
                             Integration Tests
                                          ▼
                                        Deploy
```

## สรุปสิ่งสำคัญ

- CI จับปัญหาได้ตั้งแต่เริ่ม
- CD deploy ได้เร็วและปลอดภัย
- Containers ให้ความสม่ำเสมอ
- Monitor ใน production
- Automate ทุกอย่างที่เป็นไปได้
