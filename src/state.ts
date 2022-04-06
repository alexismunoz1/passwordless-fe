const API_BASE_URL = "https://passwordless-iota.vercel.app";

export const state = {
   data: {},

   getState() {
      return this.data;
   },

   setState(newState: any) {
      this.data = newState;
   },

   async testApi() {
      const res = await fetch(`${API_BASE_URL}/api/test`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      });

      return res.json();
   },

   async findOrCreateUser(email: string) {
      const res = await fetch(`${API_BASE_URL}/api/auth`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            email,
         }),
      });

      try {
         return await res.json();
      } catch (error) {
         console.log(error);
      }
   },
};
