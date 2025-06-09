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
  overflowX: "auto" as "auto",
  border: "none",
};

const codeSamples = {
  curl: `
  curl --location 
  --request POST 'https://emailmarketingapi.5starcompany.com.ng/api/add-subscriber'
  --header 'Authorization: Bearer CH_76f80d39b1f4ef39c79862f238489844'
  --header 'Content-Type: application/json'
  --data-raw '{
   "email" : "ebuka@gmail.com",
    "fname" : "ogochi",
    "lname" : "ebus",
    "country" : "nigeria",
    "state" : "lagos",
    "phone" : "090875468265",
    "dob" : "01/3/2004",
    "tag" : 8
    }
  }
  `,
  javascript: `
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer CH_76f80d39b1f4ef39c79862f238489844");

  const raw = JSON.stringify({
  "email": "ebuka@gmail.com",
  "fname": "ogochi",
  "lname": "ebus",
  "country": "nigeria",
  "state": "lagos",
  "phone": "090875468265",
  "dob": "01/3/2004",
  "tag": 8
});

fetch("https://emailmarketingapi.5starcompany.com.ng/api/add-subscriber", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

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
