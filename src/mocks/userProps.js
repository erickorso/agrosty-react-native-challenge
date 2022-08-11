export const userPropsMock = {
  navigation: {},
  route: {
    key: "Travels-hU4OXei6RAccq6BN09Uk5",
    name: "Travels",
    params: {
      user: {
        data: {
          usuario: {
            id: 117,
            nombre: "Joaquín Alcaraz",
            rol: "transportista",
            tyc_aceptado_el: "2022-04-06 16:00:15",
          },
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjExNywiaWF0IjoxNjYwMTU2NTc0LCJyb2wiOiJ0cmFuc3BvcnRpc3RhIiwidmVyaWZ5IjoiMzFmMTczYjQtNjU4NC00YzU3LWJjNzctODk1ZmRlMjM4YTYwIn0.qq8BViFnu9Ff8_LhnNaUVr0j2RfxJZ1x82puMHLELOQ",
        },
        status: 200,
        statusText: "",
        headers: {
          "content-length": "342",
          "content-type": "application/json; charset=utf-8",
        },
        config: {
          transitional: {
            silentJSONParsing: true,
            forcedJSONParsing: true,
            clarifyTimeoutError: false,
          },
          transformRequest: [null],
          transformResponse: [null],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: {
            FormData: null,
          },
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          method: "post",
          url: "https://testing-1.api.encamino.ar/auth/login",
          data: '{"dni":"39122716","password":"123456"}',
        },
        request: {},
      },
    },
  },
};
