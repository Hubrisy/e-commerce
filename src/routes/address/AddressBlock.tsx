import { useState } from 'react';
import { useRouter } from 'next/router';

import { Routes } from '..';

import Button from '@/components/button';
import Input from '@/components/input';
import { useAppStateContext } from '@/context/AppState';
import type { ErrorsType, UserData } from '@/types';
import {
  emailValidation,
  isValidString,
  validatePhoneNumber,
} from '@/utils/validation';

export const AddressBlock = () => {
  const router = useRouter();
  const { user, setUser } = useAppStateContext();
  const [errors, setErrors] = useState<ErrorsType>(
    Object.keys(user).reduce(
      (acc, key) => ({ ...acc, [key]: '' }),
      {} as ErrorsType,
    ),
  );

  const goToPrevPage = () => {
    router.back();
  };

  const handleChange = (name: keyof UserData, value: string) => {
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const checkValid = (): boolean => {
    const innerErrors: ErrorsType = Object.keys(user).reduce(
      (acc, key) => ({ ...acc, [key]: '' }),
      {} as ErrorsType,
    );

    if (!isValidString(user.name, 4, 20)) {
      innerErrors.name = 'Your name must be between 4 and 20 characters';
    }

    if (!isValidString(user.secondName, 4, 20)) {
      innerErrors.secondName =
        'Your second name must be between 4 and 20 characters';
    }

    if (!emailValidation(user.email)) {
      innerErrors.email = 'ooops something wrong with your email';
    }

    if (!validatePhoneNumber(user.phone)) {
      innerErrors.phone = 'ooops something wrong with your number';
    }

    setErrors(innerErrors);

    return Object.values(innerErrors).every(value => value === '');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (checkValid()) {
      router.push(Routes.shipping);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[340px] xl:min-w-[500px]">
      <div className="mt-3">
        <div className="text-[14px] font-medium text-[#545454]">Name</div>
        <Input
          name="name"
          className="w-full h-14 p-4 border-[#9F9F9F] mt-2 text-[14px] font-normal"
          placeholder="Your name"
          value={user.name}
          errorMsg={errors.name}
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
          className="w-full h-14 p-4 border-[#9F9F9F] mt-2 text-[14px] font-normal"
          placeholder="Your secondname"
          value={user.secondName}
          errorMsg={errors.secondName}
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
          className="w-full h-14 p-4 border-[#9F9F9F] mt-2 text-[14px] font-normal"
          placeholder="Phone number"
          type="string"
          inputMode="tel"
          value={user.phone}
          errorMsg={errors.phone}
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
          className="w-full h-14 p-4 border-[#9F9F9F] mt-2 text-[14px] font-normal"
          placeholder="Email"
          value={user.email}
          errorMsg={errors.email}
          type="string"
          inputMode="email"
          onChange={e => handleChange('email', e.target.value)}
          required
        />
      </div>
      <div className="text-[20px] font-semibold mt-4">Shipping address:</div>
      <div className="mt-2">
        <div className="text-[14px] font-medium text-[#545454]">City</div>
        <Input
          name="city"
          className="w-full h-14 p-4 border-[#9F9F9F] mt-2 text-[14px] font-normal"
          placeholder="City"
          value={user.city}
          errorMsg={errors.city}
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
          className="w-full h-14 p-4 border-[#9F9F9F] mt-2 text-[14px] font-normal"
          placeholder="Address"
          value={user.address}
          errorMsg={errors.address}
          onChange={e => handleChange('address', e.target.value)}
          required
        />
      </div>
      <div className="mt-16 flex gap-6 xl:justify-end">
        <Button
          className="min-h-16 flex-1 max-w-[150px]"
          onClick={goToPrevPage}
          type="button"
        >
          Back
        </Button>
        <Button
          className="min-h-16 flex-1 max-w-[150px]"
          variant="primary"
          type="submit"
        >
          Next
        </Button>
      </div>
    </form>
  );
};
