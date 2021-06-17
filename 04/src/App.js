/** @format */

import logo from "./logo.svg"
import "./App.scss"
import React, { useEffect, useRef, useState } from "react"
import { TweenLite } from "gsap"

import { Power3 } from "gsap/gsap-core"
import { Power0 } from "gsap/gsap-core"

const testimonials = [
	{
		name: "Joe Rogan",
		title: "Creative Director",
		image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
		quote: "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
	},
	{
		name: "Elvis",
		title: "Director",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVK1QLRrbr0PcOpMLYKq2m-QktqL_G7Tt9JyA5dPaCPIlrBte60PKuG6m8ORGSSeK86wk&usqp=CAU",
		quote: "The rebranding has really helped our business. Definitely worth the investment.",
	},
	{
		name: "Sophia",
		title: "Customer",
		image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgaGBcYGBgYHBgbGx0eGB0aGhgYHSggHiAlHRgYITEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0mICYtLS0tLS8tLS0tLS0tLy0tLS0tLy0tLS8tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xAA+EAABAwIEAwYFAgUEAgIDAQABAgMRACEEEjFBBVFhBhMicYGRMqGxwfBC0QcUI1LhM2Jy8RWCkrJDY7MW/8QAGwEAAgMBAQEAAAAAAAAAAAAAAwQBAgUABgf/xAAzEQABAwIEBAQGAwADAQEAAAABAAIRAyEEEjFBUWGR8HGBobEFEyLB0eEUMvEjQmKCBv/aAAwDAQACEQMRAD8AC7x2JVZSuo/I0ofA4WJHnJ/blW7a1E51WJ25dK3D94T9LmqUaRygvAmNtPAap972ZobMTpuf9RxbhJAtY0BgsCmc9yRbpznz/emajb0qPDC0edFfXZToku4pmthi/FMy6REdiJ8Z2stHEgJKidDefYaedbYQhQhIsNLR8qBxiVqlEpKTIUnKfENYmbaiiuBoU2IUsq1yzcgSIBO561l4rGvAiQL2A1A8Ii/7TeCw1NriaYOl3G8m+p36JiRby3rCoCiQkKEHetcGAFTAJQYv8jHp8qxRgH1D/ZaTsQGbX4Ir+UISFXJiTbpoKxhchU6yYvOhkfL60S7jSTGxn2PKKXzC1ciAfUeE/LL7VvMY1rMo4LLY6o4y/j37J4/iCpJiwF50uL2FSsvggKH6hrSv+fAQZ5QfW1b8Jw3dttBRMFYRc85OpvtU1CdkoaAYPqEAJhieJBtClEFWUEkjQQCYHM2NqrnYVtxruSlsZVYZBck+KSSpKrWJMqJ9KsfaExhXUNkBakFKNPiUIGvnSrAcTHfLwwSlIaQ2mbmcqYgRYQT8+lUc5zWSTPcc97IDWte+A3vX7bEJl2xxRGGIbPjUtCQZHhzKAJJNrAmjuHvIW/iSIlJbSenhzX2/VNc9/iVx7uW2kN5c/eJWZEgZDKbeYpXwbt60lDhdbczPrK3LSkkjL4UzdISkC5G9dTqVXsD8vGw8eJ21QqlNjXlubTvZXztNxDOpvDpI/rrSiSdWyQVwNfEYTtuaa8UxTaELzKSC2BMkeHlI20OvKuLp7TLQpeKUFLeclKJgJQnQDwkFJi0WEE6zNSrxBcSXcQ6glv42gtpAEGyUJkAgiBNyTPIUXM5sZo5mfQD0kx+AFoJ79/sumYTHrVg0rQoNBZUUrWJCE5zlkEj9FqqeK7T4HBhfdkvPKlS1JvmVuVLOgnlO1UPjnax7EqhZIbFglOwFrcqN4P2iQyVrSlolWiVAFUiBJJAEQNOdMNLmjST3uShOosd/Y291YMKhzETjsa6vDspAAROXvASCQI8WUwLRKoqr9te1SsWvI3KcOg+BOmY6ZiPeBtNB9oOKLxSy444Znwog5Uj/AGmTFStcEcKQ6w0rKbpUpQUbC8EJCeZ0kc6tn4998lRtGDJ20jTvojuzuEQhtffuLT3qAA22CVrBmUkGw31B1FWSP6aXHE/y2FR8Oa6pSLeGwzGCBvIpPwbHN4R4rxDK0rKQUlpxKyTpBDhiDe45GKU9oOKP47EQlE3VkZbBPUk2kqMSSaq2qDNoA3MR1BKk0zm79o/KeYDiicfj2UKlGGbUVIaj41J0Uv8A3K3kmACN660hsk5laxYcv81yvsXhcLhVKexK1F9IIDAQSUyBsLFRuL6W0pnxH+IOIP8AoYYAWAzErWf/AETba9zFEa4ESgvYS6B3xVyxiDmufCBJOn5tQTz+aO7Gbkf068+XlVId4+oqDnEMQgBNxh24WsnYKAOVHqZ61Hju2GKxAKcMkMt/qXmGaNACs2TPJMnlUAIxLoHLorc5xD+WJQ2hT+LdMwNE9Vq/SkbDWmDDwwjC3sW8C4o+JUb7IbGpAmwHOqn2YcxbTPdNtBalqKi85mSkSAAL+NcEC5CR5044T2d/qBzEq790fqUISkckI0FFyyEtMOAJ/f2HeqEQhx8qfdaLbZ/0mzrl3UuP1Hlt8634qo90W0KgqEEnkdvI71Z8YtOVYUQBtpaqPxXiAWvusP4psVKsAenM0u7CMq1G1KkyB5Hy07unsPjX0mmmyCCennr2eKqWLcySFfFoBzPPypctpR8RMz8qt/8A/nU5szrkEjU6yJn0ukR8zSfGsFtYBIumQRyNh7/mtPhhbcq7KzK1gbpMlV70SkA6a71GWsxtbrt6Ua02CRAgAWH3PU1R5k2R6Un6URhmzEnXptUiMUeR1qaYTmIgAXkxuRJ5aUpc4gSZQ2pSdiTr1HSoADRdaRdkYCx0eUz5QT5xCuC3gT9KY4XCAC48VLuHMaE89DTtZiOdKYmuKTZVfh1DMS4jw/K0dbMGBQbTDgBMQOtp/wAUybVPtRKcPmN+Vecq/EaxdkgRPitR+Epl+ck24GPa/RKMPh5OUA3k/t8relSjDlJFElKm3AsfCbKHKLAj3+lFutyJG/1pOvUJOeZnX9pilUDf+MCANO+/ErxvQVChjI8VDRxMK/5Ikp9wVe3Wt8MdqlfdyKQTGUmDOxOhv6+1alCuAY5JXEMBAJ2K0xTwRCyR4SM07JUYP7+lbYsgQq0DVU6A+X/rQvaHGobUoEZknDqURlPihYSADsSVR1npWvEMXh/5WH1AIWnWZmwUIjU29xRaddxh0SCYjf8AJI1gDdKmo2HXFv8ABPp6lTcbhDd1ZVKICYiSqRETqZj3orij0JQBoHWok75htpzqg9rOJvBWFfCc7LaUgLF5UCfERsYjXekWP7UuvueIqylRyJkeGQUp0Ak3maZfQqVXNgwLz1iOiz3Yxn1EiTaPeepVs7edqMrzPcKDikZzAAUAqyZ8xeOtIme1rjbiy+olTiDmDMJKFGwTMwCMqSd9jJmlKENHMC2EkJGiirX9YJ000oBrAlSkpTfMoJB11NvIH7U1Tw7WMDEg/EGo4u70/CLwr6nVwlOdxxWVKlkKNxEBJtMmZr1eJfWlGHzOKS2PC3B8NyDYCd99KsHBOA4nCqedcbyd004sBQ/1Ag/oMefIxXS+HYJvvnnm2wkLLawRAJscyiIkDQzvmphuSQXAHeTshOcWiwXGsRwN9KErUy4mbwUKBMTJgiYtTHF9knBhFulDiXG1SpBSAEtgSVnfUi2tdx4qylaErUAQAoEEfpWkg3PpSnA4BQGIbWrOs5kkq1UgthLZ5XCkg9UGudWmbLj9UQvnWxJHzrxTdjU2Iw5QtTSviQVpPmmQfmmp8Ldsm1rT8/vUNE2UPdlEpbU6SQgmSPEBE2uCdPSolJr0q8MRvM+QIj51Csp8NispkiehmD+x6immBxbCUkw6lcKAcbUM3iEQsKIBBvcQfOkVe1VzcwhSDCdOPhKQT3hJutQXEzoAQbC+kcqZ8EfBZUtQW6EKA7kLKEqF1eIhJKr2jprelPABncDZVlzWBIBF7QQbftVhxKXMMSy6O5Kx4HhoQDIMpi4PP12odVx/qDfXW8T16XV2MBEu08LTC3d42/mSFobwjZiVBkSlOn6Ug/mlWjgnF+Fspk4lLixJzrSZ5wkZbeVUJhkLIaexf9JqwyHOkA/2gG9wDYH0qDFcObZgOhxWb4HWikocTzSTIMDVOoqW1oOV2u0A369SJMITsMHNzCwHfM+C6hif4g4BOUhal2JCUIM8hOaANVWpO9/EEOZlMsLAETIzEm428KRAEyaqHBmsPmKkd64QPhU3h4E6EBxapNjoDWvaEOBKCpDhQ4P6ZW6kgjo20EpAuNqL8wAxN0IULWCcYjir2KUAVKI/sYUVRzzugBKR0ncUz4UWcP4nXmQqJyJIWU7/ABAEk/gFc2XiF2TnUQLASYHpRhH9IHvUi5lECeYMj1FFFTdV+SRYGyvHE+0aH1BOHSSsWzKhKUg6lROnPXlVRxuKzLMq7xU/CmAkeZpQtSYgCOdyQSN76fOpMJhcxJhWUch8R5Am1QajjqmaLQwwAO+95HJNcGnN4lqFtEjT5a09YebPgaCnFalItBnVROn16UlwnCl6k910nOr1O3pRmEx/cqy4dOddxESBPM/aiMtc/vy3T1VtRlIkWIvcxJ9/bz2acRaQtbaVIBXlsiZSmDqbCRJ3FQuYJyTY0z4VwcNQ48qXFA51X0N4gcoj3otziDQMJTmHO/7U3kG9u+5WNhPi5oOOUAiLkzrJ9OHHgEuTiFZ0pSJE+wp40SYJpZhGCCRpofbT6n3pmxiouoAAGCeR5H3F9685iqf8iqG7CPzHtK9lhWfxmfVqe/RFYcZev5P2oxhzc7UEkTHp61IVDQ6GQR00rLxtOk1+VvLTaO/sm2yUU4EqBSrQi/0t1FCYJZSCgmSDqf8A7eR185oZtK0CTmWgQCRJKOpGqh5X86Pb4YH21LbcCSEnI4IKfUm0cxSj4acux3589/EdJQnvYz6jqNuXLj7cYK2aX/VKQRYSZ+UfOoe0CHVOtMNlBUQXcxIsUhUCB6H06VSnOHY7P3ysQlJTmTIkGFEg6SDoIHQWG8yXXEqUvvVKWsAKXoojWJHwjomLAVuYf4Q9zmkRAGsHX08lgYj4o1wI53vt9rap3huHsYZpxt91b7qikqJNhkOYCJJSnNKom8DlXPe0PFe9Uptqe6ToCSdN/r7037SvFvDhBAzvG3PKLk67kpHvVUyhIKZvF+R6D5e1ajsOyicoudyeOlthCzmYh1UEgAN2jcc+XDr4Tp4o8hrukuHuyPh2vrE/agELvN7X9ederVOpMbUy4VwxbgMAAHSdzzqFJcBEneOuia4HhgUMO9JDTqiy4QCShf6Sq9pBHTwmuodkuE4TE4YLDQS83DTyZuFogKE7EKAUk8wK5l2TuXMG5IRiYCSBbOkykp6iZBFdJ7M4TENoK3EFKkhKXm/CoP5LJxKcpuuAmZuch3IqCcygMLGyefvb0hWh/CKfw62FlKnQlSQsgQ4CnLmIHw5gogjYyeVedhm0/wAjh1J/U02FAmYKUBBHyPvU2EWDBiBrPMa1qeJsodypsFC4Atm0EAaSN946VBpu0AlQ2q0CXWU7rH9JSDJy/DJ1AuPpFFOFPhIiVD5J/YqFAdp8UGcG7iCcuVBIBIBJNgkX+InQVROE9qngUlzKEpHiISScsSq5JIkhOnIUSnQdVaS3ZCq4htFwDt9O/Nc37QcPcVi8UsRH8w//AP0V+1QYh3uWgjwlRJvFxvTjCvh9eULCTmWTmm6iSq3zJoReGSD44UTJg76aTVJYTlm4g/hP/Kqj6m6GR52nw1t6KswSb1O9h4QDvJ9qbutNhedVhy+gFL8c+HDpAA0T96Lkyi6VJlwymb38kvTUqiD7D6V6ls7Csyk7VLG2VisQ8QQRqIjpGldM4LxxGLZyYgNl1BBAX+qNFidwbG+lc1QzB8Up62+lS4VZQtK78wT/AJoVSi17mucLg25fnwXCs4NLWHUde+IuF1/iHZ9jFsoAQGFNpTlKQEwATIJH6TAM6iZqncUS7h3FtIl5CyVZHAFIUkDWCfimfGCDYTTxXG5w58RQ6hINtzE25g6Qeda4R8OtDvEtyBtLc9Dl5zOnOs+nhqwpudUb/UkEHSNcwO43sQRdPVcRRD2NY7+8EEazplIH9TtBEEqiYn+XUq6VsncJIeQPuPc0OtDenfJIGkocTHoK6E92Kw6kRBSspmbanY2qn8T7OqbORWcLJt4LEf8AqTN6Yw9elVbNN0+JuPv7pfE0KtJ+Wo3LzAsfAgR7FIn9SQoKBOoBF/JV6gmjHsIlOiwTyKVAn5UItJBimEIGez90dw9xsEFxlbl9ArKD7JP4asg7TNz4sIpCQABlgxfqkdB51V8JxJ1qQhZAOoBO3lU3/ks3+op2biUunQ62XOvnVrZYnvxVMzmvzNHr9k8xPFWVZp7wQbpsn3gya8wvaFhseBpVv+KRSbCN4dRuXv8A4hRPnBEVZ8A7g2bpYzuGMuctjXcSTH1q9J7mnXzN1fF4k1mFrxPIWnz4KccYxGIhKGEmRpMxFpJJA5QJm2le40KQUpXiWW1BIlMxB/N6LxrePdSUpU0wCPhbBzf/ACsfYUkX2MEy6+kKN/Ebnr7zTBDtpPPRY+dh1LW8ozHxKvDwAkk3tAAOn/f1oPGBxMOj4R8aOaefmPpNGEJWCkgZo+E/Xy60ThcKqMpMxudh199a86+o46Wv9XGOH7C+hnWCbbHgR3+QoMP4j/S8YIkARpFom1G4XuYJcfCTeZ8JTG2VQ9JPPyorhvD1NFSgicpnJMAzMlJ0B3Mc+dNSlt3K4tsRtmA9D1oFOm6r9LZ5G0/iUliMYaLT9Q8tPLf1jwSjCrzrLjKgllPw5YJcJ1KyoSBaBEG3WgOI4xpQVIKlG4SkkJHVQBynT5084hgFrRlahCLWAj5DWteFcAQkKBCr6lUeLrWxhsJQosObl424nU97WXmq2KrVasiR562317i9lQXGHXVk5SSTZI0noKmPB3ULSlacpUQNQSPQdK6Rg+GoYByA3vJ18pqsdpklCVvqMZElQ1uSIGv5atWniQTYCAs/GtflDBvw0/a5b2txAcxKwFeFEISfLf3mhMRwxwwUplAEZtbbn11odRUrxK1P3NWPs3ilJBBbLiAZjTQaTBOwtSjRmlxTxf8ALAbsLd7630PBKjwgrTKRcD0o3giSgFBkHlt1irjhA2UA5SmdoqHFcKSfGkiTrznnFS4NN03h3tnNYx3PGecdEi7gDxFWXIQpBH6VJuCI9Paut9j+0LeKbCDCX0JBWnSQf1joTqNq5+3wvSfz2oTF5sKQ+0VpUhX+pqkKOyhug2GXbpArPfiabn/LEzwj178pWhVofT8xosd5HTVdAx/H0yptm5BInYEGDHXX2qs8UwiiAAvPCpy8hzH396X4btE28VupCW3j4ltrWEIJgArSu4I30nW1J3e2mRSlJOdd48IDY/4J3551SeQrap1GU2B47K8dUpYiriHUzsfKDvr+7WGqs3F23FoSHQpwADKmxi8ScxgRewuaF4vxrCtsraRGZaVoJ3BCZmK57xPtDiX/APUcVB/SDA5bUrbVefP52oD8VIhojj3+ynKXw4Ay90xp/pn0A81O2+pIkfqmRz604wmMS6tI0jQKMz6xrrSM3A6TP2rdkQoG8Ttr6UsJFwtZlTKeIOo4jgrS9hQQBktBj4RMf3H3pfh+GIUrfSLGwMU2YczpzBN43IH4bU3f4VgzCm8S5mOWU5EgAkD9e4E38qrnDIJkzyJHpp7a3smsbh6L6Tf47oNzAbFjfWNQdfHXc1Zxnu7FKYNh1AtIoR0ZiZJgbSPtXWOBfw9ZUkLdUHbzZSgOYgAA3Ea0O/2NwXerjMAhSklBVawCrx4ouLTQB8RY5xpiTHAQPUysuphMgzz1ufaOi5V/48qT4ZzDa0RQrqcoyk9fqCK6Lxjs8GAQgoSo3CgpQgf8Lk7771SOLNZiSD8MAbSI1PWSR6U61stzAIVLEMc7KCecjQ+N5TThz4caBmTdJ0m3wn2sP+NM8GLCDuJ9L/tVe7Ou5c6CB4spF9CJv7E/KrdhsMpCJEHNt5H/ACK0KRzUvqWbjCKdQ5fH0hEYXi7qZKjmHI/k1vxRaXEpLyIFjrJAN5SfP6UudT4VbESfXYept60Izjl/Cfh3i1ZFbANLxVpNAcNxaft1HmncD8Tqim6nWcXMOgJkDreNNHW2BlEP8IcMlh8OKgpDa3CQu0/q0V/tUYPOqrjeFOizrK21Dcp8J5Tl+E9RY/Om7OMcbWpSZgnRWhPKP2otjiwWcpJHQmU+XlTbcO82cfP9be3BRUxOQZ6TZ4iTI84uPG40PFUZ1opMEfQ/SsYZUtWVAKlHQC556VZe0mDcQrOmwOhTaI1Fvr1pIeIuSM0L/wCaQfLxRmHoaXeC0wnaFVtVgeNCocO1JgrSg/7pA9wDV3wuN7lKf5dlpaiJUtbiFLUo7yCB6VSVLSskq8JPISPaZrbDNpnVsgG4XmE+oE786sx5bcLqtIVBDtO+auX87jFJOZaGwc3wQnKd5O+p0m4E70n4ri8OtSd8qQnMqJMTcwiN6BdyqATlwyeudX7/AGoR1lCTBWlXVMqHvF6v8wxx8UP+KJnTwt14rrWLCXFd38C0wpCgb8retiPKoMNjX2lht9TZ/tUokEjqE7egpxiOzJdgrJayn4hdVwDYXmK8w/A0d6VquO8zJBkRG/MTAkTFqyqIZVkB2nofELaxeILTZsydZsRG7YuRptoE74MtbuHBe0MjLGXMATBP+0iLfWmiUDTQD5ela5zFoJPpFSFgkUzTp5AS06lZT6mYw+8BelMiEkg8x9aJA561BhZEgCTapEhRVpY/n2+dS6RquYAbhSRVI/ioCMIVAwBE/Mj5ir043b8muc/xRwqizOYgKIHsSSPp86JSs9RVEt6e65vwNkOZxcAnlOn+DV77N9l23ErcUpUifhVAFtMoHQGx3qpcGw8WbCtYJ5m3tVqwfF1YdtTaUJzqn+opwDLIA8KYPLnQ8a2qaeWifqkaGLb7j7nknWUmEZSJ1S3NNyjJI3J1N96KwDRUQSogb6feoE4NxasxAV6mKb4bCRNhPSw+dNw2CCY75pbF4p4gUhJPAk/v0RxwSgMyPGnmPof8Ug7SPqGGcCFRJBMAKyxqDIMTB+VM8RwlSrjEpTzGkeoNV/imEQElsv5yEmAnQqMwJ8xWWcHTzioHSR/5N/GbT4dFt0nYgYYireRGzSCb7a8Y1uVQ1rKhc/n4KFoxKACQqxFiDUOJF8wFqfyyJCw5vCjcqOsmvRzqFZT4dBJjyqNDhtv0onh5+Ly8psd/ODUIREJOusddI/OdXcJaFUG5CuHZ3Bh9kKXok5RFtL396tnZ0sYeCZTmjMcwzHKrL4c5FjBJ1tprZP8Aw+4UXE5cxAVB0BAuBNyNpt0FN+0HZ9bRhslRmAtQOUjeSJAuSPSsv5QfXcyo/wCk3AEj0iOfPUSm8Ri6TMM35Yh4sSYI6zPAcrgwQrTh+1mG70Q6oAzKTlKSqLQUkmYAEDWedVDth2gw6sxw6lpcUslwqSRMAIgbA2FiNudVfH8OWkhAufjJBhRMmSLHz21qXCYtvCtr/puOPKsCu3d3BzBJBBOuwPpWlT+H06VQPZNtp9+P+LH/AJnzWlhIM98TCiZ7UOZEpLTZUBGcqVJuSCRMSJpVicYlafgQCLlQmTbQ7R6etQMhGb+pnSCdRcieYig+IBOc5DKdv2v5fOm3EAaKadFmawjee90Tw9ae8QT8OYFXkCCR8q7OnDJZysm/hCkkySQrWIF4II8orhmH5k8j5wZr6JeaS43hVxoAUxaAUpkRyNvIgVT5twNl2JohzTGv70Vf4zwdGVSwb2EdStIEddRVUxmA7sEi8af9VfscwEpWomQRJTzP6YvrpSBzhjjngVYSDqSSNDoJozHSJKxKwcx7WgQOGp1/A6qpOYBSEKUsixSMvVQzW9PvS1QEkkTP5ar32gwCSlUWzGdRr+r1v6RSFrgCiMyFJkbGr3iQitxDQfqN1vw9xC0hCkyP7Tf1k+dL+MdlEKzLazAi+X4hE+9MsDhVBQEQoSVquQBrcc9o8qb4HH5FSbCSOZ6GOccutQ9ge02uqU61SnVBY6GnzH+c1yR/DlJIPyrVpoH9Ucq6n2q4S1jBnZKO+QlQUiyQ4djMSSDv6b1zF7ClJIIgixG4I1B6is1ekpvDxLSh3GyNa1CDUzbpFh/371OMSjdpJPO4+QtUq673w3GLQwhLgK3bBI3y6Z1cgL+cetGNJvJ12rwNASYud7SfajMOgG+9J4bDNp5iBqST5kmFStWLjbyRTOD8QM6DT86RTMNgihcOnQ0Uy7JNrD5n/FMuKim0ALRLIBzdL1IRXi7kj8/LV66qL+VVlFDQNFE+DciZrnXbt7M2lu5E3nnYzPv710Nwk25+lVT+ImBCcIpaEyUKSfY0SiQHCVR3HZcx4a1LsmQkCYvrp9I9qbKWQcyAmeZSFfWlvCMbMhQ2sdP+9BR6lwLUy4XgrZwuLpvBy36+qx3i+J07yOgCR9ql4U44sqzFZ3zG48v+qWPrJo7gvEFoWEZgAq0qJIG8RfU/WhvAYwuaBxV64+ZTLb+Rj8dDZPi1nSRMwLiI9p61U8Q2oKUnLBnX1q74rEtt5VFRCiD4RuTuRH0pU3hgo5znMm2f9JubWtYG9Z38/KwvLTHgbEeURz+9kxhKX0/LfGtjMf75AzqFzXjeHIcUYvoocvy1AhXgyjf5V0btB2fXiVIS3/qxrFsvU7ybC+xqj8b4G9hlAPNlAUfCdjGoB9aJhcYysBlME7TdZGNwjqLyDcbHvglQSZtW6gmt1gjlUITTQSiPYdABj5/apHcMFXGpoPBsrJkIJGlgTE1deyfZsuLAURmmyREcvFNGdXY2mcwnkOXt47KtLB1ar/8Aj21J0A5/jdP+w+Gw7aPGt5twpBgJUpIIgyqAY0k6CK6UpkOpMKlJEAj8sarvDcH3Sw28hIWEnu3LJKgkgFJP6hB5aGi2cA4hqywFBSlJ7uUiNUpP90CBfbavOO+JUXV2OLiJ00IAM8BYWG9pNk2/CtY0jfeLzznf32jc0LtpwYNuqUhXiDSUoAV4gSpZKwkESAIEi8zVPcxyxCHx3yb7QvznX3vVz7Y8JTjCt1KQl9tCRkCsqiQSVQDaPFmnnVHYbfbghZRl0S4oiLxca5SfpXpmExfVYJpMAsQRsOED/qRJHQQVqnh4WM7SyASYS5E+429KCxeFUn4k5TMW0NFOuPJSCsHJeCPh9P8ANCYjFZkAaXJ/LVa0XTNMPmZkdfW0+YU3BsLmeaCoKStIUCYsVAGTtX0S1hDCIuEpA8o/PlXBux4z4zDj/wDYkmdIT4vtX0Rhpyp8h9KWrGCIRgzNqljmGBrUNKBn508Q1OtLOMHLp0n8/Naqx5cYQK1FrGl6QYvBDJG+3X8NL8Hg4gEXBkGmvaFRCEkfEIFtuelR8FeSsT+oWNOBxLJKxHUWfPy8AO/FDcZw/dpQoWzKyqOsSkgGN7x6GqNjOIFpwpWjTQxaCAa6Nx1pJQFH9Gk6evyv0qpBlJN/ECb5hOtL1cUaLAbkzxjpvpey0sLg2VqxbAAjWJ8ztyMqus49IUnISCLj3Oh96ZY/EYfEJ8bY7zQkJjXfMOo0NVIQh1RGiSYHrFG4fFFS0iDBULTamjTvKD8otEsJEjjda47C4ZKy24O6SvKUupBV3ZGpKQfElQ1GoImKJX2ewDfhxGMdSuJEYeUqSfhUlSSoKSRvPoIobHL/AJgEZQDqmAbdPL9qa9nuELSzDjaFHMcuZQlKeV9pk+tJ1mHMS3daeHrtFMNqajie5XWm8OpQgXjrU7bakgJi9eoXln0o9iFAE7T86DmtKuGDNG6kbRlA351Mkj3v6m9RPKAuowPrUgQCKojrEugZjMda2xCZHsfYzUCGrgDQUQswBXKV4ymBznf7Uv7TYcrwryQQCUEydov9qPQPat1AERUgwZUESIXzyGlaJ8XI9DTDDqzWMzpHX/ujO1Kf5PFOt5YClZm+QSq/PY29KV8PcXmCnDlCTKROpO/nWiYLQQlTimYVxLG+W5KaDgzytEG/OB9ah/8ABqKilbiEn+3frJj6TRKsWtVkk33r1GHA6mgFtSf7R4D8yg1P/wBK9rYbTGbmZjy08yCP/JViwS0ABIGbKPE4YBtyo1SEqQQkifiG5tz9Jqofy63HEpBJEyRe0b1YGmSEhKF+Im5gz+WpCrg6bREkzbr3yA4LQ+EY6vXIe/xkwAIuRoZAG5sOVgnnZ7DAZiq6iBrt95t7Ec61xXBw44pxQbIyKQgKTmsYKiQbeKNv7R1qXgzCkyLybqPplA9AAPSisU6QcsDp6aV5fFUTTruYz+xgAcB3ppqStmrUzuLiRGpO3gPTouXvdiG+/wAi1KDQazSnKFqOYi0gjKIJ00KedCtdmGApaEgqSPhKoKjBEgwLQZFq6SvDlTB1Jk339Pc0o4nw4t5HAIIkHzNp8zAn0puj8SqCoJJIiI4/s6K38Gk5hAjNmIHCRp5TE8dCq9heHZUOtoIAgqB0ug3AEbyPao8BiFMuAg5FoV1E7R9QfOmnCk5lySoq1M6SI32iRb70fxvhxdJAi4Avrt4gf35bVtnFRZwm5LuGw0i4LT9U+NkT4ZjWUKjsM+Az/qfGczT5gxwmLp3wst4hCXSlJdEgqKZUk6wCdPpVd7Q9plsFLDBTCbFUAxFgjkPbap+BtuYYpChG0TqB+TRHHWGMQgqKAVgAgiAT67+tZ2FwtJmMAc3PSJ+n/sAdLg/vmNYxvi4bRDjRcN972uRI3GvMQQbiadxHiDjqu8gFUeLYn8+1ALSHUKWhXw/EkiSDz/zRz2GKDBBB5GlvFGVIHehOqbFHxHnm9CK9pUw7KbQGCBw28uHgvJU6pqOubn18eO99fFBO4txKA2T4ZtuOXnpt0FJe5QowkgGd7fWpjjSORHI60JiFpUqQLH3pZ2UaLXo0y3aJ3H4V0/hrwpSsajkhKlE/S9d1bAykmqH/AAl4ZlwxdiC4QANwkae8z5RXQW0gC9I13S7wTdEHLJ3WZwB+eVAYxhRWBsTcbQPPyFHOJEjT8/zFbkUIOhEezMIVcxXCZO0VDgOFFskk6iPvVmLIqN8BKR5geZNh86KK7ohKHAUi/PF1Wsc2FIUmLKEelVvjXCsiCUBRSmSoz8JgGVWsIn3q3vMwT0NAYphallMp7txtaVCLlUQCDMRE68hQs4LgXDREZSLQQ0xNlxrEYMFwj+6Y+tCYBpWaYWAk/MbVY3eGOB9IKYiZuLG805a4ZnBgynMAT7/eKdxeLbh3QeBPT/UtgsPVxFP6SNm8xM+WnFIsAyhIlRgmcoFgSATry50P/wCQdR4SMxG9j85qxu8G7ttbiicxQAmbAAxpE60jQymAFZZAj2typTBVi8OubGL8YBgeE9dLRJ/iNJtEs+kSRNtYuJPjFuWsmY7QpGYRWqGFAyFQPznSrA4x1Uy0qRvt9daYYTGFVihU8uvqaRp4wQBOvfValT4eZLoFuf7UiwSeZphhFmADUWCYUYKxB3FMEJiKYYSRKA9ga6AvQK9VXpNeKVBqzjAlQogY09q8aeixrVY5VGu96pTqZmg7qCIKrv8AETgysQwFNgd4gyBbxCCYBIsbSNJ03rlnBsIpxRW4SSLZTICfPrXcnGgoEHcVyrt5wV9hffsZygH+oBKpmfEehFvSnqDpGRZ+Noue2aZgm0/vad/Wy8KwLC5rJobCuSJI8R2qZCrxN+dFNl5UsiyzFYotJJzZREk9KMYwr76WVtuZWxCylQhS7ggdOW1U7tPxIKhtMwBP/IyPoJ96t/YzEOFtJCTdCZsYBy3qIvK1qJq0KLZkh1o5a6c99+YuFdxiiiOtzGvl8qCd4ulbqjPhSQAPW/zqdbhSCq2YAxvFKOG4JLras25GY3BO+o3mKym4Ok2t814uSBPi4Drp5WWrjMW94p0qZiJcf/kcuc8hAN1ZsNCRlKYBMDzP+KG4+4nu1JESUmCZhMAybUwU1IBg+G48wKqH8QsTkQ0lBOZXxAXypgaxoCSBfWK8xSa3E4xon6pvAtIGtpEWC22FwaOFrze56yhuFOkOIAXlz5Vq5nUkDrb2NMeKPobZJagJCoQu6gRFwrrmn2qmIxiZSCDIR8wP2k0tQ+7C0pUru0kmJtGnkbV7Rnw9oe14OkSOOusXJgwCbALCxeOqPqPBbl0PgTfeRwNo0CvGF4n/ADDZQvKFyUpINxym2v1Fadn+JSru1/q0J2P5eqdgwSCttRS6nlumxmOYNH8B4wW1ZpBBsZHPVJ6amj4bBU6Jfk0Og0g7keNumyHXxJruBaLjW+o2EbkTAMyR69Ex3Bk4hspNlDRXzjykCuace4MEryuFSVI3BgpB6GxBium8F4u2W1HODksTIBKdjE6kfMVzvtLjS9iVOEE/pQgaAagrOu505760ZlR7QWEW9kvVLAW1GuvyIuPbz6qlO4TMs5cmX/csD6b0XwzgZdeSnUEiYtM2SmRaVKt6E7Ue5wVwkHuyVLO2hJO1dT/h72W7hCXXUAKIlKTcp/3cpj2vzoVSpAJT2Hc5742j8aq28PwKWWg2gAQAJ52AJ9h8hRYE2NeOKgedeYhWVM77Dmfz5UitBQtv+NaCIyKAnmCkKnprUgO9LsYCcy75spSL6T00t9qYo0qCFy2ze25NJe0KnHWkIYgJztuKdUcvhSc0IABJJG5gX3pu+ARBoHFybDT68xXaLkGbxyJPyivVtCQaIabgR6+9RunQev7fehF0KWskqscQ4SXMQTYJJuZHraveKhDTaG2hMqAgeRuTvsfQ04dAmlnEsB3lsoMGRmJgHTYGrvrF+VrtAhUcKyk5z2D6iZnzmBy7KUJKS0EknS6T8vKoP5I//jbJG5hRv5+UU4xHAz4CshABmGxc/wDsdukVjTyUSlKyACfnesoUXCqQSYiYBIg+RK3alVtSgMjbgxJANrmLgaT3dWB59KAVmbbX6GAOZIAqFGKSlaAoELIMJK8xItNuhVqNKJxaQpaBaBKz6WTPqZ801A/hAXCsGFZQkdBMn1NvYU2YZaTbm6/AG91mtpB1wPZbHi4CsuQx+ogkxvH+BW+I40w2QhIcUuLITIgdSSEgUvxuHJBQCUyPEsGCkcx/uO3vS/E8NSlEItEbqJ6km5JO5605ScH3Nh36IfyQLTPT8JviO0LiSA2wtSpJUkLSqE2uFQQZkwLfCaOGOJBIUZmDmTA9M19NhSzg4Pdid/y9MZ5/kf8AfzpariHMJbAR24ZpuSURgeIIWmQtO4JB0IMGR515huJtrcU0hQK0pzEGRIJix8x9KqmIUW8ElUQ6spgA3KlqKgJGtlfLpWIYKVthtSiuIWoGJSPEsjkSvL70Vpa+8bofyI04D1VzdEDl84oPGtJWiFQZ5Xv+3nQTXFlo1skn9QKoABKoOt7azHrUTXaXDurCAlcEmXCnKgQJMzfblRW2QKlMiypfaHgRwgzJJLSiB1TyHUUgcdUGzCdjMXMcvzrXXsZgWMS3kIDrSzBCpsR8wfaKoPE+wuNYUoYdPfs6pBUkLTO1z449NaaZUB11WPiMAQ7NTHiO/uucY5/N/wAsw/69Le9dI7BOOJRlUvwoTChr4lHMJJ9fYVSv/GuN4lTj2HcbAvBQSArnMRry510Tg4T3UJy53IWQLfEAATz0+tG5q9fM2nA225xp5KTi3EVQMtgqfXrW/CcWQ0ctsqpVbYdeZtbpSzGFMmOiRO8amgcDxTKkqQTOeCdrHlvNd8gP8r+6x6VepmLiZGn+dFeF8UcQjxJzAmCIJABtEjz3qh4p5w9624D8YOfmJOvyp+x2pU3qnMD6fQVX+NcR711SwAAToNLAftWfhcJUpV356TQDfODqZ0IgGbm5md1uYb4iz6L5hLQWuGg3IdfklWKYJkjb8/PKtMIvIl1KhBUhBSNCRm2J6TTDBL8RBvJOvyqbimDzoGUAqAgc/KtKYEJP4lXa3FEf9TBHhEifUJn2PwrSwuTJKRfQgCRI60BxzsstlPeIJWMygpMXSCZSbbRrSns/xb+XcSSDlzeLWYNiI9B7V1d3GJLQX4MhylK80a9I8rTvVKtRzTyKPhnGkSRHnv0vbYgql9m+4SkuuXSEyc0HzttExFJ+JcYhWZiMlwkqAJgG3qLegFWHtbgGC2CiEOLWJA1dJN5SPewpx2R7BIaUHHyFkQpKIIA5KMnWLwdK4VGgF7p4QrvNbEv+p2YkhxNtNB4RtFkZ2N7MltCXXFZlLTmJPxSqCACRKUwNtc20Xuc868FalV+utIueXGStJjAwQFsgHU6/TpQ2IJKvv06VOTWrm1RqrIZaYNbIejWtnk3JMRGs/ms/LrUiGgL61yrBXiG5ua0xLFiUiSLwNT0HWpnXMoKjsCfahn3lhSgCAMpgxpNtuWvytrVSVdrUm42tZw6w0FKW4AhJTqAowpcmwypk33gUQobXJgCedR8N4ehoRKioqcUSTEqcUFKOUW1Ajl6mjizAj50J4nREaQNUn4g9kEkGhGOIJOog/ajOJ3bI9rTVYffSggkxsLEz6CsitiKgqhrb8o7K28Ng6T6Rc6x4z2E4xuOkXtGntM/KqXxfHkuqym2gvU3FuIBdhNv0gwfX8+9Q4PGZExkCrzM/4rd+HYWoJrVW3O3K34WPjPieEoRRY6Y4Xvv5zK6u0jxqUf8AaPQX+pNeYlMzAufrXqTrFZF6G4ZgRCCHQQVo2yAI1m5PM0NxFg5FBP6gRYCRaLev3o+sJojREKhN0q4Tg+6aCd7/AFopCNanWmo5rOxAcahPFaNBwLAErxWGUp1hIjKgKUoX5BCf/sYnlRuAwYC1qB0tBv1P29qlab8RVzAHtJ+pNRY5whBCZBNyYNkze+lxb1o+HDpnaPJUqOtkBuSkfaUl8pbQvIlBPeEA/wBQGPCDoNDJvaOdCusgIytiDAQACQPWPSilpO4159ajaVlczA+JIj3nWKZm6cbhmtowLk8VXuM9qX23UjDrKYtlCQRA5giSSfaIq1cD7VLKVLdAKoSF5ZhJCZsBNryY50pc4c1m7wIGb6z953qfD4UIBA/USTyv/iKvnaGgAdf0hfwyXHNvw24ahMWO0iXBmWm0Jgt3Sq0m2o0/DS7i73C8hW86ps2/0wvMJv8ACEnmK0weEDaQAABew26D5VDieHNqhxaEqVFgqSJJ5DXUc4qzXta6WyD4pWr8PJbJjwj7jh4KJXYNTraXsLjStCkykPJJPuCI8iJoDE9ksa0R/SK06koMxpNtTudKZcY4w42e7bShCG0XifTeBJtzso8hR/CMXinmVJxbwQkmyG5Ssid3Em87gUw3EkRJ6/pZlT4cXAjKbcLqtOcOdVq04AJHwGb2FjB1pHhGltL/AKiFCZICkxpyk89q6JjuLdwCWVOFKVDwAJUCJ8QSV6WnextQuH7WYLFrS2pMrNihxrxTvaCNRtyo38prkiPhpY0svfjHp+1VQ+kKjKQqJiDf8tRTmLSlMlSR5kCrq7wLCqAhhFpiBA9hQTvZLDOElxlObYgmulpukq2Dzu+px8zPqVzHieIStzMgROotc8wBennDeBYzGBCSHEoSBlzWgC0gc/nXQ+Hdm2GSC203YW8I9L7nqaftY5SdUeqYj7UN9YN/oJT1PD2DTIA8/XQdCgOAdkmWCl1wd48ABmV4ssf2zpViIvNA/wDkE846EEUQnEJO4pJxqOMuC0aYptbDSpqjebkciNOhr3vAdK8UaBUxDWW7/CMBKwW868VW9amr/MYNSugrQoBib9CK3KooV3GhCCsgwDtr7HzpfhuNJWSCCmIgHU+1CdiabXBpNymGYSq9pcG2HffDdNHHLUu4i+UpF9VJH3PymvXOIAjwyryBpMpbzkZ8qQJsNfPp71NQl7YYJ9upVGZabpqGI236CSm+FXmIEjXWpsbxNCRCZWYgBN79TpSbCkAlMkCPizJjroZGtDt8VbAUWFtuEGICxE8ioTGhqBh3vIz+n5/1DqVqYE07+X2TTGl3JmSgJUASMxEkkctKpWK4c5lK1kJ1JJNxvrokeQpnxvE8SS0pxDeHUQBAzrVPPKmE7bE1SUdrHM4/mu8Q5siMrSxO4kyb6wRban6DW05LAJ4wCepSdZj65h7jl4TAO9wNfMlJeK8XKnMqFBYTaSPi8t4qXDccQEwVuo/2i49DNN8dwXC4qVNoXhnSdDdpRNxBi3ofSqdj+GuNLKFoKVDkMwPUHcGmQ6bqDRaPpi3VfSSRWyVVlZWemVtWVlZXKFhrXJXlZUQDcqwJWwHKvH5iBe4HoSJ+U1lZUwuC9caSqygD50sxXBhJKDskQekn7j51lZUFXpVn07tP4StvDqz5Y01rZ3DxYi/0rKyoWzTrOe6DwUWJkIUQLhJj0Fa4RUpQTrlE+cfvWVlQUy0yfJD4ZCVZlZRBVMkaxoa3xgIbOQQqwHqQLDnevKyoOq5g+gRaR7qJ3DjwpgECwTFh6H61DiuDMFQc7pAUkhQUkZVT/wAkwdqyspME/W4E2n0HcozqVPK1uUbbcx5oxfElmG0GDaSIMJ/yAYqB/iji3Q0nQTKyCSnr11j96ysqtHE1H03FxmBPulKmFpUqjTTGUl0W4WTPCuLsG8QolMApeykL0mFgSnfnfapG+2GHOdsHK8glJaX4VSNSDMEbyDeRzrKymcPXc8EHYDvgs7F4SnTILdyffr1WdnO1AxCyhTUAHKVApUJibwbT1A9dmb/H8C26W3XW23AYyrsel9L1lZR3PIcAEoKTS0khMVcQYSjOXElJ0IIVPlEzaheEcaYxK1IaV8EEjTUnY328q8rKYawGm53BLOflcGjdH4gZElRWQBcnX5RQzGLKhKe8Kf7imB6TB+VZWULKMswrOMO/1ShkqEZrH83oJ5nDoWErcbCjsopBPpWVlRmUtZm1nqkmI7WMhAV3cIMFJUQkmSRYek3O4pC72sDnegqS0coSlMhQMzKogxdTYvvWVlFFzClrGgzCS43iuCfQsKS46ttAOdwCRYykCL3gxB08xS3hfG33gW2AhLmhiErWnYA2ygA/CmIuedZWUYNFlEhoJA2SjiXEMQmcO8VkIIIQpZVkOsXN7GnSX0FlCm0B1hRDTjJNwu6gtNpSYkAiNta9rKhv9kN7zkB73TfgYQG8hcUWQbZxC2zrkWOmoI+1KuNcSxOGdLYVKTKkGR8JUY9oj0rysoxCq57mkCbX9D+1/9k=",
		quote: "The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
	},
]

function App() {
	let imageList = useRef(null)
	let testimonialList = useRef(null)
	const imageWidth = 340

	const [show, setShow] = useState({
		isActive1: true,
		isActive2: false,
		isActive3: false,
	})

	useEffect(() => {
		//console.log(imageList.children) //returns all children in an array

		TweenLite.to(testimonialList, 1, {
			opacity: 1,
		})
	}, [])

	const nextSlide = () => {
		if (imageList.children[0].classList.contains("active")) {
			setShow({ isActive1: false, isActive2: true })
			TweenLite.to(imageList.children[0], 1, {
				x: -500,
				ease: Power3.easeOut,
			})
			TweenLite.to(imageList.children[1], 1, {
				x: -500,
				ease: Power3.easeOut,
			})
			TweenLite.from(imageList.children[1], 1, {
				scale: 1.2,
				ease: Power0.easeIn,
			})

			TweenLite.to(testimonialList.children[0], 0.5, {
				opacity: 0,
				ease: Power0.easeIn,
			})
			TweenLite.to(testimonialList.children[1], 0.5, {
				opacity: 1,
				delay: 0.5,
				ease: Power0.easeIn,
			})
		} else if (imageList.children[1].classList.contains("active")) {
			setShow({ isActive2: false, isActive3: true })
			TweenLite.to(imageList.children[1], 1, {
				x: -500 * 2,
				ease: Power3.easeOut,
			})
			TweenLite.to(imageList.children[2], 1, {
				x: -500 * 2,
				ease: Power3.easeOut,
			})
			TweenLite.from(imageList.children[2], 1, {
				scale: 1.2,
				ease: Power0.easeIn,
			})

			TweenLite.to(testimonialList.children[1], 0.5, {
				opacity: 0,
				ease: Power0.easeIn,
			})
			TweenLite.to(testimonialList.children[2], 0.5, {
				opacity: 1,
				delay: 0.5,
				ease: Power0.easeIn,
			})
		}
	}

	const prevSlide = () => {
		if (imageList.children[1].classList.contains("active")) {
			setShow({ isActive1: true, isActive2: false })
			TweenLite.to(imageList.children[1], 1, {
				x: 500,
				ease: Power3.easeOut,
			})
			TweenLite.to(imageList.children[0], 1, {
				x: 0,
				ease: Power3.easeOut,
			})
			TweenLite.from(imageList.children[0], 1, {
				scale: 1.2,
				ease: Power0.easeIn,
			})

			TweenLite.to(testimonialList.children[1], 0.5, {
				opacity: 0,
				ease: Power0.easeIn,
			})
			TweenLite.to(testimonialList.children[0], 0.5, {
				opacity: 1,
				delay: 0.5,
				ease: Power0.easeIn,
			})
		} else if (imageList.children[2].classList.contains("active")) {
			setShow({ isActive2: true, isActive3: false })
			TweenLite.to(imageList.children[2], 1, {
				x: 0,
				ease: Power3.easeOut,
			})
			TweenLite.to(imageList.children[1], 1, {
				x: -500,
				ease: Power3.easeOut,
			})
			TweenLite.from(imageList.children[1], 1, {
				scale: 1.2,
				ease: Power0.easeIn,
			})

			TweenLite.to(testimonialList.children[2], 0.5, {
				opacity: 0,
				ease: Power0.easeIn,
			})
			TweenLite.to(testimonialList.children[1], 0.5, {
				opacity: 1,
				delay: 0.5,
				ease: Power0.easeIn,
			})
		}
	}

	return (
		<div className='testimonial-section'>
			<div className='testimonial-container'>
				<div
					className='arrows left'
					onClick={() => {
						prevSlide()
					}}>
					<span>{`<`}</span>
				</div>

				<div className='inner'>
					<div className='t-image'>
						<ul ref={(el) => (imageList = el)}>
							<li className={show.isActive1 ? "active" : null}>
								<img src={testimonials[0].image} alt='' />
							</li>
							<li className={show.isActive2 ? "active" : null}>
								<img src={testimonials[1].image} alt='' />
							</li>
							<li className={show.isActive3 ? "active" : null}>
								<img src={testimonials[2].image} alt='' />
							</li>
						</ul>
					</div>
					<div className='t-content'>
						<ul ref={(el) => (testimonialList = el)}>
							<li>
								<div className='content-inner'>
									<p className='quote'>{testimonials[0].quote}</p>
									<h3 className='name'>{testimonials[0].name}</h3>
									<h4 className='title'>{testimonials[0].title}</h4>
								</div>
							</li>
							<li>
								<div className='content-inner'>
									<p className='quote'>{testimonials[1].quote}</p>
									<h3 className='name'>{testimonials[1].name}</h3>
									<h4 className='title'>{testimonials[1].title}</h4>
								</div>
							</li>
							<li>
								<div className='content-inner'>
									<p className='quote'>{testimonials[2].quote}</p>
									<h3 className='name'>{testimonials[2].name}</h3>
									<h4 className='title'>{testimonials[2].title}</h4>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className='arrows right' onClick={(event) => nextSlide()}>
					<span> {`>`} </span>
				</div>
			</div>
		</div>
	)
}

export default App
