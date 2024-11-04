import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query ?? ''
  console.log(query)
  const customers = await fetchFilteredCustomers(query)
  return <CustomersTable customers={customers} />
}
