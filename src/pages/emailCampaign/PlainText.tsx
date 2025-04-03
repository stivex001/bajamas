import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";

const PlainText = () => {
  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Plain Text" />
      <CardLayout className="lg:p-5">
        <form action="">Editor</form>
      </CardLayout>
    </main>
  );
};

export default PlainText;
