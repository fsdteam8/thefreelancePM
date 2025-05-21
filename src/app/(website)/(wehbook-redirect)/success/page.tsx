import SuccessMessage from "./_components/success";

export default function Home() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center p-4">
      <SuccessMessage
        title="Your payment has been received!"
        highlightedWord="received"
        description="Thank you for your payment. Your plan has been upgraded! "
        buttonText="Home"
        buttonHref="/"
      />
    </main>
  );
}
