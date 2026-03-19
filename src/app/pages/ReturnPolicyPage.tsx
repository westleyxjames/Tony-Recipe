export function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Return Policy</h1>
          <p className="text-xl text-gray-300">
            Easy returns within 30 days
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>Our Return Policy</h2>
          <p>
            At NextEra Fashion, we want you to be completely satisfied with your purchase. 
            If you're not happy with your order, we offer a simple 30-day return policy.
          </p>

          <h3>Return Window</h3>
          <ul>
            <li>You have 30 days from the date of delivery to return your item</li>
            <li>Items must be unused, unwashed, and in original condition</li>
            <li>All original tags must be attached</li>
            <li>Items must be in original packaging</li>
          </ul>

          <h3>How to Return</h3>
          <ol>
            <li>Log into your account and navigate to your order history</li>
            <li>Select the item(s) you wish to return</li>
            <li>Print the prepaid return label</li>
            <li>Package the item securely with all original packaging</li>
            <li>Drop off at any authorized shipping location</li>
          </ol>

          <h3>Refund Process</h3>
          <p>
            Once we receive your return, our team will inspect the item within 2-3 business days. 
            If approved, your refund will be processed to your original payment method within 5-7 business days.
          </p>

          <h3>Non-Returnable Items</h3>
          <ul>
            <li>Intimate apparel and undergarments</li>
            <li>Sale or clearance items marked as "final sale"</li>
            <li>Gift cards</li>
            <li>Items damaged due to misuse</li>
          </ul>

          <h3>Exchanges</h3>
          <p>
            If you need a different size or color, please contact our customer service team at 
            support@nexterafashion.com or call (800) 421-8845. We'll be happy to arrange an exchange.
          </p>

          <h3>Shipping Costs</h3>
          <p>
            Returns are free for all US customers. We provide a prepaid return shipping label with every order.
          </p>

          <h3>Questions?</h3>
          <p>
            If you have any questions about our return policy, please contact our customer service team. 
            We're here to help!
          </p>
        </div>
      </div>
    </div>
  );
}
