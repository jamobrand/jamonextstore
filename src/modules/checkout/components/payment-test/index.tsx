import Alert from "@modules/common/icons/alert"

const PaymentTest = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-x-2 bg-yellow-100 w-full p-2">
        <Alert size={16} className="text-yellow-700" />
        <span className="text-small-regular text-yellow-700">
          <span className="font-semibold">Attention:</span> For select orders
          around Nairobi an initial deposit is required to show commitment.
          Outside Nairobi full payment has to be made.For more info contact our
          customer service @ 0746 381892.
        </span>
      </div>
    </div>
  )
}

export default PaymentTest
