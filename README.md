# Sistema de Consultas - Mobile

App React Native (Expo) para login de médico e paciente e agendamento de consultas, integrado ao backend Spring Boot [backend-consultas](https://github.com/Sara-Barbosa-Silva/backend-consultas).

## Deploy

### Backend
Hospedado no Render: https://backend-consultas-sara.onrender.com

- GET /health → {"status":"UP"}
- GET /medicos → lista de médicos
- GET /pacientes → lista de pacientes

> O serviço dorme após 15 min de inatividade (free tier).
> A primeira requisição pode levar até 60 segundos.

---

### Frontend - APK Android

Build gerado com EAS Build (perfil `preview`).

- EAS projectId: `4473acbb-7de4-4153-acdc-517394b87f51`
- Build: https://expo.dev/accounts/sara.barosa_23/projects/sistema-consultas-mobile/builds/8e3e7a07-b466-4359-af3e-5a6cda114ec9

1. Escaneie o QR Code abaixo **ou** baixe pelo link do Expo.
2. Permita instalação de fontes desconhecidas apenas para o instalador.
3. Instale e abra o app.

### QR Code do build (Expo Dashboard / EAS)

![QR Code EAS Build](./docs/qrcode-eas-build.png)

> Este QR é o da página do build em expo.dev - não o do `npx expo start`.

### Credenciais de teste

| Perfil | Campo | Valor |
|---|---|---|
| Médico | CRM | 789456 |
| Paciente | CPF | 12345678901 |
