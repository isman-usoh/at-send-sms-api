# at-send-sms-api

## 0. Prerequest
- Install node.js 10 or newer

## 1. Instalation
```bash
npm install
```

## 2. Developer
```bash
npm run dev
```

## 3. Production
- Start service
```bash
npm run start
```

- Stop service
```bash
npm run stop
```

### 4. Test
- Curl
```bash
curl -X POST -H "Content-Type: application/json" -D '{"to":"+66987654321","msg":"HelloWorld"}' http://localhost:3000/sms 
```

- C# (RestSharp)
```C#
var client = new RestClient("http://localhost:3000/sms");
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "application/json");
request.AddJsonBody(new { to = "+66987654321", msg = "HelloWorld" });
IRestResponse response = client.Execute(request);
```