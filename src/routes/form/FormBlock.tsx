import { useRouter } from 'next/router';

import Button from '@/components/button';
import Input from '@/components/input';
import { useAppStateContext } from '@/context/AppState';
import type { UserData } from '@/types';

export const FormBlock = () => {
  const router = useRouter();
  const { user, setUser } = useAppStateContext();

  const goToPrevPage = () => {
    router.back();
  };

  const handleChange = (name: keyof UserData, value: string) => {
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-3">
        <div className="text-[14px] font-medium text-[#545454]">Name</div>
        <Input
          name="name"
          className="w-full h-14 p-4 border-[#9F9F9F] mt-2 text-[14px] text-[#979797] font-normal"
          placeholder="Your name"
          value={user.name}
          minLength={2}
          onChange={e => handleChange('name', e.target.value)}
          required
        />
      </div>
      <div className="mt-3">
        <div className="text-[14px] font-medium text-[#545454]">
          Second name
        </div>
        <Input
          name="secondName"
          className="w-full h-14 p-4 border-[#9F9F9F] mt-2 text-[14px] text-[#979797] font-normal"
          placeholder="Your secondname"
          value={user.secondName}
          minLength={3}
          maxLength={16}
          onChange={e => handleChange('secondName', e.target.value)}
          required
        />
      </div>
      <div className="mt-3">
        <div className="text-[14px] font-medium text-[#545454]">
          Phone (for example: 0661234567)
        </div>
        <Input
          name="phone"
          className="w-full h-14 p-4 border-[#9F9F9F] mt-2 text-[14px] text-[#979797] font-normal"
          placeholder="Your secondname"
          type="number"
          value={user.phone}
          minLength={10}
          maxLength={12}
          onChange={e => handleChange('phone', e.target.value)}
          required
        />
      </div>
      <div className="mt-3">
        <div className="text-[14px] font-medium text-[#545454]">Email</div>
        <Input
          name="email"
          className="w-full h-14 p-4 border-[#9F9F9F] mt-2 text-[14px] text-[#979797] font-normal"
          placeholder="Email"
          value={user.email}
          type="email"
          onChange={e => handleChange('email', e.target.value)}
          required
        />
      </div>
      <div className="text-[20px] font-semibold mt-4">Shipping address:</div>
      <div className="mt-2">
        <div className="text-[14px] font-medium text-[#545454]">City</div>
        <Input
          name="city"
          className="w-full h-14 p-4 border-[#9F9F9F] mt-2 text-[14px] text-[#979797] font-normal"
          placeholder="Your secondname"
          value={user.city}
          minLength={3}
          maxLength={16}
          onChange={e => handleChange('city', e.target.value)}
          required
        />
      </div>
      <div className="mt-3">
        <div className="text-[14px] font-medium text-[#545454]">
          Address line (for example: Lva Landau 13)
        </div>
        <Input
          name="address"
          className="w-full h-14 p-4 border-[#9F9F9F] mt-2 text-[14px] text-[#979797] font-normal"
          placeholder="Your secondname"
          value={user.address}
          onChange={e => handleChange('address', e.target.value)}
          required
        />
      </div>
      <div className="mt-16 flex justify-between">
        <Button
          className="min-h-16 max-w-[160px]"
          onClick={goToPrevPage}
          type="button"
        >
          Back
        </Button>
        <Button
          className="min-h-16 max-w-[160px]"
          variant="primary"
          type="submit"
        >
          Next
        </Button>
      </div>
    </form>
  );
};
