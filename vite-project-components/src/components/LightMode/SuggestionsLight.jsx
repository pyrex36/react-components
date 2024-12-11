import React from "react";

const Suggestions = () => {
  return (
    <div className="font-['SF_Compact_Display_Medium'] font-bold bg-white text-gray-900 p-4 rounded-lg max-w-sm mx-auto shadow-lg">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-4">You might like</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/16a6/12ee/d2ba2a61114ee6dbdd48253fd9de078b?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RvhPpjtBeR92OzSmqAY9H9Wwu-c7IZ3zSceBWbzijZG3QSWHEpIWL8HpKJwk4LIYhjJa~yEMGVR5x6yPLGrmVwgFgmD1CdgtcbV3YzALrFEhaWspZW~1iRjwST-4u42l3lAkrk-Xxm4J2XL99wKM2fwnaiimmkPh9TozU8c2XVmPtbCTElnEct2GDCqqvexIM4HsWrbHedvR7vsASeIMtmYY-uCTc272cRfGxa1tPRlGKYd9ZrZ1Iom0CZNkdRSwxC03kuCbp5bz70VvWgTGDxCbMpBoECC-Exzbrg14eeNuNAqPIo7jy8EYfohUfK3Fp0bP6ZtUYNOjNtuxHQbN~w__"
            alt="Bessie Cooper"
          />
          <div className="flex-1">
            <p className="font-semibold">Bessie Cooper</p>
            <p className="text-gray-600">@alessandroveronezi</p>
          </div>
          <button className="items-center bg-transparent ml-auto px-4 py-2 h-9 w-24 bg-blue-500 hover:bg-blue-500 text-white text-sm font-semibold hover:text-white border border-blue-500 rounded-full">
            Follow
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/c832/668e/a2483d22124deffdce1f99bb68cbad49?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zxr8RGbzyE86TdfDWkiykw1a6RnVHqdwEqF9RXMwISWBuwZg1CfI0sw5jxlX2VyNWcbDpoJoYgDuvlW8VxXgvJpVWRqz4bkqPSFYoMOZEFzE3esOOA~fTngq47cWOJ4WdarzF8g6YSNIxY6pkxvX-HTlJP8IgRAmNiY5-DkHrDUWfpNzlcNG-pXR1VaZKdXNcXDP~ivUOoLrp5IqjcmFmj038qBmuVU2zLSg9FWMv3KOy7JfuYYaI39kkkKMIyPhZ4uvnkGJXel48bVt7CSxJlg3dRMbf8tBHB34Nuunszu51TgL5FllR77ByeF6Z3kYDD6hIrGCvIyLtGaBQzrxwQ__"
            alt="Jenny Wilson"
          />
          <div className="flex-1">
            <p className="font-semibold">Jenny Wilson</p>
            <p className="text-gray-600">@gabrielcantarin</p>
          </div>
          <button className="items-center bg-transparent ml-auto px-4 py-2 h-9 w-24 bg-blue-500 hover:bg-blue-500 text-white text-sm font-semibold hover:text-white border border-blue-500 rounded-full">
            Follow
          </button>
        </div>
      </div>
      <button className="mt-4 text-blue-500">Show more</button>
    </div>
  );
};

export default Suggestions;
