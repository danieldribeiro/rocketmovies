import styled from "styled-components"

export const Container = styled.div`
	width: 100%;

	> header {
		width: 100%;
		height: 145px;
		background-color: ${({theme}) => theme.COLORS.PINK_100};
		display: flex;
		align-items: center;
		padding: 0 123px;
		font-size: 18px;
		color: ${({theme}) => theme.COLORS.PINK};

    > svg {
      cursor: pointer;
    }

    > span {
      margin-left: 10px;
      cursor: pointer;
    }
	}

`

export const Form = styled.form`
	max-width: 340px;
  margin: 30px auto 0;

	> div:nth-child(4){
		margin-top: 32px;
	}

	button{
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 32px;
	}
`

export const Avatar = styled.div`
	position: relative;
	margin: -124px auto 32px;
	width: 186px;
	height: 186px;

	> img {
		width: 186px;
		height: 186px;
		border-radius: 50%;
	}

	> label {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background-color: ${({theme}) => theme.COLORS.PINK};
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 0;
		right: 7px;
		cursor: pointer;

		> input {
			display: none;
		}

		> svg {
			font-size: 24px;
			color: ${({theme}) => theme.COLORS.BACKGROUND_900};
		}
	}
`