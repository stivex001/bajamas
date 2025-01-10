import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

// const customTheme = {
//   'code[class*="language-"]': {
//     color: "#f8f8f2",
//     background: "#15161A",
//     fontFamily: '"Fira Code", monospace',
//     fontSize: "14px",
//     lineHeight: "1.5",
//     borderRadius: "8px",
//     padding: "16px",
//   },
//   comment: { color: "#6272a4", fontStyle: "italic" },
//   keyword: { color: "#ff79c6", fontWeight: "bold" },
//   string: { color: "#f1fa8c" },
//   function: { color: "#50fa7b" },
// };

const customStyle = {
  backgroundColor: "#15161A", 
  color: "#537557", 
  borderRadius: "8px",
  padding: "16px",
  fontSize: "14px",
  lineHeight: "1.5",
  overflowX: "auto",
  border: "none"
};

const codeSamples = {
  curl: `
  curl --location 
  --request POST 'https://topups.reloadly.com/topups'
  --header 'Authorization: Bearer YOUR_ACCESS_TOKEN HERE'
  --header 'Accept: application/com.reloadly.topups-v1+json'
  --header 'Content-Type: application/json'
  --data-raw '{
    "operatorId": "341",
    "amount": "10",
    "useLocalAmount": false,
    "customIdentifier": "This is example identifier 092",
    "recipientPhone": {
      "countryCode": "NG",
      "number": "08147658721"
    },
    "senderPhone": {
      "countryCode": "CA",
      "number": "1231231231"
    }
  }'
  `,
  javascript: `
  fetch('https://topups.reloadly.com/topups', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN HERE',
      'Accept': 'application/com.reloadly.topups-v1+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      operatorId: '341',
      amount: '10',
      useLocalAmount: false,
      customIdentifier: 'This is example identifier 092',
      recipientPhone: {
        countryCode: 'NG',
        number: '08147658721',
      },
      senderPhone: {
        countryCode: 'CA',
        number: '1231231231',
      },
    }),
  });
  `,
};

export const SynthaxHighlighter = () => {
  return (
    <div className="bg-[#15161A] py-5 px-9 rounded-[34px]">
      <Tabs defaultValue="cURL">
        <TabsList className="bg-[#15161A]">
          <TabsTrigger
            value="cURL"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border border-[#2E415F] rounded-tl-[20px]"
          >
            cURL
          </TabsTrigger>
          <TabsTrigger
            value="JavaScript"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border border-[#2E415F] rounded-tl-[20px]"
          >
            JavaScript
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cURL">
          <SyntaxHighlighter
            language="bash"
            style={dark}
            customStyle={customStyle}
          >
            {codeSamples.curl}
          </SyntaxHighlighter>
        </TabsContent>
        <TabsContent value="JavaScript">
          <SyntaxHighlighter
            language="javascript"
            style={dark}
            customStyle={customStyle}
          >
            {codeSamples.javascript}
          </SyntaxHighlighter>
        </TabsContent>
      </Tabs>
    </div>
  );
};
