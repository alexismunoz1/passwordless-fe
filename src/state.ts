const API_BASE_URL = "https://passwordless-iota.vercel.app/api";

export const state = {
   data: {
      email: "",
   },

   getState() {
      return this.data;
   },

   setState(newState: any) {
      this.data = newState;
   },

   async testApi() {
      const res = await fetch(`${API_BASE_URL}/test`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      });

      return await res.json();
   },

   async findOrCreateUser(email: string): Promise<any> {
      const res = await fetch(`${API_BASE_URL}/auth`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            email,
         }),
      });

      this.setState({
         email,
      });

      try {
         return await res.json();
      } catch (error) {
         console.log(error);
      }
   },

   async login(email: string, code: string): Promise<any> {
      const res = await fetch(`${API_BASE_URL}/auth/token`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            email,
            code,
         }),
      });

      try {
         return await res.json();
      } catch (error) {
         console.log(error);
      }
   },
};
