import { Cart } from "@medusajs/medusa"
import Button from "@modules/common/components/button"
import CartTotals from "@modules/common/components/cart-totals"
import Link from "next/link"
import { formatAmount } from "medusa-react"

type SummaryProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}

declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}

const Summary = ({ cart }: SummaryProps) => {
  const getAmount = (amount: number | null | undefined) => {
    return formatAmount({
      amount: amount || 0,
      region: cart.region,
      includeTaxes: false,
    })
  }

  const beginCheckout = () => {
    // if (typeof window !== "undefined" || !item) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ ecommerce: null })
    window.dataLayer.push({
      event: "begin_checkout",
      ecommerce: {
        currency: "KES",
        value: `${getAmount(cart.subtotal)}`,
        items: [cart.items],
      },
    })
    window.dataLayer.push({
      event: "InitiateCheckout",
      products: {
        content_type: "product",
        content_ids: [`${cart.items.map((cart) => cart.variant.product_id)}`],
        value: `${getAmount(cart.subtotal)}`,
        currency: "KES",
        contents: [cart.items],
        num_items: `${cart.items.length}`,
      },
    })
    // }
  }
  return (
    <div className="grid grid-cols-1 gap-y-6">
      <CartTotals cart={cart} />
      <Link href="/checkout">
        <a>
          <Button onClick={() => beginCheckout()}>Go to checkout</Button>
        </a>
      </Link>
    </div>
  )
}

export default Summary
