import Image from "next/image";

export type CompaniesProps = {
  companies: {
    name: string;
    image: string;
  }[];
};

const Companies = ({ companies }: Readonly<CompaniesProps>) => {
  return (
    <div className="py-12 md:py-20 lg:py-24">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {companies.map(({ name, image }) => (
          <div className="flex items-center justify-center">
            <Image src={image} alt={name} width="100" height="52" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
