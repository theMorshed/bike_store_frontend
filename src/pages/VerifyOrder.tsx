import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Card, Button, Spin, Tag, Typography, Descriptions } from "antd";
import { CheckCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useVerifyOrderQuery } from "../redux/features/cart/orderApi";

const { Title } = Typography;

interface OrderData {
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

export default function OrderVerification() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");

  const { isLoading, data } = useVerifyOrderQuery(orderId, {
    refetchOnMountOrArgChange: true,
  });

  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    if (data?.data?.length) {
      setOrderData(data.data[0]);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Title level={2} className="text-center mb-6">
        Order Verification
      </Title>
      {orderData ? (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Order Details */}
          <Card title="Order Details" bordered>
            <Descriptions column={1}>
              <Descriptions.Item label="Order ID">{orderData.order_id}</Descriptions.Item>
              <Descriptions.Item label="Amount">
                {orderData.currency} {orderData.amount.toFixed(2)}
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <Tag color={orderData.bank_status === "Success" ? "green" : "red"}>
                  {orderData.bank_status}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Date">
                {new Date(orderData.date_time).toLocaleString()}
              </Descriptions.Item>
            </Descriptions>
          </Card>

          {/* Payment Information */}
          <Card title="Payment Information" bordered>
            <Descriptions column={1}>
              <Descriptions.Item label="Method">{orderData.method}</Descriptions.Item>
              <Descriptions.Item label="Transaction ID">{orderData.bank_trx_id}</Descriptions.Item>
              <Descriptions.Item label="Invoice No">{orderData.invoice_no}</Descriptions.Item>
              <Descriptions.Item label="SP Code">{orderData.sp_code}</Descriptions.Item>
              <Descriptions.Item label="SP Message">{orderData.sp_message}</Descriptions.Item>
            </Descriptions>
          </Card>

          {/* Customer Information */}
          <Card title="Customer Information" bordered>
            <Descriptions column={1}>
              <Descriptions.Item label="Name">{orderData.name}</Descriptions.Item>
              <Descriptions.Item label="Email">{orderData.email}</Descriptions.Item>
              <Descriptions.Item label="Phone">{orderData.phone_no}</Descriptions.Item>
              <Descriptions.Item label="Address">{orderData.address}</Descriptions.Item>
              <Descriptions.Item label="City">{orderData.city}</Descriptions.Item>
            </Descriptions>
          </Card>

          {/* Verification Status */}
          <Card title="Verification Status" bordered>
            <div className="flex items-center gap-2">
              {orderData.is_verify === 1 ? (
                <Tag color="green" icon={<CheckCircleOutlined />}>
                  Verified
                </Tag>
              ) : (
                <Tag color="yellow" icon={<ExclamationCircleOutlined />}>
                  Not Verified
                </Tag>
              )}
            </div>
            <div className="mt-4">
              <Link to="/order">
                <Button type="primary" block>
                  View Orders
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      ) : (
        <p className="text-center text-red-500">Order not found!</p>
      )}
    </div>
  );
}
